<template>
  <!-- Overlay du Modal (Arrière-plan sombre) -->
  <Transition name="fade">
    <div v-if="isOpen" class="fixed inset-0 bg-black/45 bg-opacity-70 z-50 flex items-center justify-center p-4">

      <!-- Conteneur du Modal (Plus petit) -->
      <Transition name="drop-in">
        <div class="bg-white rounded-2xl w-full max-w-md p-6 md:p-8 shadow-2xl relative">

          <!-- Bouton Fermer -->
          <button @click="emit('close')" class="absolute top-4 right-4 text-gray-400 hover:text-black transition-all duration-300 hover:scale-110">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>

          <!-- Titre -->
          <h2 class="text-xl font-bold text-center mb-2">Vérification</h2>

          <!-- Description -->
          <p class="text-gray-500 text-center text-xs leading-relaxed mb-5">
            Entrez le code à 4 chiffres envoyé par email
          </p>

          <!-- Email affiché -->
          <div class="text-center mb-4">
            <p class="text-xs text-gray-400">
              Envoyé à <span class="font-medium text-gray-700">{{ props.email }}</span>
            </p>
          </div>

          <!-- Zone des inputs OTP - Plus petits -->
          <div class="flex items-center justify-center gap-2 md:gap-3 mb-6">
            <input
              v-for="(value, index) in otpValues"
              :key="index"
              v-model="otpValues[index]"
              type="text"
              maxlength="1"
              class="w-10 h-10 md:w-12 md:h-12 text-center text-xl md:text-2xl font-mono font-bold border-2 border-gray-200 rounded-xl focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
              :class="{ 'border-amber-500 ring-2 ring-amber-200': otpValues[index] }"
              :ref="el => inputRefs[el] = el"
              @input="handleInput(index, $event)"
              @keydown="handleKeyDown(index, $event)"
              @paste="handlePaste"
            />
          </div>

          <!-- Section Renvoi et Compteur -->
          <div class="text-center text-xs text-gray-500 mb-5">
            <button
              @click="resendCode"
              class="font-medium transition-all duration-300"
              :class="isResendEnabled ? 'text-amber-500 hover:text-amber-600 hover:underline' : 'text-gray-400 cursor-not-allowed'"
              :disabled="!isResendEnabled"
            >
              <span v-if="!isResendEnabled">Renvoyer dans {{ formattedTimer }}</span>
              <span v-else>Renvoyer le code</span>
            </button>
          </div>

          <!-- Bouton Continuer -->
          <button
            @click="submitOtp"
            class="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold py-2.5 rounded-xl hover:from-amber-600 hover:to-orange-600 transition-all duration-300 text-sm shadow-md active:scale-[0.98]"
          >
            Vérifier
          </button>

        </div>
      </Transition>

    </div>
  </Transition>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted, computed, watch } from 'vue'

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true
  },
  email: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['close', 'submit', 'back'])

// Nombre de chiffres pour l'OTP
const OTP_LENGTH = 4
const INITIAL_TIMER = 57

// Réserve des tableaux pour les inputs et leurs valeurs
const otpValues = reactive(Array(OTP_LENGTH).fill(''))
const inputRefs = ref([])

// État pour le compte à rebours
const timerSeconds = ref(INITIAL_TIMER)
const isResendEnabled = ref(false)
let timerInterval = null

// Formate les secondes en MM:SS
const formattedTimer = computed(() => {
  const minutes = Math.floor(timerSeconds.value / 60)
  const seconds = timerSeconds.value % 60
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
})

// Gestion du compte à rebours
const startTimer = () => {
  if (timerInterval) clearInterval(timerInterval)
  timerSeconds.value = INITIAL_TIMER
  isResendEnabled.value = false
  timerInterval = setInterval(() => {
    if (timerSeconds.value > 0) {
      timerSeconds.value--
    } else {
      isResendEnabled.value = true
      clearInterval(timerInterval)
    }
  }, 1000)
}

// Réinitialiser les valeurs OTP
const resetOtpValues = () => {
  for (let i = 0; i < OTP_LENGTH; i++) {
    otpValues[i] = ''
  }
}

// Surveiller l'ouverture du modal
watch(() => props.isOpen, (newVal) => {
  if (newVal) {
    resetOtpValues()
    startTimer()
    setTimeout(() => {
      if (inputRefs.value[0]) {
        inputRefs.value[0].focus()
      }
    }, 100)
  }
})

onUnmounted(() => {
  if (timerInterval) clearInterval(timerInterval)
})

// Logique pour passer au champ suivant/précédent
const handleInput = (index, event) => {
  const value = event.target.value

  if (!/^\d*$/.test(value)) {
    otpValues[index] = ''
    return
  }

  otpValues[index] = value.charAt(0)

  if (value && index < OTP_LENGTH - 1) {
    inputRefs.value[index + 1]?.focus()
  }
}

const handleKeyDown = (index, event) => {
  if (event.key === 'Backspace') {
    if (!otpValues[index] && index > 0) {
      inputRefs.value[index - 1]?.focus()
      otpValues[index - 1] = ''
    } else {
      otpValues[index] = ''
    }
  }
}

// Gérer le collage de code OTP
const handlePaste = (event) => {
  event.preventDefault()
  const pastedData = event.clipboardData.getData('text')
  const digits = pastedData.replace(/\D/g, '').slice(0, OTP_LENGTH)

  if (digits) {
    const digitsArray = digits.split('')
    for (let i = 0; i < OTP_LENGTH; i++) {
      otpValues[i] = digitsArray[i] || ''
    }
    const lastFilledIndex = Math.min(digitsArray.length, OTP_LENGTH - 1)
    setTimeout(() => {
      if (inputRefs.value[lastFilledIndex]) {
        inputRefs.value[lastFilledIndex].focus()
      }
    }, 10)
  }
}

// Action sur le bouton "Continuer"
const submitOtp = () => {
  const finalCode = otpValues.join('')
  if (finalCode.length === OTP_LENGTH) {
    emit('submit', finalCode)
  } else {
    alert("Veuillez entrer le code complet à 4 chiffres.")
  }
}

// Action sur "Renvoyer"
const resendCode = () => {
  if (!isResendEnabled.value) return
  alert(`Un nouveau code a été envoyé à ${props.email}.`)
  startTimer()
  resetOtpValues()
}
</script>

<style scoped>
/* Animations pour l'apparition du modal */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.drop-in-enter-active {
  transition: all 0.3s cubic-bezier(0.34, 1.2, 0.64, 1);
}
.drop-in-leave-active {
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}
.drop-in-enter-from {
  opacity: 0;
  transform: translateY(-20px) scale(0.96);
}
.drop-in-leave-to {
  opacity: 0;
  transform: translateY(10px) scale(0.98);
}
</style>

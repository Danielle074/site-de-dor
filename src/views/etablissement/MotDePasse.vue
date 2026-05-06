<template>
  <div class="min-h-screen bg-white flex flex-col items-center pt-12 px-6">
    <div class="w-full max-w-xl">

      <!-- En-tête -->
      <div class="text-center mb-12">
        <h1 class="text-3xl font-bold mb-4">Sécurité</h1>
        <p class="text-gray-600 text-sm leading-relaxed max-w-sm mx-auto">
          Veuillez saisir votre mot de passe pour garantir la sécurité de votre compte DOR.com.
        </p>
      </div>

      <!-- Formulaire -->
      <form @submit.prevent="handleSubmit" class="space-y-8">

        <!-- Mot de passe -->
        <div class="space-y-2">
          <label class="block text-sm font-bold ml-1">Mot de passe</label>
          <div class="relative group">
            <input
              v-model="password"
              :type="showPassword ? 'text' : 'password'"
              placeholder="********"
              class="w-full border border-gray-300 rounded-2xl p-4 pr-12 outline-none focus:ring-2 ring-zinc-500 transition-all font-mono"
            />
            <button
              type="button"
              @click="showPassword = !showPassword"
              class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <svg v-if="!showPassword" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18" />
              </svg>
              <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </button>
          </div>
        </div>

        <!-- Confirmer le mot de passe -->
        <div class="space-y-2">
          <label class="block text-sm font-bold ml-1">Confirmer le mot de passe</label>
          <div class="relative group">
            <input
              v-model="confirmPassword"
              :type="showConfirmPassword ? 'text' : 'password'"
              placeholder="********"
              class="w-full border border-gray-300 rounded-2xl p-4 pr-12 outline-none focus:ring-2 ring-zinc-500 transition-all font-mono"
            />
            <button
              type="button"
              @click="showConfirmPassword = !showConfirmPassword"
              class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <svg v-if="!showConfirmPassword" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18" />
              </svg>
              <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </button>
          </div>
        </div>

        <!-- Bouton Suivant centré -->
        <div class="flex justify-center pt-4">
          <button
            type="submit"
            class="bg-[#1e1e1e] text-white font-bold py-4 px-24 rounded-2xl hover:bg-zinc-800 transition-colors text-base cursor-pointer"
          >
            Suivant
          </button>
        </div>

      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const password = ref('')
const confirmPassword = ref('')

const showPassword = ref(false)
const showConfirmPassword = ref(false)

const handleSubmit = () => {
  if (password.value !== confirmPassword.value) {
    alert("Les mots de passe ne correspondent pas.")
    return
  }
  if (password.value.length < 6) {
    alert("Le mot de passe doit contenir au moins 6 caractères.")
    return
  }
  console.log('Mot de passe enregistré')
  // Redirection après validation
  router.push('/etablissement/hebergement')
}
</script>

<style scoped>
input[type="password"] {
  letter-spacing: 0.1em;
}

input::placeholder {
  color: #d1d5db;
  letter-spacing: normal;
}
</style>

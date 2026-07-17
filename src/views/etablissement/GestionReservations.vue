<template>
  <div class="max-w-2xl mx-auto p-6 font-sans text-[#1A1A1A] relative">
    <h1 class="text-3xl font-bold mb-4">Comment recevez-vous vos réservations ?</h1>

    <div class="grid grid-cols-3 gap-2 mb-8">
      <div class="h-1.5 rounded-full transition-colors duration-300" :class="currentStep >= 1 ? 'bg-black' : 'bg-gray-200'"></div>
      <div class="h-1.5 rounded-full transition-colors duration-300" :class="currentStep >= 2 ? 'bg-black' : 'bg-gray-200'"></div>
      <div class="h-1.5 rounded-full transition-colors duration-300" :class="currentStep >= 3 ? 'bg-black' : 'bg-gray-200'"></div>
    </div>

    <div v-if="currentStep === 1" class="space-y-6">
      <h2 class="text-lg font-semibold">Comment les clients peuvent-ils réserver votre appartement ?</h2>

      <div class="space-y-4">
        <label
          class="flex items-center justify-between p-6 border rounded-xl cursor-pointer transition-all"
          :class="reservationMode === 'instant' ? 'border-black bg-gray-50/50' : 'border-gray-200'"
        >
          <div class="flex items-center gap-4">
            <input type="radio" v-model="reservationMode" value="instant" class="w-5 h-5 accent-black" />
            <span class="text-sm font-medium">Tous les clients peuvent réserver instantanément</span>
          </div>
          <span class="text-[10px] font-bold text-green-600 bg-green-50 px-2 py-1 rounded border border-green-100 uppercase tracking-tighter">
            Recommandé
          </span>
        </label>

        <label
          class="flex items-center p-6 border rounded-xl cursor-pointer transition-all"
          :class="reservationMode === 'request' ? 'border-black bg-gray-50/50' : 'border-gray-200'"
        >
          <div class="flex items-center gap-4">
            <input type="radio" v-model="reservationMode" value="request" class="w-5 h-5 accent-black" />
            <span class="text-sm font-medium">Tous les clients doivent envoyer une demande de réservation</span>
          </div>
        </label>
      </div>
    </div>

    <div v-if="currentStep === 2" class="space-y-6">
      <h2 class="text-xl font-bold">Tarif par nuit</h2>

      <div class="border border-gray-200 rounded-2xl p-6 bg-white shadow-sm space-y-4">
        <label class="block text-sm font-semibold text-gray-700">Combien souhaitez-vous facturer par nuit ?</label>
        <div class="relative">
          <input
            type="text"
            v-model="pricePerNight"
            placeholder="XOF"
            class="w-full px-4 py-4 border border-gray-400 rounded-xl focus:outline-none focus:border-black text-lg font-bold"
          />
        </div>
        <div class="space-y-1">
          <p class="text-xs text-gray-500 font-medium">Taxes, commission et frais compris</p>
          <p class="text-xs text-gray-800 font-bold">5.00% de Commission DOR.com</p>
        </div>
      </div>
    </div>

    <div v-if="currentStep === 3" class="space-y-8">

      <div class="space-y-4">
        <h2 class="text-lg font-bold">À partir de quelle date les clients peuvent-ils arriver dans votre hébergement ?</h2>
        <div class="flex gap-4">
          <label class="flex items-center gap-2 p-3 border rounded-lg cursor-pointer text-xs font-bold" :class="startDate === 'asap' ? 'border-black bg-gray-50' : 'border-gray-200'">
            <input type="radio" v-model="startDate" value="asap" class="w-4 h-4 accent-black" />
            Dès que possible
          </label>
          <label class="flex items-center gap-2 p-3 border rounded-lg cursor-pointer text-xs font-bold" :class="startDate === 'specific' ? 'border-black bg-gray-50' : 'border-gray-200'">
            <input type="radio" v-model="startDate" value="specific" class="w-4 h-4 accent-black" />
            À partir d'une date précise
          </label>
        </div>
      </div>

      <div class="space-y-4">
        <h2 class="text-lg font-bold">Comment souhaitez-vous ouvrir des dates à la réservation ?</h2>
        <div class="space-y-3">
          <label class="flex items-start gap-3 cursor-pointer">
            <input type="radio" v-model="openingType" value="continuous" class="mt-1 w-4 h-4 accent-black" />
            <div class="space-y-2">
              <span class="text-sm font-bold">Prolonger continuellement mes disponibilités pour :</span>
              <select v-model="availabilityPeriod" class="block w-full p-3 border border-gray-300 rounded-xl bg-white text-sm font-bold focus:border-black focus:outline-none">
                <option value="60">60 jours</option>
                <option value="90">90 jours</option>
                <option value="180">180 jours</option>
                <option value="365">365 jours</option>
              </select>
            </div>
          </label>
          <label class="flex items-center gap-3 cursor-pointer">
            <input type="radio" v-model="openingType" value="first18" class="w-4 h-4 accent-black" />
            <span class="text-sm font-bold">Ouvrir uniquement mes disponibilités pour les 18 premiers mois</span>
          </label>
        </div>
      </div>

      <div class="space-y-4">
        <h2 class="text-lg font-bold">Souhaitez-vous autoriser les séjours de plus de 30 nuits ?</h2>
        <div class="bg-blue-50/40 p-4 rounded-xl">
          <p class="text-[11px] text-gray-600 leading-relaxed">
            Permettre aux clients de séjourner jusqu'à 90 nuits dans votre établissement peut vous aider à remplir vos disponibilités et à tirer parti de la tendance actuelle au télétravail.
          </p>
        </div>
        <div class="space-y-3">
          <p class="text-sm font-bold">Acceptez-vous les réservations de plus de 30 nuits ?</p>
          <div class="flex gap-6">
            <label class="flex items-center gap-2 cursor-pointer font-bold text-sm"><input type="radio" v-model="longStay" :value="true" class="w-4 h-4 accent-black" /> Oui</label>
            <label class="flex items-center gap-2 cursor-pointer font-bold text-sm"><input type="radio" v-model="longStay" :value="false" class="w-4 h-4 accent-black" /> Non</label>
          </div>
        </div>

        <div v-if="longStay" class="space-y-3 pt-2">
          <p class="text-sm font-bold text-gray-700">Quel nombre de nuits maximum souhaitez-vous que les clients puissent réserver ?</p>
          <select v-model="maxNights" class="w-full p-4 border border-gray-300 rounded-xl bg-white text-sm font-bold shadow-sm">
            <option value="45">45 Nuits</option>
            <option value="60">60 Nuits</option>
            <option value="75">75 Nuits</option>
            <option value="90">90 Nuits</option>
          </select>
        </div>
      </div>
    </div>

    <div class="flex items-center gap-6 mt-12">
      <div class="flex-1">
        <button type="button" @click="handleNext" class="w-full py-4 bg-[#1F1F1F] text-white text-center font-semibold rounded-xl hover:bg-black transition-colors">
          Suivant
        </button>
      </div>
      <button type="button" @click="handleBack" class="flex items-center gap-1 text-sm font-semibold text-gray-800 hover:underline">
        <i class="bx bx-chevron-left text-xl"></i> Retour
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// Navigation
const currentStep = ref<number>(1)

// Étape 1 : Mode
const reservationMode = ref<string>('instant')

// Étape 2 : Prix
const pricePerNight = ref<string>('')

// Étape 3 : Calendrier
const startDate = ref<string>('asap')
const openingType = ref<string>('continuous')
const availabilityPeriod = ref<string>('365')
const longStay = ref<boolean>(true)
const maxNights = ref<string>('60')

// Fonctions de navigation corrigées
const handleNext = () => {
  if (currentStep.value < 3) {
    currentStep.value++
  } else {
    // Redirection finale après la dernière étape
    router.push('/votre-route-finale')
  }
}

const handleBack = () => {
  if (currentStep.value > 1) {
    currentStep.value--
  } else {
    // Retour au formulaire précédent ou router back
    router.back()
  }
}
</script>

<style scoped>
/* Personnalisation légère pour les radios pour qu'ils soient bien noirs */
input[type="radio"] {
  border: 2px solid #ddd;
}
input[type="radio"]:checked {
  border-color: black;
}
</style>

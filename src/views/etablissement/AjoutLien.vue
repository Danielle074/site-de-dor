<template>
  <div class="max-w-2xl mx-auto p-6 font-sans text-[#1A1A1A]">
    <h1 class="text-3xl font-bold mb-2">Appartements</h1>
    <p class="text-lg text-gray-700 mb-6">Où avez-vous inscrit votre hébergement ?</p>

    <router-link
      to="/etablissement/le-choix"
      class="flex items-center gap-1 text-sm font-semibold mb-6 hover:underline"

    >
      <i class="bx bx-chevron-left text-xl"></i>
      Retour
    </router-link>

    <div class="border border-gray-200 rounded-2xl p-6 md:p-8 bg-white shadow-sm mb-6">
      <p class="text-sm text-gray-900 leading-relaxed mb-6">
        Si votre établissement est déjà présent sur d’autres sites de voyage, vous pouvez accélérer la procédure d’inscription en important les données dans DOR.com
      </p>

      <div class="space-y-3 mb-8">
        <label
          v-for="platform in platforms"
          :key="platform.id"
          class="flex items-center gap-3 cursor-pointer select-none text-sm font-medium"
        >
          <input
            type="checkbox"
            :value="platform.id"
            v-model="selectedPlatforms"
            :disabled="isNotRegistered"
            @change="handlePlatformCheckboxChange"
            class="w-5 h-5 accent-black rounded border-gray-300 focus:ring-0 cursor-pointer"
          />
          <span :class="{ 'text-gray-400': isNotRegistered }">{{ platform.name }}</span>
        </label>

        <label class="flex items-center gap-3 cursor-pointer select-none text-sm font-medium">
          <input
            type="checkbox"
            v-model="isNotRegistered"
            @change="handleNoneCheckboxChange"
            class="w-5 h-5 accent-black rounded border-gray-300 focus:ring-0 cursor-pointer"
          />
          <span class="text-gray-400">Mon hébergement n’est inscrit sur aucun autre site Internet</span>
        </label>
      </div>

      <div class="space-y-4">
        <label class="block text-sm font-semibold">
          Ajoutez le lien du site de voyage où votre établissement est inscrit
        </label>

        <div class="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            v-model="urlInput"
            :disabled="isNotRegistered"
            placeholder="https://www.airbnb.com/hébergements/xxxxxxxx"
            class="flex-1 px-4 py-3.5 border border-gray-400 rounded-xl focus:outline-none focus:border-black disabled:bg-gray-50 disabled:text-gray-400 transition-colors placeholder:text-gray-400"
          />

          <RouterLink
            v-if="isUrlValid"
            to="/votre-route-suivante"
            class="px-8 py-3.5 bg-[#1F1F1F] text-white font-medium rounded-xl text-center hover:bg-black transition-colors flex items-center justify-center whitespace-nowrap"
            @click="addLink"
          >
            Ajouter
          </RouterLink>

          <button
            v-else
            type="button"
            disabled
            class="px-8 py-3.5 bg-[#2E2E2E] text-gray-400 font-medium rounded-xl cursor-not-allowed whitespace-nowrap"
          >
            Ajouter
          </button>
        </div>

        <div class="text-xs text-gray-800 space-y-0.5">
          <p class="font-medium">Exemple de lien :</p>
          <p class="text-gray-600 break-all">https://www.airbnb.com/hébergements/xxxxxxxx</p>
        </div>
      </div>
    </div>

    <RouterLink
      to="/etablissement/information-generale"
      class="block w-full py-4 bg-[#1F1F1F] text-white text-center font-semibold rounded-xl hover:bg-black transition-colors"
    >
      Suivant
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

// Interface pour typer les plateformes
interface Platform {
  id: string
  name: string
}

// Liste des plateformes à afficher
const platforms: Platform[] = [
  { id: 'airbnb', name: 'Airbnb' },
  { id: 'airbna', name: 'Airbna' },
  { id: 'trivaga', name: 'Trivaga' },
  { id: 'tripbnb', name: 'Tripbnb' }
]

// États réactifs
const selectedPlatforms = ref<string[]>(['airbnb']) // Airbnb coché par défaut comme sur l'image
const isNotRegistered = ref<boolean>(false)
const urlInput = ref<string>('')

// Gestion de la case "Mon hébergement n'est inscrit sur aucun autre site"
const handleNoneCheckboxChange = () => {
  if (isNotRegistered.value) {
    selectedPlatforms.value = []
    urlInput.value = ''
  }
}

// Décoche la case "aucun site" si l'utilisateur sélectionne à nouveau une plateforme
const handlePlatformCheckboxChange = () => {
  if (selectedPlatforms.value.length > 0) {
    isNotRegistered.value = false
  }
}

// Le bouton "Ajouter" passe en mode cliquable (true) dès qu'il y a du texte
const isUrlValid = computed(() => {
  return urlInput.value.trim().length > 0
})

// Logique du clic sur "Ajouter"
const addLink = () => {
  if (!isUrlValid.value) return
  console.log('Lien enregistré :', urlInput.value)
}
</script>

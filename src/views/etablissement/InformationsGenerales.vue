<template>
  <div class="max-w-2xl mx-auto p-6 font-sans text-[#1A1A1A]">
    <!-- Titres principaux -->
    <h1 class="text-3xl font-bold mb-2">Informations Générales</h1>
    <p class="text-lg text-gray-700 mb-6">Le nom de votre hebergement</p>

    <!-- Bouton Retour -->
    <router-link
      to="/etablissement/ajout-lien"
      class="flex items-center gap-1 text-sm font-semibold mb-6 hover:underline"
    >
      <i class="bx bx-chevron-left text-xl"></i>
      Retour
    </router-link>


    <!-- Conteneur Principal (Carte blanche) -->
    <div class="border border-gray-200 rounded-2xl p-6 md:p-8 bg-white shadow-sm mb-6">
      <div class="space-y-3">
        <label class="block text-sm font-bold">
          Nom de l'hebergement
        </label>

        <input
          type="text"
          v-model="accommodationName"
          placeholder="Ex: SCB HOME"
          class="w-full px-4 py-4 border border-gray-400 rounded-2xl focus:outline-none focus:border-black transition-colors placeholder:text-gray-300 text-lg"
        />
      </div>
    </div>

    <!-- Bouton Suivant dynamique (RouterLink si rempli, bouton grisé si vide) -->
    <RouterLink
      v-if="isFormValid"
      to="/etablissement/adress-form"
      class="block w-full py-4 bg-[#1F1F1F] text-white text-center font-semibold rounded-xl hover:bg-black transition-colors"
    >
      Suivant
    </RouterLink>

    <button
      v-else
      type="button"
      disabled
      class="w-full py-4 bg-[#2E2E2E] text-gray-400 font-semibold rounded-xl cursor-not-allowed text-center"
    >
      Suivant
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

// État réactif pour stocker le nom de l'hébergement
const accommodationName = ref<string>('')

// Le formulaire est valide si le champ n'est pas vide
const isFormValid = computed(() => {
  return accommodationName.value.trim().length > 0
})
</script>

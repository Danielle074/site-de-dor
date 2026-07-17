<template>
  <div class="min-h-screen bg-gray-50 p-6 font-sans text-[#262626]">
    <div class="max-w-2xl mx-auto">

      <h1 class="text-3xl font-bold mb-2">Appartements</h1>
      <p class="text-lg mb-6">Où avez-vous inscrit votre hébergement ?</p>

      <router-link to="/etablissement/choix-appartements" class="flex items-center text-sm text-gray-600 mb-8 hover:underline">
        <span class="mr-2">‹</span> Retour
      </router-link>

      <div class="bg-white border border-gray-200 rounded-xl p-8 shadow-sm mb-6">
        <p class="text-[15px] leading-relaxed mb-8">
          Si votre établissement est déjà présent sur d'autres sites de voyage, vous pouvez accélérer la procédure d'inscription en important les données dans DOR.com
        </p>

        <div class="space-y-4">
          <div v-for="option in options" :key="option.id" class="flex items-center">
            <input
              type="checkbox"
              :id="option.id"
              v-model="selectedOptions"
              :value="option.id"
              class="w-5 h-5 border-gray-300 rounded text-black focus:ring-black"
            />
            <label :for="option.id" class="ml-3 text-[15px] cursor-pointer">
              {{ option.label }}
            </label>
          </div>

          <div class="flex items-center pt-2">
            <input
              type="checkbox"
              id="none"
              v-model="selectedOptions"
              value="none"
              @change="toggleNone"
              class="w-5 h-5 border-gray-300 rounded text-black focus:ring-black"
            />
            <label id="none-label" for="none" class="ml-3 text-[15px] cursor-pointer">
              Mon hébergement n'est inscrit sur aucun autre site Internet
            </label>
          </div>
        </div>
      </div>

      <RouterLink
        to="/etablissement/ajout-lien"
        class="block w-full bg-[#262626] text-white text-center py-4 rounded-lg font-semibold hover:bg-black transition-colors"
      >
        Suivant
      </RouterLink>

    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';

// État pour les options sélectionnées
const selectedOptions = ref(['none']);

const options = [
  { id: 'airbnb', label: 'Airbnb' },
  { id: 'airbna', label: 'Airbna' },
  { id: 'trivaga', label: 'Trivaga' },
  { id: 'tripbnb', label: 'Tripbnb' },
];

// Logique pour décocher les autres si "Aucun" est sélectionné (optionnel)
const toggleNone = () => {
  if (selectedOptions.value.includes('none')) {
    selectedOptions.value = ['none'];
  }
};
</script>
<style scoped>
/* On personnalise légèrement la checkbox pour qu'elle soit bien noire une fois cochée */
input[type="checkbox"]:checked {
  background-color: #262626;
  border-color: #262626;
}
</style>

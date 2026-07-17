<template>
  <div class="min-h-screen bg-gray-50 flex flex-col items-center justify-start p-6 font-sans text-gray-900">

    <div class="w-full max-w-2xl">
      <h1 class="text-3xl font-bold mb-2">Appartements</h1>
      <p class="text-gray-600 mb-6 text-lg">Combien d’appartements allez vous inscrire?</p>

      <router-link to="/etablissement/appartement" class="flex items-center text-gray-700 hover:text-black mb-6 transition-all">
        <i class='bx bx-chevron-left text-2xl'></i>
        <span class="text-sm font-medium">Retour</span>
      </router-link>

      <div class="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm space-y-6 mb-8">

        <div class="space-y-3">
          <div
            @click="typeSelection = 'un'"
            :class="['flex items-center p-5 rounded-xl border-2 cursor-pointer transition-all',
                    typeSelection === 'un' ? 'border-black bg-white' : 'border-gray-100 bg-gray-50/30']"
          >
            <div class="mr-6"><i class='bx bxs-home text-3xl'></i></div>
            <span class="font-medium">1 Appartement</span>
          </div>

          <div
            @click="typeSelection = 'plusieurs'"
            :class="['flex items-center p-5 rounded-xl border-2 cursor-pointer transition-all',
                    typeSelection === 'plusieurs' ? 'border-black bg-white' : 'border-gray-100 bg-gray-50/30']"
          >
            <div class="mr-6 relative">
              <i class='bx bxs-home text-3xl'></i>
              <i class='bx bxs-home text-xl text-gray-400 absolute -left-2 top-1 -z-10'></i>
            </div>
            <span class="font-medium">Plusieurs Appartement</span>
          </div>
        </div>

        <div v-if="typeSelection === 'plusieurs'" class="space-y-4 pt-2 animate-fade-in">
          <p class="text-sm font-medium text-gray-700">Ces établissements sont-ils situés à la même adresse ou dans le même bâtiment ?</p>

          <div class="space-y-3">
            <div
              @click="adresseSelection = 'meme'"
              :class="['flex items-center p-5 rounded-xl border-2 cursor-pointer transition-all',
                      adresseSelection === 'meme' ? 'border-black bg-white' : 'border-gray-100 bg-gray-50/30']"
            >
              <div class="mr-6"><i class='bx bxs-map text-3xl'></i></div>
              <span class="text-sm leading-tight">Oui, ces appartements se trouvent à la même adresse ou dans le même bâtiment</span>
            </div>

            <div
              @click="adresseSelection = 'different'"
              :class="['flex items-center p-5 rounded-xl border-2 cursor-pointer transition-all',
                      adresseSelection === 'different' ? 'border-black bg-white' : 'border-gray-100 bg-gray-50/30']"
            >
              <div class="mr-6 relative">
                <i class='bx bxs-map text-3xl'></i>
                <i class='bx bxs-map text-xl text-gray-300 absolute -left-3 top-0'></i>
                <i class='bx bxs-map text-xl text-gray-300 absolute -right-2 top-0'></i>
              </div>
              <span class="text-sm leading-tight">Non, ces appartements se trouvent à des adresses ou dans des bâtiments différents</span>
            </div>
          </div>

          <div class="pt-4">
            <label class="block text-sm font-bold text-gray-800 mb-3">Nombre d'établissements</label>
            <div class="relative w-28">
              <input
                type="number"
                v-model="nombreApparts"
                class="w-full border-2 border-gray-200 rounded-xl p-3 focus:border-black outline-none transition-all pr-8"
                min="1"
              >
              <div class="absolute right-3 top-1/2 -translate-y-1/2 flex flex-col text-gray-400 pointer-events-none">
                <i class='bx bxs-chevron-up text-xs'></i>
                <i class='bx bxs-chevron-down text-xs'></i>
              </div>
            </div>
          </div>
        </div>

      </div>

      <!-- Bouton router-link centré et bien large -->
      <div class="flex justify-center">
        <router-link
          to="/etablissement/le-choix"
          class="w-full max-w-md bg-[#1a1a1a] text-white text-[13px] font-bold py-3 rounded-xl hover:bg-zinc-800 transition-colors text-center block"
        >
          Suivant
        </router-link>
      </div>

    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue';

// États pour gérer la logique du formulaire
const typeSelection = ref('plusieurs'); // Sélectionné par défaut sur l'image
const adresseSelection = ref('meme');   // Sélectionné par défaut sur l'image
const nombreApparts = ref(2);
</script>

<style scoped>
/* Ajout du CDN Boxicons dans votre index.html ou ici */
@import url('https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css');

/* Suppression des flèches par défaut de l'input number */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.animate-fade-in {
  animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>

<template>
  <div class="min-h-screen bg-gray-50 flex flex-col items-center justify-start p-6 font-sans">

    <div class="w-full max-w-2xl">

      <h1 class="text-3xl font-bold text-gray-800 mb-2">Appartements</h1>
      <p class="text-gray-600 mb-8 text-lg">Combien d'appartements allez vous inscrire?</p>

      <router-link to="/register" class="flex items-center text-gray-700 hover:text-black transition-colors mb-6 group">
        <i class='bx bx-chevron-left text-2xl'></i>
        <span class="text-sm font-medium">Retour</span>
      </router-link>

      <div class="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm space-y-4 mb-8">

        <div
          @click="selection = 'un'"
          :class="[
            'flex items-center p-6 rounded-xl border-2 cursor-pointer transition-all duration-200',
            selection === 'un' ? 'border-black bg-white' : 'border-gray-100 hover:border-gray-200'
          ]"
        >
          <div class="bg-gray-100 p-3 rounded-lg mr-6">
            <i class='bx bxs-home text-4xl text-black'></i>
          </div>
          <span class="text-lg font-medium text-gray-800">1 Appartement</span>
        </div>

        <div
          @click="selection = 'plusieurs'"
          :class="[
            'flex items-center p-6 rounded-xl border-2 cursor-pointer transition-all duration-200',
            selection === 'plusieurs' ? 'border-black bg-white' : 'border-gray-100 hover:border-gray-200'
          ]"
        >
          <div class="bg-gray-100 p-3 rounded-lg mr-6 relative">
            <i class='bx bxs-home-alt-2 text-4xl text-black'></i>
            <i class='bx bxs-home-alt-2 text-2xl text-gray-400 absolute -top-1 -right-1 opacity-40'></i>
          </div>
          <span class="text-lg font-medium text-gray-800">Plusieurs Appartements</span>
        </div>

      </div>

      <router-link
        to="/etablissement/choix-appartements"
        class="w-full py-4 bg-[#262626] text-white font-semibold rounded-xl hover:bg-black transition-colors shadow-lg flex items-center justify-center"
      >
        Suivant
      </router-link>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// État pour l'option sélectionnée (par défaut la première comme sur l'image)
const selection = ref('un');
</script>

<style scoped>
/* Importer Boxicons si ce n'est pas déjà fait dans votre index.html */
@import url('https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css');
</style>

<style>
body {
  background-color: #f9fafb;
}
</style>

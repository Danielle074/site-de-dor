<template>
  <div class="relative w-full h-screen overflow-hidden font-sans text-[#1A1A1A]">

    <!-- 1. Carte Leaflet en arrière-plan -->
    <div id="map" class="absolute inset-0 z-0"></div>

    <!-- 2. Overlay de contenu (Scroller pour s'assurer que tout reste accessible sur mobile) -->
    <div class="absolute inset-0 z-10 overflow-y-auto bg-black/10 p-4 md:p-8 flex flex-col justify-between pointer-events-none">

      <!-- En-tête (Titres + Bouton Retour) -->
      <div class="pointer-events-auto bg-white/80 backdrop-blur-md p-4 rounded-2xl max-w-xl shadow-sm">
        <h1 class="text-3xl font-bold mb-1">Informations Générales</h1>
        <p class="text-base text-gray-700 mb-4">Où se trouve votre hébergement ?</p>

        <router-link
          to="/etablissement/information-generale"
          class="flex items-center gap-1 text-sm font-semibold mb-6 hover:underline"
        >
          <i class="bx bx-chevron-left text-xl"></i>
          Retour
        </router-link>

      </div>

      <!-- Formulaire principal (Carte blanche) -->
      <div class="w-full max-w-xl bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-gray-100 pointer-events-auto my-6 space-y-5">

        <!-- Adresse -->
        <div class="space-y-1.5">
          <label class="block text-xs font-bold uppercase tracking-wide text-gray-700">Adresse</label>
          <input
            type="text"
            v-model="address"
            placeholder="Cocody riviera triangle"
            class="w-full px-4 py-3.5 border border-gray-300 rounded-2xl focus:outline-none focus:border-black transition-colors"
          />
        </div>

        <!-- Numéro d'appartement -->
        <div class="space-y-1.5">
          <label class="block text-xs font-bold uppercase tracking-wide text-gray-700">
            Numéro de l'appartement ou d'étage <span class="text-gray-400 font-normal lowercase">(facultatif)</span>
          </label>
          <input
            type="text"
            v-model="apartment"
            class="w-full px-4 py-3.5 border border-gray-300 rounded-2xl focus:outline-none focus:border-black transition-colors"
          />
        </div>

        <!-- Pays / Région -->
        <div class="space-y-1.5">
          <label class="block text-xs font-bold uppercase tracking-wide text-gray-700">Pays/Région</label>
          <div class="relative">
            <select
              v-model="country"
              class="w-full px-4 py-3.5 border border-gray-300 rounded-2xl focus:outline-none focus:border-black transition-colors appearance-none bg-white cursor-pointer"
            >
              <option value="Cote d'Ivoire">Cote d'Ivoire</option>
              <option value="France">France</option>
              <option value="Sénégal">Sénégal</option>
            </select>
            <div class="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gray-500">
              <i class="bx bx-chevron-down text-xl"></i>
            </div>
          </div>
        </div>

        <!-- Ville & Code Postal -->
        <div class="grid grid-cols-2 gap-4">
          <div class="space-y-1.5">
            <label class="block text-xs font-bold uppercase tracking-wide text-gray-700">Ville</label>
            <input
              type="text"
              v-model="city"
              :class="[
                'w-full px-4 py-3.5 border rounded-2xl focus:outline-none transition-colors',
                cityError ? 'border-red-400 focus:border-red-500' : 'border-gray-300 focus:border-black'
              ]"
            />
          </div>

          <div class="space-y-1.5">
            <label class="block text-xs font-bold uppercase tracking-wide text-gray-700">Code postal</label>
            <input
              type="text"
              v-model="postalCode"
              class="w-full px-4 py-3.5 border border-gray-300 rounded-2xl focus:outline-none focus:border-black transition-colors"
            />
          </div>
        </div>

      </div>

      <!-- Bouton Suivant de validation -->
      <div class="w-full max-w-xl pointer-events-auto">
        <RouterLink
          v-if="isFormValid"
          to="/etablissement/configuration-hebergement"
          class="block w-full py-4 bg-[#1F1F1F] text-white text-center font-semibold rounded-xl hover:bg-black transition-colors shadow-lg"
        >
          Suivant
        </RouterLink>

        <button
          v-else
          type="button"
          disabled
          class="w-full py-4 bg-[#2E2E2E] text-gray-400 font-semibold rounded-xl cursor-not-allowed text-center shadow-md"
        >
          Suivant
        </button>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

// États des champs du formulaire
const address = ref<string>('Cocody riviera triangle')
const apartment = ref<string>('')
const country = ref<string>("Cote d'Ivoire")
const city = ref<string>('')
const postalCode = ref<string>('')

// Simule la bordure rouge sur la ville si elle est vide
const cityError = computed(() => city.value.trim().length === 0)

// Validation du formulaire
const isFormValid = computed(() => {
  return address.value.trim().length > 0 && city.value.trim().length > 0
})

onMounted(() => {
  // Coordonnées de Cocody, Abidjan
  const abidjanLatLong: [number, number] = [5.3484, -3.9785]

  // Création de la map
  const map = L.map('map', {
    zoomControl: false
  }).setView(abidjanLatLong, 15)

  // 🌟 MODIFICATION ICI : Tuiles OpenStreetMap standards (claires, colorées avec routes jaunes et espaces verts)
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map)

  /* Alternative si tu veux un style encore plus proche du rendu Google Maps (très coloré) :
    L.tileLayer('https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
      attribution: '&copy; Google'
    }).addTo(map)
  */

  // Marqueur personnalisé rose/magenta identique à l'image
  const customIcon = L.divIcon({
    html: `
      <div class="relative flex items-center justify-center">
        <div class="w-8 h-8 bg-[#E61E63] rounded-full border-2 border-white shadow-md flex items-center justify-center">
          <div class="w-2 h-2 bg-white rounded-full"></div>
        </div>
        <div class="absolute -bottom-1 w-3 h-3 bg-[#E61E63] rotate-45"></div>
      </div>
    `,
    className: '',
    iconSize: [32, 32],
    iconAnchor: [16, 36]
  })

  // Ajouter le marqueur au centre
  L.marker(abidjanLatLong, { icon: customIcon }).addTo(map)
})
</script>

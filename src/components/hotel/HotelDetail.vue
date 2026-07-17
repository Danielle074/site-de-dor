<template>
  <div class="max-w-6xl mx-auto p-4 font-sans text-gray-800">
    <!-- Header -->
    <header class="mb-6">
      <nav class="text-xs text-gray-500 mb-2">
        Accueil > Hôtels > <span class="font-semibold text-black">Azalaï Hotel de la Plage</span>
      </nav>
      <h1 class="text-3xl font-bold">Azalaï Hotel de la Plage</h1>
      <div class="flex items-center text-gray-600 text-sm mt-1">
        <i class='bx bx-map bx-xs mr-1'></i>
        Boulevard de la Plage, Cocody, Abidjan, Côte d'Ivoire
      </div>
    </header>

    <!-- Galerie 7 photos -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div class="lg:col-span-2 space-y-4">
        <div class="grid grid-cols-3 gap-2 h-[400px]">
          <div class="col-span-2 row-span-2 relative overflow-hidden rounded-l-xl">
            <img :src="photos[0]" class="object-cover w-full h-full" alt="Vue principale" />
          </div>
          <div class="overflow-hidden rounded-tr-xl">
            <img :src="photos[1]" class="object-cover w-full h-full" alt="Intérieur" />
          </div>
          <div class="overflow-hidden">
            <img :src="photos[2]" class="object-cover w-full h-full" alt="Piscine" />
          </div>
        </div>
        <div class="grid grid-cols-4 gap-2 h-24">
          <img v-for="i in [3,4,5,6]" :key="i" :src="photos[i]" class="rounded-md object-cover w-full h-full" />
        </div>
      </div>

      <!-- Sidebar droite -->
      <div class="space-y-4">
        <div class="border rounded-xl p-4 shadow-sm bg-white">
          <h3 class="font-bold mb-3">Retour des clients</h3>
          <p class="text-sm italic text-gray-600 mb-4">
            « Vue imprenable sur l'océan, personnel très accueillant et piscine à débordement magnifique. Un vrai coin de paradis. »
          </p>
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-gray-800 text-white flex items-center justify-center text-xs">MC</div>
            <div><p class="text-sm font-bold">Marie Claire • France</p></div>
          </div>
        </div>
        <div class="border rounded-xl p-4 shadow-sm bg-white">
          <div class="flex justify-between items-center mb-4">
            <span class="text-sm font-medium">Emplacement</span>
            <span class="bg-gray-800 text-white px-2 py-1 rounded text-sm">8.9/10</span>
          </div>
          <div class="w-full h-40 bg-gray-200 rounded-lg relative overflow-hidden">
            <div class="absolute inset-0 bg-blue-50 flex flex-col items-center justify-center">
              <i class='bx bx-map bx-lg'></i>
              <button class="mt-2 bg-gray-900 text-white text-xs px-3 py-2 rounded-full">Ouvrir la map</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- À propos - équilibré -->
    <section class="mt-20 max-w-3xl">
      <h2 class="text-xl font-bold mt-10">À propos</h2>
      <p class="text-sm leading-relaxed text-gray-700 text-justify">
        L'Azalaï Hotel de la Plage est un établissement 4 étoiles situé en bordure de l'océan Atlantique, à Abidjan.
        Il propose des chambres spacieuses avec vue mer ou jardin, une piscine à débordement, un spa, et deux restaurants gastronomiques.
        Idéal pour des vacances familiales ou des séminaires d'affaires, l'hôtel allie confort moderne et authenticité ivoirienne.
      </p>
    </section>

    <!-- Points forts -->
    <section class="mt-8 border-t pt-6">
      <h2 class="text-lg font-bold mb-4">Points forts</h2>
      <div class="grid grid-cols-2 md:grid-cols-5 gap-4 text-xs text-gray-600">
        <div class="flex items-center gap-2"><i class='bx bx-swim'></i> Piscine extérieure</div>
        <div class="flex items-center gap-2"><i class='bx bx-bed'></i> Service chambre</div>
        <div class="flex items-center gap-2"><i class='bx bx-coffee'></i> Petit déjeuner</div>
        <div class="flex items-center gap-2"><i class='bx bx-wifi'></i> Wi-Fi gratuit</div>
        <div class="flex items-center gap-2"><i class='bx bx-dumbbell'></i> Salle de sport</div>
        <div class="flex items-center gap-2"><i class='bx bx-restaurant'></i> Restaurant</div>
        <div class="flex items-center gap-2"><i class='bx bx-drink'></i> Bar de plage</div>
        <div class="flex items-center gap-2"><i class='bx bx-parking'></i> Parking gratuit</div>
      </div>
    </section>

    <!-- Disponibilité + Bouton Réviser (corrigé) -->
    <section class="mt-12 mb-20">
      <h2 class="text-xl font-bold mb-4">Disponibilité</h2>
      <div class="border rounded-2xl overflow-hidden shadow-lg">
        <div class="bg-white p-5 border-b flex flex-wrap gap-4 items-center">
          <div class="border p-2 rounded-lg flex-1 min-w-[180px]">
            <span class="text-xs text-gray-400 block">Date d'arrivée - Départ</span>
            <input type="text" placeholder="Choisir dates" class="text-sm w-full outline-none" />
          </div>
          <div class="border p-2 rounded-lg flex-1 min-w-[180px]">
            <span class="text-xs text-gray-400 block">Voyageurs</span>
            <p class="text-sm">1 chambre, 2 adultes</p>
          </div>
          <!-- Bouton Réserver bien visible -->
          <router-link
            to="/hotel/azalai-hotel-de-la-plage/information"
            class="bg-gray-800 hover:bg-black text-white px-8 py-3 rounded-full font-medium transition-colors text-center"
          >
            Réserver
          </router-link>
        </div>
        <!-- Calendrier (simplifié mais fonctionnel) -->
        <div class="p-6 bg-white overflow-x-auto">
          <div class="flex gap-10 min-w-[600px] justify-center">
            <div class="flex-1">
              <h4 class="text-center font-bold mb-4">Janvier 2026</h4>
              <div class="grid grid-cols-7 text-center text-xs gap-y-2">
                <div v-for="d in weekDays" :key="d" class="font-bold">{{d}}</div>
                <div v-for="n in 31" :key="n" class="p-2 hover:bg-gray-100 cursor-pointer rounded-full" :class="n===26?'bg-gray-800 text-white':''">{{n}}</div>
              </div>
            </div>
            <div class="flex-1">
              <h4 class="text-center font-bold mb-4">Février 2026</h4>
              <div class="grid grid-cols-7 text-center text-xs gap-y-2">
                <div v-for="d in weekDays" :key="d" class="font-bold">{{d}}</div>
                <div v-for="n in 28" :key="n" class="p-2 hover:bg-gray-100 cursor-pointer rounded-full">{{n}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// 7 photos différentes
import img1 from '@/assets/images/hotelcassablanca.jpg'
import img2 from '@/assets/images/hotelAbidjan.jpg'
import img3 from '@/assets/images/hoteldakar.jpg'
import img4 from '@/assets/images/hotelkigali.jpg'
import img5 from '@/assets/images/hotelouagadougou.jpg'
import img6 from '@/assets/images/kigali.jpg'
import img7 from '@/assets/images/plateau.jpg'

const photos = [img1, img2, img3, img4, img5, img6, img7]
const weekDays = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim']
</script>

<style scoped>
/* Ajustements supplémentaires si besoin */
</style>

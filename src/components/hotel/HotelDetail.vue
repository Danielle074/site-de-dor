<template>
  <div class="max-w-6xl mx-auto p-4 font-sans text-gray-800">
    <!-- Header: Titre et Localisation -->
    <header class="mb-6">
      <nav class="text-xs text-gray-500 mb-2">
        Accueil > Hôtels > <span class="font-semibold text-black">Hôtel Sofitel Ivoire</span>
      </nav>
      <h1 class="text-3xl font-bold">Hôtel Sofitel Ivoire</h1>
      <div class="flex items-center text-gray-600 text-sm mt-1">
        <i class='bx bx-map bx-xs mr-1'></i>
        Avenue Hassan II, Cocody, Abidjan, Côte d'Ivoire
      </div>
    </header>

    <!-- Section Principale: Galerie et Sidebar -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">

      <!-- Colonne Gauche: Galerie Photos -->
      <div class="lg:col-span-2 space-y-4">
        <!-- Grille Principale -->
        <div class="grid grid-cols-3 gap-2 h-[400px]">
          <div class="col-span-2 row-span-2 relative overflow-hidden rounded-l-xl">
            <img :src="mainImage" class="object-cover w-full h-full" alt="Main view" />
          </div>
          <div class="overflow-hidden rounded-tr-xl">
            <img :src="interiorImage" class="object-cover w-full h-full" alt="Interior" />
          </div>
          <div class="overflow-hidden">
            <img :src="poolImage" class="object-cover w-full h-full" alt="Pool" />
          </div>
        </div>

        <!-- Petites vignettes sous la galerie -->
        <div class="grid grid-cols-4 gap-2 h-24">
          <img v-for="(img, index) in thumbnailImages" :key="index" :src="img" class="rounded-md object-cover w-full h-full" />
          <div class="relative rounded-md overflow-hidden bg-gray-900 group cursor-pointer">
            <img :src="morePhotosImage" class="object-cover w-full h-full opacity-50" />
            <div class="absolute inset-0 flex items-center justify-center text-white font-bold">+20 photos</div>
          </div>
        </div>
      </div>

      <!-- Colonne Droite: Avis, Note et Carte -->
      <div class="space-y-4">
        <!-- Carte Avis -->
        <div class="border rounded-xl p-4 shadow-sm bg-white">
          <h3 class="font-bold mb-3">Retour des clients ayant séjourné ici</h3>
          <p class="text-sm italic text-gray-600 mb-4">
            « Un bon accueil et un service irréprochable pour moi ce choix est fait trop petit est-il possible d'humidité meilleure, personnel de cet hôtel reste très attentif. »
          </p>
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-gray-800 text-white flex items-center justify-center text-xs">WT</div>
            <div>
              <p class="text-sm font-bold">Williams Thomas • France</p>
            </div>
          </div>
        </div>

        <!-- Note et Carte -->
        <div class="border rounded-xl p-4 shadow-sm bg-white">
          <div class="flex justify-between items-center mb-4">
            <span class="text-sm font-medium">Son emplacement dans la ville</span>
            <span class="bg-gray-800 text-white px-2 py-1 rounded text-sm">9/10 Très bien</span>
          </div>
          <div class="w-full h-40 bg-gray-200 rounded-lg relative overflow-hidden">
             <!-- Placeholder pour la carte -->
             <div class="absolute inset-0 bg-blue-50 flex flex-col items-center justify-center">
                <i class='bx bx-map bx-lg'></i>
                <button class="mt-2 bg-gray-900 text-white text-xs px-3 py-2 rounded-full">Ouvrir la map</button>
             </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Section À propos -->
    <section class="mt-12">
      <h2 class="text-xl font-bold mb-4">À propos</h2>
      <p class="text-sm leading-relaxed text-gray-700 text-justify">
        Pour vous faire mieux connaître, d'abord il est vrai que les hôtels ne sont pas ce qu'ils étaient là-bas, et que si on m'en dit du bien, je m'en rends dans une explication plus étendue, et vous faire calme et tranquille d'intérêt... (Le texte de votre image est long, j'ai résumé le bloc).
      </p>
    </section>

    <!-- Points Forts -->
    <section class="mt-8 border-t pt-6">
      <h2 class="text-lg font-bold mb-4">Points forts</h2>
      <div class="grid grid-cols-2 md:grid-cols-5 gap-4 text-xs text-gray-600">
        <div class="flex items-center gap-2"><i class='bx bx-swim bx-sm'></i> Piscine extérieur</div>
        <div class="flex items-center gap-2"><i class='bx bx-bed bx-sm'></i> Service en chambre</div>
        <div class="flex items-center gap-2"><i class='bx bx-coffee bx-sm'></i> Petit déjeuner excellent</div>
        <div class="flex items-center gap-2"><i class='bx bx-wifi bx-sm'></i> Connexion Wi-fi</div>
        <div class="flex items-center gap-2"><i class='bx bx-dumbbell bx-sm'></i> Salle de gym équipée</div>
        <div class="flex items-center gap-2"><i class='bx bx-accessibility bx-sm'></i> Accès handicapés</div>
        <div class="flex items-center gap-2"><i class='bx bx-restaurant bx-sm'></i> Restaurant</div>
        <div class="flex items-center gap-2"><i class='bx bx-drink bx-sm'></i> Bar</div>
        <div class="flex items-center gap-2"><i class='bx bx-smoking bx-sm'></i> Espace non-fumeur</div>
        <div class="flex items-center gap-2"><i class='bx bx-parking bx-sm'></i> Parking gratuit et sécurisé</div>
      </div>
    </section>

    <!-- Section Disponibilité / Calendrier -->
    <section class="mt-12 mb-20">
      <h2 class="text-xl font-bold mb-4">Disponibilité</h2>
      <div class="border rounded-2xl overflow-hidden shadow-lg">
        <!-- Barre de recherche rapide -->
        <div class="bg-white p-4 border-b flex flex-wrap gap-4 items-center">
          <div class="border p-2 rounded-lg flex-1 min-w-[200px]">
            <span class="text-xs text-gray-400 block">Date d'arrivée - Date de départ</span>
            <input type="text" placeholder="Choisir dates" class="text-sm w-full outline-none" />
          </div>
          <div class="border p-2 rounded-lg flex-1 min-w-[200px]">
             <span class="text-xs text-gray-400 block">Voyageurs</span>
             <p class="text-sm">1 chambre, 2 adultes, 0 enfant</p>
          </div>
          <router-link to="/hotel/:id/information" class="bg-gray-800 text-white px-8 py-3 rounded-full font-medium hover:bg-black transition inline-block">
            Réserver
          </router-link>
        </div>

        <!-- Simulation Calendrier -->
        <div class="p-6 bg-white overflow-x-auto">
          <div class="flex gap-10 min-w-[600px] justify-center">
             <!-- Mois 1 -->
             <div class="flex-1">
               <h4 class="text-center font-bold mb-4">Janvier 2026</h4>
               <div class="grid grid-cols-7 text-center text-xs gap-y-2">
                 <div v-for="d in weekDays" :key="d" class="font-bold">{{d}}</div>
                 <!-- Dates fictives -->
                 <div v-for="n in 31" :key="n"
                      :class="['p-2 cursor-pointer rounded-full', n === 26 ? 'bg-gray-800 text-white' : 'hover:bg-gray-100']">
                   {{n}}
                 </div>
               </div>
             </div>
             <!-- Mois 2 -->
             <div class="flex-1">
               <h4 class="text-center font-bold mb-4">Février 2026</h4>
               <div class="grid grid-cols-7 text-center text-xs gap-y-2">
                 <div v-for="d in weekDays" :key="d" class="font-bold">{{d}}</div>
                 <div v-for="n in 28" :key="n" class="p-2 hover:bg-gray-100 cursor-pointer rounded-full">
                   {{n}}
                 </div>
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import mainImage from '@/assets/images/abidjan.jpg'
import interiorImage from '@/assets/images/abidjan.jpg'
import poolImage from '@/assets/images/abidjan.jpg'
import morePhotosImage from '@/assets/images/abidjan.jpg'

// Images pour les vignettes
const thumbnailImages = [
  '@/assets/images/hotelcassablanca.jpg',
  '@/assets/images/hotelAbidjan.jpg',
  '@/assets/images/hoteldakar.jpg'
].map(img => img)

// Jours de la semaine pour le calendrier
const weekDays = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim']
</script>

<style scoped>
/* Styles supplémentaires si nécessaire */
</style>

<template>
  <div class="space-y-20 pb-20 max-w-6xl mx-auto px-4">

    <section>
      <h2 class="text-xl font-bold mb-6">Pourquoi DOR?</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div v-for="(feat, i) in features" :key="i" class="p-5 border border-gray-100 rounded-xl bg-white shadow-sm">
          <i :class="feat.icon" class="text-2xl mb-3 block"></i>
          <h3 class="font-bold text-sm mb-1">{{ feat.title }}</h3>
          <p class="text-[11px] text-gray-500 leading-tight">{{ feat.desc }}</p>
        </div>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-6">Destinations populaires</h2>
      <div class="grid grid-cols-12 gap-4">
        <router-link to="/hotel" class="col-span-12 md:col-span-4 h-52 relative rounded-2xl overflow-hidden group cursor-pointer">
          <img :src="imgOuaga" class="w-full h-full object-cover transition group-hover:scale-105" />
          <div class="absolute inset-0 bg-black/20 p-4 flex items-end"><span class="text-white font-bold">Ouagadougou</span></div>
        </router-link>
        <router-link to="/hotel" class="col-span-12 md:col-span-4 h-52 relative rounded-2xl overflow-hidden group cursor-pointer">
          <img :src="imgKigali" class="w-full h-full object-cover transition group-hover:scale-105" />
          <div class="absolute inset-0 bg-black/20 p-4 flex items-end"><span class="text-white font-bold">Kigali</span></div>
        </router-link>
        <router-link to="/hotel" class="col-span-12 md:col-span-4 h-52 relative rounded-2xl overflow-hidden group cursor-pointer">
          <img :src="imgCasa" class="w-full h-full object-cover transition group-hover:scale-105" />
          <div class="absolute inset-0 bg-black/20 p-4 flex items-end"><span class="text-white font-bold">Casablanca</span></div>
        </router-link>
        <router-link to="/hotel" class="col-span-12 md:col-span-6 h-64 relative rounded-2xl overflow-hidden group cursor-pointer">
          <img :src="imgAbidjan" class="w-full h-full object-cover transition group-hover:scale-105" />
          <div class="absolute inset-0 bg-black/20 p-4 flex items-end"><span class="text-white font-bold">Abidjan</span></div>
        </router-link>
        <router-link to="/hotel" class="col-span-12 md:col-span-6 h-64 relative rounded-2xl overflow-hidden group cursor-pointer">
          <img :src="imgDakar" class="w-full h-full object-cover transition group-hover:scale-105" />
          <div class="absolute inset-0 bg-black/20 p-4 flex items-end"><span class="text-white font-bold">Dakar</span></div>
        </router-link>
      </div>
    </section>

    <section>
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-xl font-bold">Hôtels recommandés</h2>
        <router-link to="/hotel" class="text-amber-500 text-xs font-medium hover:underline flex items-center gap-1">
          Voir tout <i class='bx bx-chevron-right'></i>
        </router-link>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <router-link v-for="(hotel, i) in hotels" :key="i" :to="`/hotel/${hotel.id}`" class="group cursor-pointer block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <div class="relative h-56 rounded-2xl overflow-hidden mb-0">
            <img :src="hotel.img" class="w-full h-full object-cover transition group-hover:scale-105" />
            <span class="absolute bottom-3 right-3 bg-white px-3 py-1.5 rounded-xl text-[10px] font-bold shadow-md">{{ hotel.price }}</span>
            <span v-if="hotel.promo" class="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-lg text-[10px] font-bold">
              -{{ hotel.promo }}%
            </span>
          </div>
          <div class="p-4">
            <div class="flex justify-between items-start mb-2">
              <h3 class="font-bold text-sm group-hover:text-amber-600 transition-colors">{{ hotel.name }}</h3>
              <div class="flex items-center gap-1 text-yellow-500 text-[10px]">
                <i class='bx bxs-star'></i>
                <span class="font-bold">{{ hotel.rating || 4.5 }}</span>
              </div>
            </div>
            <p class="text-xs text-gray-400 flex items-center gap-1 mb-2">
              <i class='bx bx-map-pin text-amber-500'></i>
              {{ hotel.location || 'Côte d\'Ivoire' }}
            </p>
            <p class="text-[10px] text-gray-500 line-clamp-2 mt-1">{{ lorem }}</p>
            <div class="flex items-center justify-between mt-3 pt-2 border-t border-gray-100">
              <span class="text-[10px] text-amber-500 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                Voir l'hôtel <i class='bx bx-right-arrow-alt'></i>
              </span>
              <span class="text-[9px] text-gray-400">({{ hotel.reviews || 57 }} avis)</span>
            </div>
          </div>
        </router-link>
      </div>
    </section>

    <section>
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-xl font-bold">Activités recommandées</h2>
        <router-link to="/activites" class="text-amber-500 text-xs font-medium hover:underline flex items-center gap-1">
          Voir tout <i class='bx bx-chevron-right'></i>
        </router-link>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <router-link
          v-for="(act, i) in activities"
          :key="i"
          :to="`/activite/${act.id}`"
          class="group cursor-pointer block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
        >
          <div class="relative h-56 overflow-hidden">
            <img :src="act.img" class="w-full h-full object-cover transition duration-500 group-hover:scale-110" />
            <span class="absolute bottom-3 right-3 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-xl text-[10px] font-bold shadow-md">
              {{ act.price }}
            </span>
            <span v-if="act.duration" class="absolute top-3 left-3 bg-black/60 backdrop-blur-sm text-white px-2 py-1 rounded-lg text-[9px] font-medium flex items-center gap-1">
              <i class='bx bx-time-five'></i> {{ act.duration }}
            </span>
          </div>
          <div class="p-4">
            <div class="flex justify-between items-start mb-2">
              <h3 class="font-bold text-sm group-hover:text-amber-600 transition-colors line-clamp-1">{{ act.title }}</h3>
              <div class="flex items-center gap-1 text-yellow-500 text-[10px]">
                <i class='bx bxs-star'></i>
                <span class="font-bold">{{ act.rating || 4.5 }}</span>
              </div>
            </div>
            <p class="text-xs text-gray-400 flex items-center gap-1 mb-2">
              <i class='bx bx-map-pin text-amber-500'></i>
              {{ act.location || 'Abidjan, Côte d\'Ivoire' }}
            </p>
            <p class="text-[10px] text-gray-500 line-clamp-2">{{ act.description || lorem }}</p>
            <div class="flex items-center justify-between mt-3 pt-2 border-t border-gray-100">
              <div class="flex items-center gap-1 text-xs text-gray-500">
                <i class='bx bx-group text-[10px]'></i>
                <span class="text-[9px]">{{ act.maxPeople || '2-10' }} personnes</span>
              </div>
              <span class="text-[10px] text-amber-500 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                Réserver <i class='bx bx-right-arrow-alt'></i>
              </span>
            </div>
          </div>
        </router-link>
      </div>
    </section>

    <section class="bg-gray-50 border border-gray-100 rounded-3xl p-10 flex flex-col md:flex-row justify-between items-center gap-6">
      <h2 class="text-xl md:text-2xl font-bold max-w-sm text-center md:text-left">
        Réservez en toute tranquillité maintenant avec DOR !
      </h2>
      <div class="flex gap-4">
        <router-link to="/hotel" class="bg-[#111111] text-white px-6 py-3 rounded-full text-xs font-bold hover:bg-black transition">Réserver maintenant</router-link>
        <router-link to="/activites" class="border border-gray-300 px-6 py-3 rounded-full text-xs font-bold hover:border-black transition">Découvrez les destinations</router-link>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-8">FAQ</h2>
      <div class="divide-y divide-gray-200">
        <div v-for="(item, i) in faqs" :key="i" class="py-3 cursor-pointer group" @click="toggleFaq(i)">
          <div class="flex justify-between items-center">
            <span class="text-sm font-semibold group-hover:text-gray-600">{{ item.question }}</span>
            <i class='bx text-gray-400 text-xl transition-transform' :class="openFaqIndex === i ? 'bx-minus rotate-180' : 'bx-plus'"></i>
          </div>
          <div v-show="openFaqIndex === i" class="mt-3 text-xs text-gray-500 leading-relaxed pr-8 animate-fadeIn">
            {{ item.reponse }}
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref } from 'vue'

// --- IMPORTS DES PHOTOS ---
import imgOuaga from '@/assets/images/ouagadougou.jpg'
import imgKigali from '@/assets/images/kigali.jpg'
import imgCasa from '@/assets/images/cassablanca.jpg'
import imgAbidjan from '@/assets/images/abidjan.jpg'
import imgDakar from '@/assets/images/dakar.jpg'

import hotelAzalai from '@/assets/images/hotelcassablanca.jpg'
import hotelSofitel from '@/assets/images/hotelAbidjan.jpg'
import hotelBene from '@/assets/images/hotelouagadougou.jpg'

import actPlateau from '@/assets/images/plateau.jpg'
import actBasilique from '@/assets/images/damepaix.jpg'
import actJet from '@/assets/images/jetski.jpg'

const lorem = "Ut velit mauris, egestas sed, gravida nec, ornare ut, mi. Aenean ut orci vel massa suscipit pulvinar. Nulla sollicitudin."

const features = [
  { icon: 'bx bx-credit-card', title: 'Réservez et payer via notre plateforme', desc: 'Annulation GRATUITE sur la plupart des hébergements' },
  { icon: 'bx bx-chat', title: '+ de 300 milles commentaires', desc: 'Obtenez des informations de clients comme vous' },
  { icon: 'bx bx-buildings', title: 'Plus de 2000 établissements', desc: 'Hôtels, maisons d\'hôtes, activités etc.' },
  { icon: 'bx bx-support', title: 'Un Service Clients de confiance', desc: 'Disponible 24h/24 et 7j/7 pour vous aider' }
]

// Hôtels avec données enrichies
const hotels = ref([
  {
    id: 1,
    name: 'Azalai Hotel de la Plage',
    price: '55.000 XOF',
    img: hotelAzalai,
    location: 'Casablanca, Maroc',
    rating: 4.6,
    reviews: 128,
    promo: null
  },
  {
    id: 2,
    name: 'Hotel Sofitel Abidjan',
    price: '85.000 XOF',
    img: hotelSofitel,
    location: 'Cocody, Abidjan',
    rating: 4.8,
    reviews: 234,
    promo: 15
  },
  {
    id: 3,
    name: 'Le Bene Hotel Kigali',
    price: '75.000 XOF',
    img: hotelBene,
    location: 'Kigali, Rwanda',
    rating: 4.7,
    reviews: 189,
    promo: null
  }
])

// Activités avec données enrichies (chaque activité a son propre lien)
const activities = ref([
  {
    id: 1,
    title: 'Visite de la commune du Plateau',
    price: '5.000 XOF',
    img: actPlateau,
    location: 'Plateau, Abidjan',
    rating: 4.5,
    duration: '3h',
    maxPeople: '15',
    description: 'Découvrez l\'histoire et l\'architecture du quartier administratif d\'Abidjan.'
  },
  {
    id: 2,
    title: 'Visite de la Basilique Notre Dame de la Paix',
    price: '25.000 XOF',
    img: actBasilique,
    location: 'Yamoussoukro, Côte d\'Ivoire',
    rating: 4.9,
    duration: '4h',
    maxPeople: '20',
    description: 'Explorez l\'une des plus grandes basiliques du monde, chef-d\'œuvre architectural.'
  },
  {
    id: 3,
    title: 'Jet Ski Lagunaire à Assinie',
    price: '35.000 XOF',
    img: actJet,
    location: 'Assinie, Côte d\'Ivoire',
    rating: 4.7,
    duration: '2h',
    maxPeople: '2',
    description: 'Sensation forte garantie sur les eaux turquoises de la lagune d\'Assinie.'
  }
])

// FAQ avec questions ET réponses
const faqs = ref([
  {
    question: "Comment réserver avec DOR?",
    reponse: "Pour réserver avec DOR, il vous suffit de rechercher votre destination, sélectionner votre hébergement ou activité, choisir vos dates et procéder au paiement en ligne de manière sécurisée."
  },
  {
    question: "Est-il possible d'annuler ou de changer une réservation?",
    reponse: "Oui, la plupart de nos offres permettent une annulation GRATUITE sous 24h avant l'arrivée. Vous pouvez modifier ou annuler votre réservation directement depuis votre espace client."
  },
  {
    question: "Comment contacter le service client de DOR?",
    reponse: "Notre service client est disponible 24h/24 et 7j/7 par téléphone au +225 05 05 05 05 05, par email à support@dor.com ou via le chat en ligne sur notre site."
  },
  {
    question: "Vous disposez de maison d'hôte?",
    reponse: "Oui, DOR propose plus de 2000 établissements incluant des hôtels, des maisons d'hôtes, des appartements et des activités dans toute l'Afrique."
  }
])

// Gestion de l'ouverture/fermeture des FAQ
const openFaqIndex = ref(null)

const toggleFaq = (index) => {
  if (openFaqIndex.value === index) {
    openFaqIndex.value = null
  } else {
    openFaqIndex.value = index
  }
}
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeIn {
  animation: fadeIn 0.2s ease-out;
}

.line-clamp-1 {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>

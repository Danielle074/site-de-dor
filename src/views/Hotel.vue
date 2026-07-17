<template>
  <div class="bg-white font-sans text-gray-900">
    <section class="max-w-7xl mx-auto px-6 py-12">
      <h2 class="text-[20px] font-bold mb-10">
        Des hôtels à proximité pour une réservation de dernière minute
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
        <div v-for="(item, index) in destinations" :key="index" class="flex flex-col">
          <!-- IMAGE CLIQUABLE -->
          <RouterLink
            :to="item.link"
            class="relative rounded-2xl overflow-hidden aspect-[1.4/1] mb-4 shadow-sm block group"
          >
            <img :src="item.image" class="w-full h-full object-cover group-hover:scale-105 transition" />
          </RouterLink>

          <!-- TITRE CLIQUABLE -->
          <RouterLink
            :to="item.link"
            class="font-bold text-[14px] hover:text-blue-600"
          >
            {{ item.title }}
          </RouterLink>

          <p class="text-[11px] text-gray-500">
            {{ item.description }}
          </p>

          <!-- ➕ LIEN PROPRE À CHAQUE CARTE (bouton) -->
          <RouterLink
            :to="item.link"
            class="mt-3 text-xs font-medium text-blue-600 hover:text-blue-800 inline-flex items-center gap-1 self-start"
          >
            Voir l'offre →
          </RouterLink>
        </div>
      </div>
    </section>

    <section class="bg-gray-50 py-16 px-6">
      <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 border-t border-gray-100 pt-10">
        <h2 class="text-2xl md:text-3xl font-bold max-w-md">
          Réserve en toute tranquillité maintenant avec DOR !
        </h2>
        <div class="flex gap-4">
          <RouterLink to="/reservation" class="bg-[#1a1a1a] text-white px-8 py-3 rounded-full font-medium text-sm inline-block text-center hover:bg-black transition-colors">
            Réserve maintenant
          </RouterLink>
          <RouterLink to="/destinations" class="border border-gray-300 bg-white px-8 py-3 rounded-full font-medium text-sm hover:bg-gray-50 inline-block text-center transition-colors">
            Découvre les destinations
          </RouterLink>
        </div>
      </div>
    </section>

    <section class="max-w-7xl mx-auto px-6 py-16">
      <h2 class="text-xl font-bold mb-8">FAQ</h2>
      <div class="divide-y divide-gray-200 border-t border-gray-200">
        <div v-for="(faq, idx) in faqList" :key="idx" class="py-6">
          <div @click="toggleFaq(idx)" class="flex justify-between items-center cursor-pointer mb-4">
            <h4 class="font-bold text-[15px]">{{ faq.question }}</h4>
            <span class="text-xl">{{ faq.open ? '—' : '+' }}</span>
          </div>
          <p v-if="faq.open" class="text-[13px] text-gray-500 leading-relaxed max-w-4xl">
            {{ faq.answer }}
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

// --- IMPORT DE TES IMAGES LOCALES ---
import imgAzalai from '@/assets/images/hotelcassablanca.jpg';
import imgSofitel from '@/assets/images/hotelAbidjan.jpg';
import imgKigali from '@/assets/images/hoteldakar.jpg';
import imgBnb from '@/assets/images/hotelkigali.jpg';
import imgByblos from '@/assets/images/hotelouagadougou.jpg';
import imgLorenzo from '@/assets/images/kigali.jpg';
import imgPlateau from '@/assets/images/plateau.jpg';
import imgBasilique from '@/assets/images/damepaix.jpg';
import imgJetSki from '@/assets/images/jetski.jpg';

const destinations = ref([
  {
    title: "Azalaï Hotel de la Plage",
    price: "55.000",
    image: imgAzalai,
    link: "/hotel/hotel-detail",
    rating: 4.5,
    reviews: 57,
    description: "Magnifique hôtel de plage avec vue imprenable sur l'océan. Piscine à débordement, spa et restaurants gastronomiques."
  },
  {
    title: "Hotel Sofitel Abidjan",
    price: "85.000",
    image: imgSofitel,
    link: "/hotel/sofitel-abidjan",
    rating: 4.8,
    reviews: 124,
    description: "Luxe et élégance au cœur d'Abidjan. Chambres spacieuses, service 5 étoiles et vue panoramique sur la lagune."
  },
  {
    title: "Le Bene Hotel Kigali",
    price: "75.000",
    image: imgKigali,
    link: "/hotel/bene-hotel-kigali",
    rating: 4.3,
    reviews: 89,
    description: "Hôtel moderne alliant confort et authenticité. Idéal pour les voyageurs d'affaires et touristes."
  },
  {
    title: "Hotel BnB Angré",
    price: "55.000",
    image: imgBnb,
    link: "/hotel/bnb-angre",
    rating: 4.2,
    reviews: 45,
    description: "Ambiance chaleureuse et conviviale. Parfait pour un séjour économique sans sacrifier le confort."
  },
  {
    title: "Hotel Byblos",
    price: "85.000",
    image: imgByblos,
    link: "/hotel/byblos-hotel",
    rating: 4.6,
    reviews: 78,
    description: "Hôtel de charme avec décoration raffinée. Restaurant renommé et service personnalisé."
  },
  {
    title: "Lorenzo Hôtel",
    price: "75.000",
    image: imgLorenzo,
    link: "/hotel/lorenzo-hotel",
    rating: 4.4,
    reviews: 92,
    description: "Établissement réputé pour son excellence. Spa, piscine et vue magnifique."
  },
  {
    title: "Visite de la commune du Plateau",
    price: "5.000",
    image: imgPlateau,
    link: "/activite/plateau",
    rating: 4.7,
    reviews: 234,
    description: "Découvrez le cœur administratif d'Abidjan. Architecture moderne et histoire fascinante."
  },
  {
    title: "Visite de la Basilique Notre Dame de La Paix",
    price: "25.000",
    image: imgBasilique,
    link: "/activite/basilique-notre-dame",
    rating: 4.9,
    reviews: 312,
    description: "Chef-d'œuvre architectural à Yamoussoukro. Une expérience spirituelle et culturelle unique."
  },
  {
    title: "Jet Ski Lagunaire à Assinie",
    price: "35.000",
    image: imgJetSki,
    link: "/activite/jet-ski-assinie",
    rating: 4.6,
    reviews: 156,
    description: "Adrénaline garantie sur la lagune d'Assinie. Encadrement professionnel et sensations fortes."
  }
]);

// FAQ dynamique
const faqList = ref([
  {
    question: "Comment réserver avec DOR ?",
    answer: "Pour réserver avec DOR, il vous suffit de sélectionner votre destination, vos dates et de suivre le processus de réservation en ligne. Vous recevrez une confirmation par email dans les minutes suivant votre paiement.",
    open: true
  },
  {
    question: "Est-il possible d'annuler ou de changer une réservation ?",
    answer: "Oui, vous pouvez annuler ou modifier votre réservation jusqu'à 24h avant l'arrivée sans frais. Consultez nos conditions générales pour plus de détails.",
    open: false
  },
  {
    question: "Comment contacter le service client de DOR ?",
    answer: "Notre service client est disponible 7j/7 par email à support@dor.com ou par téléphone au +225 05 05 05 05 05.",
    open: false
  },
  {
    question: "Vous disposez de maison d'hôte ?",
    answer: "Oui, nous proposons également des maisons d'hôtes sélectionnées avec soin dans plusieurs destinations. Contactez-nous pour plus d'informations.",
    open: false
  }
]);

const toggleFaq = (index) => {
  faqList.value[index].open = !faqList.value[index].open;
};
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>

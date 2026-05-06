<template>
  <div class="bg-white font-sans text-gray-900">
    <section class="max-w-7xl mx-auto px-6 py-12">
      <h2 class="text-[20px] font-bold mb-10">
        Des activités à proximité pour une expérience exceptionnelle
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
        <div v-for="(item, index) in destinations" :key="index" class="flex flex-col">
          <RouterLink :to="`/hotel/${item.title.toLowerCase().replace(/ /g, '-')}`" class="relative rounded-2xl overflow-hidden aspect-[1.4/1] mb-4 shadow-sm block">
            <img :src="item.image" :alt="item.title" class="w-full h-full object-cover" />

            <button class="absolute top-3 right-3 text-white/80 hover:text-white" @click.prevent>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>

            <div clas s="absolute bottom-4 right-4 bg-white px-3 py-1 rounded-full text-[12px] font-bold shadow-md">
              {{ item.price }} XOF
            </div>
          </RouterLink>

          <h3 class="font-bold text-[14px] mb-1">{{ item.title }}</h3>
          <p class="text-[11px] text-gray-500 leading-relaxed mb-2 line-clamp-3">
            Ut velit mauris, egestas sed, gravida nec, ornare ut, mi. Aenean ut orci vel massa suscipit pulvinar. Nulla sollicitudin. Fusce varius, ligula non tempus aliquam, nunc turpis ullamcorper nibh.
          </p>

          <div class="flex items-center text-[11px] text-gray-500">
            <span class="text-yellow-400 mr-1 text-[12px]">★</span>
            <span class="font-bold text-gray-800">4.5</span>
            <span class="ml-1">(57 avis)</span>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-gray-50 py-16 px-6">
      <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 border-t border-gray-100 pt-10">
        <h2 class="text-2xl md:text-3xl font-bold max-w-md">
          Réserve en toute tranquillité maintenant avec DOR !
        </h2>
        <div class="flex gap-4">
          <RouterLink to="/reservation" class="bg-[#1a1a1a] text-white px-8 py-3 rounded-full font-medium text-sm inline-block text-center">
            Réserve maintenant
          </RouterLink>
          <RouterLink to="/destinations" class="border border-gray-300 bg-white px-8 py-3 rounded-full font-medium text-sm hover:bg-gray-50 inline-block text-center">
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
import imgPlateau from '@/assets/images/plateau.jpg';
import imgDame from '@/assets/images/damepaix.jpg';
import imgJetSki from '@/assets/images/jetski.jpg';
import imgCascade from '@/assets/images/cascademan.jpg';
import imgBni from '@/assets/images/domainebni.jpg';
import imgParc from '@/assets/images/foretdubanco.jpg';
import imgArt from '@/assets/images/artbassam.jpg';
import imgMusee from '@/assets/images/museeplateau.jpg';
import imgAbidjan from '@/assets/images/abidjan.jpg';

const destinations = ref([
  { title: "Visite de la commune du Plateau", price: "55.000", image: imgPlateau },
  { title: "Visite de la Basilique Notre Dame de La Paix", price: "85.000", image: imgDame },
  { title: "Jet Ski Lagunaire à Assinie", price: "75.000", image: imgJetSki },
  { title: "Cascades de Man", price: "55.000", image: imgCascade },
  { title: "Domaine Bni", price: "85.000", image: imgBni },
  { title: "Parc National du Banco", price: "75.000", image: imgParc },
  { title: "Visite de l'Art de Grand-Bassam", price: "5.000", image: imgArt },
  { title: "Visite du Musée du Plateau", price: "25.000", image: imgMusee },
  { title: "Visite de Abidjan", price: "35.000", image: imgAbidjan },
]);

// FAQ dynamique
const faqList = ref([
  {
    question: "Comment réserver avec DOR ?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Digital marketing allows businesses to reach and engage with a wider audience, generate leads, drive website traffic, and increase brand visibility.",
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
/* Optionnel : pour le texte qui se coupe après 3 lignes */
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>

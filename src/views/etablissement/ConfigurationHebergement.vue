<template>
  <div class="max-w-2xl mx-auto p-6 font-sans text-[#1A1A1A] relative">
    <h1 class="text-3xl font-bold mb-4">Configuration de l’Hébergement</h1>

    <div class="grid grid-cols-4 gap-2 mb-8">
      <div class="h-1.5 rounded-full transition-colors duration-300" :class="currentStep >= 1 ? 'bg-black' : 'bg-gray-200'"></div>
      <div class="h-1.5 rounded-full transition-colors duration-300" :class="currentStep >= 2 ? 'bg-black' : 'bg-gray-200'"></div>
      <div class="h-1.5 rounded-full transition-colors duration-300" :class="currentStep >= 3 ? 'bg-black' : 'bg-gray-200'"></div>
      <div class="h-1.5 rounded-full transition-colors duration-300" :class="currentStep >= 4 ? 'bg-black' : 'bg-gray-200'"></div>
    </div>

    <div v-if="currentStep === 1" class="space-y-6">
      <h2 class="text-xl font-bold mb-4">Informations sur l’hébergement</h2>

      <div class="border border-gray-200 rounded-2xl p-6 bg-white shadow-sm">
        <p class="text-sm font-semibold mb-4">Où les clients peuvent-ils dormir ?</p>
        <div class="space-y-3 mb-4">
          <div class="border border-gray-200 rounded-xl p-4"><p class="text-sm font-bold">Chambre 1</p><p class="text-xs text-gray-500 mt-0.5">1 grand lit double</p></div>
          <div class="border border-gray-200 rounded-xl p-4"><p class="text-sm font-bold">Salon 1</p><p class="text-xs text-gray-500 mt-0.5">1 canapé</p></div>
          <div class="border border-gray-200 rounded-xl p-4 bg-gray-50/50"><p class="text-sm font-bold text-gray-800">Autres espaces</p><p class="text-xs text-gray-500 mt-0.5">0</p></div>
        </div>
        <button type="button" class="flex items-center gap-2 text-sm font-bold text-black"><i class="bx bx-plus-circle text-lg"></i> Ajouter une chambre</button>
      </div>

      <div class="border border-gray-200 rounded-2xl p-6 bg-white shadow-sm space-y-6">
        <div class="space-y-3">
          <label class="block text-sm font-semibold">Combien de personnes peuvent séjourner ?</label>
          <div class="flex items-center border border-gray-300 rounded-xl w-32 justify-between px-2 py-1.5">
            <button type="button" @click="decrementGuests" class="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-lg"><i class="bx bx-minus"></i></button>
            <span class="text-sm font-bold">{{ guests }}</span>
            <button type="button" @click="guests++" class="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-lg"><i class="bx bx-plus"></i></button>
          </div>
          <label class="flex items-center gap-2.5 cursor-pointer text-xs text-gray-700 font-medium pt-1">
            <input type="checkbox" v-model="excludeBabies" class="w-4 h-4 accent-black rounded border-gray-300 focus:ring-0" /> Exclure les bébés (0-2 ans) du nombre total de personnes
          </label>
        </div>

        <div class="space-y-3">
          <label class="block text-sm font-semibold">Combien y a-t-il de salles de bains ?</label>
          <div class="flex items-center border border-gray-300 rounded-xl w-32 justify-between px-2 py-1.5">
            <button type="button" @click="decrementBathrooms" class="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-lg"><i class="bx bx-minus"></i></button>
            <span class="text-sm font-bold">{{ bathrooms }}</span>
            <button type="button" @click="bathrooms++" class="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-lg"><i class="bx bx-plus"></i></button>
          </div>
        </div>
      </div>

      <div class="border border-gray-200 rounded-2xl p-6 bg-white shadow-sm space-y-5 text-sm">
        <div class="space-y-2">
          <p class="font-semibold">Acceptez-vous les enfants ?</p>
          <div class="flex items-center gap-6">
            <label class="flex items-center gap-2 cursor-pointer font-medium"><input type="radio" value="oui" v-model="acceptChildren" class="w-4 h-4 accent-black" /> Oui</label>
            <label class="flex items-center gap-2 cursor-pointer font-medium"><input type="radio" value="non" v-model="acceptChildren" class="w-4 h-4 accent-black" /> Non</label>
          </div>
        </div>
        <div class="space-y-2">
          <p class="font-semibold">Proposez-vous des lits bébé ?</p>
          <div class="flex items-center gap-6">
            <label class="flex items-center gap-2 cursor-pointer font-medium"><input type="radio" value="oui" v-model="babyCribs" class="w-4 h-4 accent-black" /> Oui</label>
            <label class="flex items-center gap-2 cursor-pointer font-medium"><input type="radio" value="non" v-model="babyCribs" class="w-4 h-4 accent-black" /> Non</label>
          </div>
        </div>
        <div class="space-y-2">
          <p class="font-semibold">Acceptez-vous les animaux de compagnie ?</p>
          <div class="flex items-center gap-6">
            <label class="flex items-center gap-2 cursor-pointer font-medium"><input type="radio" value="oui" v-model="acceptPets" class="w-4 h-4 accent-black" /> Oui</label>
            <label class="flex items-center gap-2 cursor-pointer font-medium"><input type="radio" value="non" v-model="acceptPets" class="w-4 h-4 accent-black" /> Non</label>
          </div>
        </div>
      </div>
    </div>

    <div v-if="currentStep === 2" class="space-y-6">
      <h2 class="text-xl font-bold mb-4">Quels équipements proposez-vous ?</h2>

      <div v-for="(category, catIndex) in amenities" :key="catIndex" class="border border-gray-200 rounded-2xl p-6 bg-white shadow-sm">
        <p class="text-sm font-bold text-gray-900 mb-4">{{ category.title }}</p>
        <div class="space-y-3">
          <label v-for="(item, itemIndex) in category.items" :key="itemIndex" class="flex items-center gap-3 cursor-pointer text-sm font-medium">
            <input type="checkbox" v-model="item.checked" class="w-5 h-5 accent-black rounded border-gray-300 focus:ring-0" />
            <span>{{ item.name }}</span>
          </label>
        </div>
      </div>
    </div>

    <div v-if="currentStep === 3" class="space-y-6">
      <h2 class="text-xl font-bold mb-4">Services proposés par votre hébergement</h2>

      <div class="border border-gray-200 rounded-2xl p-6 bg-white shadow-sm space-y-3">
        <p class="text-sm font-bold">Petit-déjeuner</p>
        <div class="space-y-2 text-sm">
          <label class="flex items-center gap-2 cursor-pointer font-medium"><input type="radio" value="oui" v-model="breakfast" class="w-4 h-4 accent-black" /> Oui</label>
          <label class="flex items-center gap-2 cursor-pointer font-medium"><input type="radio" value="non" v-model="breakfast" class="w-4 h-4 accent-black" /> Non</label>
        </div>
      </div>

      <div class="border border-gray-200 rounded-2xl p-6 bg-white shadow-sm space-y-3">
        <p class="text-sm font-bold">Parking</p>
        <div class="space-y-2 text-sm">
          <label class="flex items-center gap-2 cursor-pointer font-medium"><input type="radio" value="gratuit" v-model="parking" class="w-4 h-4 accent-black" /> Oui, gratuitement</label>
          <label class="flex items-center gap-2 cursor-pointer font-medium"><input type="radio" value="supplement" v-model="parking" class="w-4 h-4 accent-black" /> Oui, moyennant un supplément</label>
          <label class="flex items-center gap-2 cursor-pointer font-medium"><input type="radio" value="non" v-model="parking" class="w-4 h-4 accent-black" /> Non</label>
        </div>
      </div>
    </div>

    <div v-if="currentStep === 4" class="space-y-6">
      <h2 class="text-xl font-bold mb-4">Règles de la maison</h2>

      <div class="border border-gray-200 rounded-2xl p-6 bg-white shadow-sm space-y-4 text-sm font-medium">
        <div class="flex items-center justify-between">
          <span>Hébergement fumeurs</span>
          <button type="button" @click="rules.smoker = !rules.smoker" :class="rules.smoker ? 'bg-black' : 'bg-gray-300'" class="w-11 h-6 rounded-full relative transition-colors"><span :class="rules.smoker ? 'translate-x-6' : 'translate-x-1'" class="absolute top-1 left-0 bg-white w-4 h-4 rounded-full transition-transform"></span></button>
        </div>
        <div class="flex items-center justify-between">
          <span>Fêtes/événements autorisés</span>
          <button type="button" @click="rules.events = !rules.events" :class="rules.events ? 'bg-black' : 'bg-gray-300'" class="w-11 h-6 rounded-full relative transition-colors"><span :class="rules.events ? 'translate-x-6' : 'translate-x-1'" class="absolute top-1 left-0 bg-white w-4 h-4 rounded-full transition-transform"></span></button>
        </div>
      </div>

      <div class="border border-gray-200 rounded-2xl p-6 bg-white shadow-sm space-y-4">
        <div>
          <p class="text-sm font-bold mb-2">Arrivée</p>
          <div class="grid grid-cols-2 gap-4 text-xs font-medium text-gray-500">
            <div><label class="block mb-1">De</label><select v-model="rules.checkInFrom" class="w-full p-3 border border-gray-300 rounded-xl bg-white text-black"><option>08H00</option><option>10H00</option></select></div>
            <div><label class="block mb-1">À</label><select v-model="rules.checkInTo" class="w-full p-3 border border-gray-300 rounded-xl bg-white text-black"><option>15H00</option><option>20H00</option></select></div>
          </div>
        </div>
        <div>
          <p class="text-sm font-bold mb-2">Départ</p>
          <div class="grid grid-cols-2 gap-4 text-xs font-medium text-gray-500">
            <div><label class="block mb-1">De</label><select v-model="rules.checkOutFrom" class="w-full p-3 border border-gray-300 rounded-xl bg-white text-black"><option>08H00</option><option>10H00</option></select></div>
            <div><label class="block mb-1">À</label><select v-model="rules.checkOutTo" class="w-full p-3 border border-gray-300 rounded-xl bg-white text-black"><option>15H00</option><option>17H00</option></select></div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="currentStep === 5" class="space-y-6">
      <h2 class="text-xl font-bold mb-4">À quoi ressemble votre hébergement ?</h2>
      <div class="border border-gray-200 rounded-2xl p-6 bg-white shadow-sm">
        <p class="text-xs text-gray-600 leading-relaxed mb-6">
          <strong class="text-black">Téléchargez au moins 5 photos de votre hébergement.</strong> Plus vous téléchargez de photos, plus vous augmentez vos chances de recevoir des réservations. Vous pouvez aussi en ajouter plus tard.
        </p>

        <div @click="isModalOpen = true" class="border-2 border-dashed border-gray-300 rounded-2xl p-12 flex flex-col items-center justify-center cursor-pointer hover:border-black transition-colors">
          <svg class="w-16 h-16 text-gray-800 mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <path d="M21 15l-5-5L5 21" />
          </svg>
          <p class="text-sm font-bold mb-2">Faire glisser ou</p>
          <button type="button" class="px-4 py-2 border border-gray-400 rounded-xl text-xs font-bold flex items-center gap-1.5 bg-white shadow-sm">
            Télécharger des photos <i class="bx bx-camera text-sm"></i>
          </button>
          <p class="text-[11px] text-gray-400 mt-4">Jpg/Jpeg ou Png, 47 mb maximum par fichiers</p>
        </div>
      </div>
    </div>

    <div class="flex items-center gap-6 mt-8">
      <div class="flex-1">
        <button type="button" @click="nextStep" class="w-full py-4 bg-[#1F1F1F] text-white text-center font-semibold rounded-xl hover:bg-black transition-colors">
          Suivant
        </button>
      </div>
      <button type="button" @click="decrementStep" class="flex items-center gap-1 text-sm font-semibold text-gray-800 hover:underline">
        <i class="bx bx-chevron-left text-xl"></i> Retour
      </button>
    </div>

    <div v-if="isModalOpen" class="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
      <div class="bg-white rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl border border-gray-100 flex flex-col max-h-[90vh]">

        <div class="px-6 py-4 border-b border-gray-200 flex items-center justify-between relative">
          <button type="button" @click="isModalOpen = false" class="text-gray-500 hover:text-black text-xl"><i class="bx bx-x"></i></button>
          <div class="text-center flex-1">
            <h3 class="text-sm font-bold">Téléchargement photos</h3>
            <p class="text-[11px] text-gray-500 mt-0.5">{{ selectedImagesCount }} sur 4 photos</p>
          </div>
          <button type="button" class="text-gray-500 hover:text-black text-xl"><i class="bx bx-plus"></i></button>
          <div class="absolute bottom-0 left-0 h-0.5 bg-black transition-all duration-300" :style="{ width: (selectedImagesCount / 4) * 100 + '%' }"></div>
        </div>

        <div class="p-6 overflow-y-auto grid grid-cols-2 gap-4 flex-1 bg-white">
          <div v-for="img in modalImages" :key="img.id" class="relative rounded-xl overflow-hidden aspect-[4/3] group shadow-sm border border-gray-100">
            <img :src="img.src" alt="Hébergement" class="w-full h-full object-cover" />
            <div class="absolute inset-0 transition-opacity" :class="img.selected ? 'bg-transparent' : 'bg-black/40'"></div>
            <button type="button" class="absolute top-2 right-2 w-5 h-5 bg-black/60 text-white rounded-full flex items-center justify-center text-xs hover:bg-black"><i class="bx bx-x"></i></button>

            <button type="button" @click="img.selected = !img.selected" class="absolute inset-0 flex items-center justify-center">
              <span v-if="img.selected" class="w-6 h-6 bg-white text-black rounded-full flex items-center justify-center shadow-md text-xs font-bold">
                <i class="bx bx-check font-bold"></i>
              </span>
              <span v-else class="w-6 h-6 border-2 border-white rounded-full shadow-md"></span>
            </button>
          </div>
        </div>

        <div class="px-6 py-4 border-t border-gray-100 flex items-center justify-between bg-gray-50/50">
          <button type="button" @click="isModalOpen = false" class="px-4 py-2 bg-gray-200/70 hover:bg-gray-200 text-gray-700 text-xs font-semibold rounded-lg transition-colors">Annuler</button>
          <button type="button" @click="isModalOpen = false" :disabled="selectedImagesCount === 0" :class="selectedImagesCount > 0 ? 'bg-[#1F1F1F] text-white hover:bg-black' : 'bg-gray-300 text-gray-500 cursor-not-allowed'" class="px-6 py-2 text-xs font-semibold rounded-lg transition-all">
            Upload
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

// Initialisation du router Vue
const router = useRouter()

// Import des images depuis tes dossiers
import SalonImage from '@/assets/images/salon.jpg'
import FenetreImage from '@/assets/images/chambre2.jpg'
import ChambreImage from '@/assets/images/chambre1.jpg'
import TerrasseImage from '@/assets/images/terrasse.jpg'

// Navigation globale (Gère les v-if)
const currentStep = ref<number>(1)
const isModalOpen = ref<boolean>(false)

// Étape 1 : Variables réactives
const guests = ref<number>(2)
const excludeBabies = ref<boolean>(false)
const bathrooms = ref<number>(1)
const acceptChildren = ref<string>('oui')
const babyCribs = ref<string>('non')
const acceptPets = ref<string>('non')

// --- LOGIQUE CORRIGÉE : Fonctions JS pures sans logique 'if' dans le template ---
const decrementGuests = () => { if (guests.value > 1) guests.value-- }
const decrementBathrooms = () => { if (bathrooms.value > 1) bathrooms.value-- }
const decrementStep = () => { if (currentStep.value > 1) currentStep.value-- }

const nextStep = () => {
  if (currentStep.value < 5) {
    currentStep.value++
  } else {
    // Si on clique sur Suivant à la toute dernière étape (5), on redirige proprement via le router
    router.push('/etablissement/gestion-reservations')
  }
}

// Étape 2 : Équipements
const amenities = ref([
  {
    title: 'Général',
    items: [
      { name: 'Climatisation', checked: false },
      { name: 'Chauffage', checked: false },
      { name: 'Connexion Wi-Fi gratuite', checked: false },
      { name: 'Borne de recharge pour les véhicules électriques', checked: false }
    ]
  },
  {
    title: 'Cuisine et entretien',
    items: [
      { name: 'Cuisine', checked: false },
      { name: 'Lave-linge', checked: false },
      { name: 'Micro-onde', checked: false }
    ]
  },
  {
    title: 'Divertissements',
    items: [
      { name: 'Télévision à écran plat', checked: false },
      { name: 'Console de salon', checked: false },
      { name: 'Minibar', checked: false },
      { name: 'Sauna', checked: false }
    ]
  },
  {
    title: 'Vue et extérieur',
    items: [
      { name: 'Vue sur le jardin', checked: false },
      { name: 'Balcon', checked: false },
      { name: 'Terrasse', checked: false },
      { name: 'Vue', checked: false }
    ]
  }
])

// Étape 3 : Extras
const breakfast = ref<string>('non')
const parking = ref<string>('non')

// Étape 4 : Règles
const rules = ref({
  smoker: false,
  events: false,
  checkInFrom: '08H00',
  checkInTo: '15H00',
  checkOutFrom: '08H00',
  checkOutTo: '15H00'
})

// Étape 5 : Modal Images
interface ModalImage {
  id: number
  src: string
  selected: boolean
}

const modalImages = ref<ModalImage[]>([
  { id: 1, src: SalonImage, selected: false },
  { id: 2, src: FenetreImage, selected: false },
  { id: 3, src: ChambreImage, selected: false },
  { id: 4, src: TerrasseImage, selected: false }
])

const selectedImagesCount = computed(() => {
  return modalImages.value.filter(img => img.selected).length
})
</script>

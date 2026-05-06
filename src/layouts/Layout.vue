<template>
  <div class="min-h-screen bg-white font-sans flex flex-col">
    <header class="bg-[#111111] text-white pt-6 pb-24 px-4 sm:px-6 lg:px-8">
      <div class="max-w-6xl mx-auto">
        <!-- NAV BAR - NON MODIFIÉE -->
        <nav class="flex items-center justify-between mb-16">
          <div class="text-2xl font-bold tracking-tighter">DOR</div>
          <div class="hidden md:flex items-center gap-6 text-xs font-medium text-gray-400">
            <router-link to="/" class="hover:text-white transition" :class="{ 'text-white border-b border-white pb-1': $route.path === '/' }">Accueil</router-link>
            <router-link to="/hotel" class="hover:text-white transition" :class="{ 'text-white border-b border-white pb-1': $route.path === '/hotel' || $route.path.startsWith('/hotel/') }">Hôtels</router-link>
            <router-link to="/activites" class="hover:text-white transition" :class="{ 'text-white border-b border-white pb-1': $route.path === '/activites' || $route.path.startsWith('/activite/') }">Activités</router-link>
            <router-link to="/contacts" class="hover:text-white transition" :class="{ 'text-white border-b border-white pb-1': $route.path === '/contacts' }">Contacts</router-link>
          </div>
          <div class="flex items-center gap-3">
            <router-link to="/inscription" class="border border-white/30 rounded-full px-4 py-1 text-[11px] font-medium hover:bg-white hover:text-black transition">
              S'inscrire
            </router-link>
            <router-link to="/connexion" class="border border-white/30 rounded-full px-4 py-1 text-[11px] font-medium hover:bg-white hover:text-black transition">
              Se connecter
            </router-link>
            <div class="flex items-center gap-1 ml-2 text-[10px] font-bold">XOF <span class="text-sm">🇨🇮</span></div>
          </div>
        </nav>

        <!-- TITRE DYNAMIQUE SELON LA PAGE -->
        <div class="max-w-2xl">
          <!-- Titre pour la page Accueil -->
          <template v-if="$route.path === '/'">
            <h1 class="text-2xl md:text-3xl font-bold mb-2 tracking-tight">
              Découvrez les meilleurs Hôtels et activités où que vous allez, où que vous soyez
            </h1>
            <p class="text-gray-400 text-sm md:text-base leading-relaxed max-w-lg">
              Rechercher des offres sur des hotels, des hébergements indépendants et plus encore
            </p>
          </template>

          <!-- Titre pour la page Hôtels -->
          <template v-else-if="$route.path === '/hotel'">
            <h1 class="text-2xl md:text-3xl font-bold mb-2 tracking-tight">
              Trouvez votre hôtel idéal sur DOR
            </h1>
            <p class="text-gray-400 text-sm md:text-base leading-relaxed max-w-lg">
              Découvrez notre sélection d'hôtels de luxe, d'hébergements confortables et de résidences uniques
            </p>
          </template>

          <!-- Titre pour la page Détail Hôtel -->
          <template v-else-if="$route.path.startsWith('/hotel/')">
            <h1 class="text-2xl md:text-3xl font-bold mb-2 tracking-tight">
              {{ hotelTitle }}
            </h1>
            <p class="text-gray-400 text-sm md:text-base leading-relaxed max-w-lg">
              Découvrez en détail cet établissement et réservez votre séjour en toute confiance
            </p>
          </template>

          <!-- Titre pour la page Activités -->
          <template v-else-if="$route.path === '/activites'">
            <h1 class="text-2xl md:text-3xl font-bold mb-2 tracking-tight">
              Vivez des activités extraordinaires
            </h1>
            <p class="text-gray-400 text-sm md:text-base leading-relaxed max-w-lg">
              Explorez les meilleures activités et expériences à ne pas manquer lors de votre séjour
            </p>
          </template>

          <!-- Titre pour la page Détail Activité -->
          <template v-else-if="$route.path.startsWith('/activite/')">
            <h1 class="text-2xl md:text-3xl font-bold mb-2 tracking-tight">
              {{ activityTitle }}
            </h1>
            <p class="text-gray-400 text-sm md:text-base leading-relaxed max-w-lg">
              Une expérience unique vous attend, réservez dès maintenant cette activité
            </p>
          </template>

          <!-- Titre pour la page Contacts -->
          <template v-else-if="$route.path === '/contacts'">
            <h1 class="text-2xl md:text-3xl font-bold mb-2 tracking-tight">
              Contactez-nous
            </h1>
            <p class="text-gray-400 text-sm md:text-base leading-relaxed max-w-lg">
              Notre équipe est à votre disposition pour répondre à toutes vos questions
            </p>
          </template>

          <!-- Titre par défaut -->
          <template v-else>
            <h1 class="text-2xl md:text-3xl font-bold mb-2 tracking-tight">
              DOR - Réservation d'hôtels et activités
            </h1>
            <p class="text-gray-400 text-sm md:text-base leading-relaxed max-w-lg">
              La meilleure plateforme pour vos réservations en Côte d'Ivoire et en Afrique
            </p>
          </template>
        </div>
      </div>
    </header>

    <section class="px-4 -mt-10 z-20">
      <div class="max-w-6xl mx-auto">
        <div class="bg-white rounded-2xl p-2 shadow-2xl border border-gray-100">
          <div class="flex flex-col md:flex-row items-center md:divide-x divide-gray-100">

            <div class="flex-1 w-full relative">
              <div
                class="flex items-center justify-between px-4 py-3 cursor-pointer hover:bg-gray-50 rounded-xl transition"
                @click="toggleMenu('destination')"
              >
                <div class="flex items-center gap-3">
                  <i class='bx bx-map text-lg text-gray-400'></i>
                  <span class="text-xs font-medium" :class="selectedDestination ? 'text-gray-900' : 'text-gray-400'">
                    {{ selectedDestination || 'Où allez-vous ?' }}
                  </span>
                </div>
                <i class='bx bx-chevron-down text-gray-400 transition' :class="{ 'rotate-180': activeMenu === 'destination' }"></i>
              </div>

              <div v-if="activeMenu === 'destination'" class="absolute top-full left-0 w-full bg-white shadow-2xl rounded-xl border border-gray-100 z-50 py-2 mt-2">
                <div
                  v-for="city in ['Abidjan', 'Assinie', 'Grand-Bassam', 'Yamoussoukro']"
                  :key="city"
                  class="px-4 py-2 hover:bg-gray-50 text-xs text-gray-700 cursor-pointer flex items-center gap-2"
                  @click="selectDestination(city)"
                >
                  <i class='bx bx-map-pin text-gray-300'></i> {{ city }}, Côte d'Ivoire
                </div>
              </div>
            </div>

            <div class="flex-1 w-full relative">
              <div
                class="flex items-center justify-between px-4 py-3 cursor-pointer hover:bg-gray-50 rounded-xl transition"
                @click="toggleMenu('date')"
              >
                <div class="flex items-center gap-3">
                  <i class='bx bx-calendar text-lg text-gray-400'></i>
                  <span class="text-xs font-medium" :class="dateRange ? 'text-gray-900' : 'text-gray-400'">
                    {{ dateRange || "Date d'arrivée - départ" }}
                  </span>
                </div>
                <i class='bx bx-chevron-down text-gray-400 transition' :class="{ 'rotate-180': activeMenu === 'date' }"></i>
              </div>

              <div v-if="activeMenu === 'date'" class="absolute top-full left-0 w-full md:w-[350px] bg-white shadow-2xl rounded-xl border border-gray-100 z-50 p-4 mt-2">
                <div class="grid grid-cols-2 gap-4">
                  <div>
                    <label class="text-[10px] font-bold text-gray-400 uppercase block mb-1">Arrivée</label>
                    <input type="date" v-model="arrivalDate" class="w-full text-xs border border-gray-100 rounded-lg p-2 outline-none focus:border-black" />
                  </div>
                  <div>
                    <label class="text-[10px] font-bold text-gray-400 uppercase block mb-1">Départ</label>
                    <input type="date" v-model="departureDate" class="w-full text-xs border border-gray-100 rounded-lg p-2 outline-none focus:border-black" />
                  </div>
                </div>
              </div>
            </div>

            <div class="flex-1 w-full relative">
              <div
                class="flex items-center justify-between px-4 py-3 cursor-pointer hover:bg-gray-50 rounded-xl transition"
                @click="toggleMenu('guests')"
              >
                <div class="flex items-center gap-3">
                  <i class='bx bx-group text-lg text-gray-400'></i>
                  <span class="text-xs font-medium text-gray-900">{{ roomGuestText }}</span>
                </div>
                <i class='bx bx-chevron-down text-gray-400 transition' :class="{ 'rotate-180': activeMenu === 'guests' }"></i>
              </div>

              <div v-if="activeMenu === 'guests'" class="absolute top-full left-0 w-full bg-white shadow-2xl rounded-xl border border-gray-100 z-50 p-4 mt-2">
                <div class="space-y-4">
                  <div v-for="type in guestTypes" :key="type.key" class="flex justify-between items-center">
                    <div>
                      <p class="text-xs font-bold text-gray-800">{{ type.label }}</p>
                      <p class="text-[10px] text-gray-400">{{ type.sub }}</p>
                    </div>
                    <div class="flex items-center gap-3">
                      <button @click="updateCount(type.key, -1)" class="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100 text-sm font-bold">-</button>
                      <span class="text-xs font-bold w-4 text-center">{{ counts[type.key] }}</span>
                      <button @click="updateCount(type.key, 1)" class="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100 text-sm font-bold">+</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="p-1 w-full md:w-auto">
              <button class="w-full md:w-auto bg-[#222222] text-white px-10 py-3 rounded-xl text-xs font-semibold hover:bg-black transition shadow-lg shadow-black/10">
                Rechercher
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>

    <main class="flex-1 max-w-6xl mx-auto px-4 py-12 w-full">
      <router-view @update-hotel-title="updateHotelTitle" @update-activity-title="updateActivityTitle"></router-view>
    </main>

    <!-- FOOTER MODERNISÉ -->
    <footer class="relative mt-auto bg-gradient-to-br from-black via-black/70 to-black text-white">
      <div class="absolute top-0 left-0 w-full overflow-hidden leading-0">
        <svg class="relative block w-full h-10" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="white" fill-opacity="0.1"></path>
        </svg>
      </div>

      <div class="relative z-10 max-w-7xl mx-auto px-4 pt-12 pb-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 class="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent tracking-tight">
              DOR
            </h3>
            <p class="text-gray-300 text-sm leading-relaxed mb-6">
              Découvrez les meilleurs hôtels et activités en Côte d'Ivoire. Réservez facilement et vivez des expériences uniques.
            </p>
            <div class="flex gap-3">
              <a href="#" class="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all duration-300">
                <i class='bx bxl-facebook text-sm'></i>
              </a>
              <a href="#" class="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all duration-300">
                <i class='bx bxl-instagram text-sm'></i>
              </a>
              <a href="#" class="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all duration-300">
                <i class='bx bxl-twitter text-sm'></i>
              </a>
              <a href="#" class="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all duration-300">
                <i class='bx bxl-linkedin text-sm'></i>
              </a>
            </div>
          </div>

          <div>
            <h4 class="font-bold text-lg mb-4 relative inline-block after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-8 after:h-0.5 after:bg-amber-500">
              Liens rapides
            </h4>
            <ul class="space-y-2 text-sm text-gray-300">
              <li><router-link to="/" class="hover:text-white hover:translate-x-1 inline-block transition-all">Accueil</router-link></li>
              <li><router-link to="/hotel" class="hover:text-white hover:translate-x-1 inline-block transition-all">Hôtels</router-link></li>
              <li><router-link to="/activites" class="hover:text-white hover:translate-x-1 inline-block transition-all">Activités</router-link></li>
              <li><router-link to="/contacts" class="hover:text-white hover:translate-x-1 inline-block transition-all">Contacts</router-link></li>
              <li><router-link to="/inscription" class="hover:text-white hover:translate-x-1 inline-block transition-all">S'inscrire</router-link></li>
              <li><router-link to="/connexion" class="hover:text-white hover:translate-x-1 inline-block transition-all">Se connecter</router-link></li>
            </ul>
          </div>

          <div>
            <h4 class="font-bold text-lg mb-4 relative inline-block after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-8 after:h-0.5 after:bg-amber-500">
              Contact
            </h4>
            <ul class="space-y-3 text-sm text-gray-300">
              <li class="flex items-start gap-2">
                <i class='bx bx-map text-amber-400 mt-0.5'></i>
                <span>Abidjan, Côte d'Ivoire</span>
              </li>
              <li class="flex items-center gap-2">
                <i class='bx bx-phone text-amber-400'></i>
                <span>+225 07 07 07 07 07</span>
              </li>
              <li class="flex items-center gap-2">
                <i class='bx bx-envelope text-amber-400'></i>
                <span>contact@dor.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 class="font-bold text-lg mb-4 relative inline-block after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-8 after:h-0.5 after:bg-amber-500">
              Newsletter
            </h4>
            <p class="text-gray-300 text-sm mb-4">
              Recevez nos offres exclusives et bons plans !
            </p>
            <div class="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Votre email"
                class="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:border-amber-400 transition"
              >
              <button class="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 rounded-lg transition-all duration-300 shadow-lg shadow-amber-500/20">
                S'abonner
              </button>
            </div>
          </div>
        </div>

        <div class="border-t border-white/10 pt-8 mb-8">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div class="text-center group cursor-pointer">
              <div class="text-3xl font-bold text-amber-400 mb-1 group-hover:scale-110 transition-transform">185K</div>
              <div class="text-xs text-gray-400 uppercase tracking-wide">Utilisateurs / jour</div>
            </div>
            <div class="text-center group cursor-pointer">
              <div class="text-3xl font-bold text-amber-400 mb-1 group-hover:scale-110 transition-transform">100K+</div>
              <div class="text-xs text-gray-400 uppercase tracking-wide">Téléchargements / jour</div>
            </div>
            <div class="text-center group cursor-pointer">
              <div class="text-3xl font-bold text-amber-400 mb-1 group-hover:scale-110 transition-transform">4.8 ★</div>
              <div class="text-xs text-gray-400 uppercase tracking-wide">Note moyenne</div>
            </div>
            <div class="text-center group cursor-pointer">
              <div class="text-3xl font-bold text-amber-400 mb-1 group-hover:scale-110 transition-transform">500+</div>
              <div class="text-xs text-gray-400 uppercase tracking-wide">Partenaires</div>
            </div>
          </div>
        </div>

        <div class="border-t border-white/10 pt-8 mb-6">
          <div class="flex flex-col md:flex-row justify-between items-center gap-4">
            <p class="text-sm text-gray-300">Téléchargez l'application mobile DOR</p>
            <div class="flex gap-3">
              <button class="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-2 hover:bg-white hover:text-slate-900 transition-all duration-300 group">
                <i class='bx bxl-apple text-xl group-hover:scale-110 transition-transform'></i>
                <div class="text-left">
                  <div class="text-[10px]">Télécharger sur</div>
                  <div class="font-semibold text-sm">App Store</div>
                </div>
              </button>
              <button class="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-2 hover:bg-white hover:text-slate-900 transition-all duration-300 group">
                <i class='bx bxl-play-store text-xl group-hover:scale-110 transition-transform'></i>
                <div class="text-left">
                  <div class="text-[10px]">Télécharger sur</div>
                  <div class="font-semibold text-sm">Google Play</div>
                </div>
              </button>
            </div>
          </div>
        </div>

        <div class="border-t border-white/10 pt-6 text-center">
          <p class="text-gray-400 text-xs">
            &copy; 2024 DOR - Tous droits réservés |
            <a href="#" class="hover:text-white transition">Mentions légales</a> |
            <a href="#" class="hover:text-white transition">Politique de confidentialité</a>
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

// Titres dynamiques pour les pages de détail
const hotelTitle = ref('Détail de l\'hôtel')
const activityTitle = ref('Détail de l\'activité')

// Écouter les changements de route pour réinitialiser les titres
watch(() => route.params.id, () => {
  if (!route.path.startsWith('/hotel/') && !route.path.startsWith('/activite/')) {
    hotelTitle.value = 'Détail de l\'hôtel'
    activityTitle.value = 'Détail de l\'activité'
  }
})

// Fonctions pour mettre à jour les titres depuis les composants enfants
const updateHotelTitle = (title) => {
  hotelTitle.value = title
}

const updateActivityTitle = (title) => {
  activityTitle.value = title
}

// Gestion de l'affichage des menus
const activeMenu = ref(null)
const toggleMenu = (menu) => {
  activeMenu.value = activeMenu.value === menu ? null : menu
}

// 1. Destination
const selectedDestination = ref('')
const selectDestination = (city) => {
  selectedDestination.value = city + ", Côte d'Ivoire"
  activeMenu.value = null
}

// 2. Dates
const arrivalDate = ref('')
const departureDate = ref('')

const dateRange = computed(() => {
  if (!arrivalDate.value) return ''
  const start = arrivalDate.value.split('-').reverse().slice(0, 2).join('/')
  const end = departureDate.value ? departureDate.value.split('-').reverse().slice(0, 2).join('/') : '?'
  return `${start} — ${end}`
})

// 3. Voyageurs
const counts = ref({
  rooms: 1,
  adults: 2,
  children: 0
})

const guestTypes = [
  { key: 'rooms', label: 'Chambres', sub: 'Max 5' },
  { key: 'adults', label: 'Adultes', sub: '12 ans et +' },
  { key: 'children', label: 'Enfants', sub: '0 - 11 ans' }
]

const updateCount = (key, val) => {
  const min = key === 'children' ? 0 : 1
  const max = key === 'adults' ? 10 : 5
  counts.value[key] = Math.min(max, Math.max(min, counts.value[key] + val))
}

const roomGuestText = computed(() => {
  const { rooms, adults, children } = counts.value
  return `${rooms} ch, ${adults} ad, ${children} enf`
})

// Fermer les menus si on clique ailleurs
const closeMenus = (e) => {
  if (!e.target.closest('.relative')) activeMenu.value = null
}
onMounted(() => window.addEventListener('click', closeMenus))
onUnmounted(() => window.removeEventListener('click', closeMenus))
</script>

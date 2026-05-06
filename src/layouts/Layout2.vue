<template>
  <div class="min-h-screen bg-gray-50 font-sans flex flex-col">
    <!-- Navbar simplifiée pour Layout2 -->
    <nav class="bg-black text-white py-4 px-6 md:px-12 flex items-center justify-between sticky top-0 z-40">
      <!-- Logo et Liens Gauche -->
      <div class="flex items-center gap-16">
        <router-link to="/" class="text-3xl font-black tracking-tighter">
          DOR
        </router-link>

        <ul class="hidden md:flex items-center gap-4">
          <li v-for="link in navLinks" :key="link.name">
            <router-link
              :to="link.path"
              class="text-sm font-medium transition-all px-4 py-2 rounded-full"
              active-class="bg-zinc-800 text-white"
              inactive-class="text-gray-400 hover:text-white"
            >
              {{ link.name }}
            </router-link>
          </li>
        </ul>
      </div>

      <!-- Actions Droite -->
      <div class="flex items-center gap-6">
        <router-link to="/etablissement" class="hidden lg:block border border-white text-xs font-medium px-6 py-2.5 rounded-full hover:bg-white/35 hover:text-black transition-all">
          Ajouter mon établissement
      </router-link>

        <div class="flex items-center gap-2 cursor-pointer group">
          <span class="text-sm font-medium text-gray-300 group-hover:text-white">XOF</span>
          <span class="text-lg">🇨🇮</span>
        </div>

        <div class="flex items-center gap-3 pl-4 border-l border-zinc-800 cursor-pointer group">
          <div class="w-10 h-10 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center overflow-hidden transition-transform group-hover:scale-105">
            <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
            </svg>
          </div>
          <span class="hidden sm:block text-sm font-medium text-gray-200 group-hover:text-white">
            Daniel Sekongo
          </span>
        </div>

        <!-- Menu Mobile -->
        <button class="md:hidden text-white">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </nav>

    <!-- Header avec titre dynamique -->
    <header class="bg-black text-white pt-8 pb-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-6xl mx-auto">
        <div class="max-w-2xl">
          <h1 class="text-2xl md:text-3xl font-bold mb-2 tracking-tight">
            Complétez vos informations
          </h1>
          <p class="text-gray-300 text-sm md:text-base leading-relaxed">
            Veuillez remplir tous les champs ci-dessous pour finaliser votre réservation
          </p>
        </div>
      </div>
    </header>

    <!-- Contenu principal - C'est ICI que s'affiche Information.vue -->
    <main class="flex-1 max-w-6xl mx-auto px-4 py-12 w-full">
      <router-view></router-view>
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
import { ref } from 'vue'

// Définition des routes pour les router-link
const navLinks = [
  { name: 'Accueil', path: '/' },
  { name: 'Hôtels', path: '/hotel' },
  { name: 'Activités', path: '/activites' },
  { name: 'Contacts', path: '/contacts' },
]
</script>

<style scoped>
.router-link-active {
  background-color: #27272a;
  color: white;
}

nav a:not(.router-link-active) {
  color: #9ca3af;
}

nav a:not(.router-link-active):hover {
  color: white;
}
</style>

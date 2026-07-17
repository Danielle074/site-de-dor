<template>
  <div class="flex bg-[#f8f9fa] min-h-screen text-slate-800 antialiased">
    <!-- Barre latérale fixe -->
    <Sidebar />

    <!-- Contenu Principal décalé de la largeur de la barre (pl-64) -->
    <div class="flex-1 flex flex-col min-w-0 pl-64">

      <!-- Topbar / Navbar supérieure fixe au défilement -->
      <header class="bg-white h-16 border-b border-gray-100 flex items-center justify-between px-8 sticky top-0 z-10">

        <!-- Titre dynamique basé sur le lien actif de la sidebar -->
        <h1 class="text-xl font-bold text-gray-900">
          {{ currentTitle }}
        </h1>

        <!-- Section Droite : Recherche et Profil -->
        <div class="flex items-center gap-6">

          <!-- Barre de recherche -->
          <div class="relative w-64">
            <span class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
              <i class="bx bx-search text-lg"></i>
            </span>
            <input
              type="text"
              placeholder="Search room, guest, book, etc"
              class="w-full pl-10 pr-4 py-1.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-gray-400 transition-colors"
            />
          </div>

          <!-- Bouton Langue / Paramètres -->
          <button class="text-gray-500 hover:text-gray-800 p-1.5 rounded-lg hover:bg-gray-50 transition-colors">
            <i class="bx bx-globe text-xl"></i>
          </button>

          <!-- Notification avec puce rouge -->
          <button class="relative text-gray-500 hover:text-gray-800 p-1.5 rounded-lg hover:bg-gray-50 transition-colors">
            <i class="bx bx-bell text-xl"></i>
            <span class="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white"></span>
          </button>

          <!-- Séparateur vertical -->
          <div class="h-8 w-px bg-gray-200"></div>

          <!-- Bloc Profil Utilisateur -->
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center text-white font-semibold shadow-sm overflow-hidden">
              <span class="text-sm">JD</span>
            </div>
            <div class="flex flex-col text-left">
              <span class="text-sm font-semibold text-gray-900 leading-tight">Jaylon Donwart</span>
              <span class="text-xs text-gray-400">Admin</span>
            </div>
          </div>

        </div>
      </header>

      <!-- Zone d'injection dynamique des pages de ton application -->
      <main class="p-8 flex-1 overflow-y-auto">
        <router-view />
      </main>

    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import Sidebar from '@/components/Sidebar.vue' // Ajuste le chemin si ton fichier est ailleurs (ex: @/components/Sidebar.vue)

const route = useRoute()

/**
 * Ce dictionnaire fait correspondre l'URL courante détectée par Vue Router
 * avec le libellé exact de ton menu pour actualiser l'en-tête instantanément.
 */
const routeTitles: Record<string, string> = {
  '/dashboard': 'Dashboard',
  '/reservations': 'Reservation',
  '/hebergements': 'Mes hébergements',
  '/messages': 'Messages',
  '/nettoyage': 'Nettoyage',
  '/inventaire': 'Inventaire',
  '/calendrier': 'Calendrier',
  '/finances': 'Finances',
  '/avis': 'Avis',
  '/concierge': 'Concierge'
}

// Propriété réactive calculant le titre à afficher
const currentTitle = computed<string>(() => {
  return routeTitles[route.path] || (route.meta?.title as string) || 'Dashboard'
})
</script>

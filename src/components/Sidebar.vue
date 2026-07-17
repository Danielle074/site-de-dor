<template>
  <!-- Ajout de fixed, top-0, left-0, h-screen et z-30 pour la bloquer à gauche -->
  <aside class="fixed top-0 left-0 z-30 w-64 bg-[#1e1e1e] text-gray-300 h-screen flex flex-col justify-between p-4 font-sans shadow-2xl border-r border-neutral-900">
    <div>
      <router-link to="/">
        <div class="text-white text-xl font-bold tracking-wider text-center py-6 border-b border-gray-800">
          DOR
        </div>
      </router-link>

      <!-- Ajout d'un scroll interne discret uniquement pour le menu si besoin -->
      <nav class="mt-6 space-y-1 overflow-y-auto max-h-[calc(100vh-120px)] pr-1 custom-scrollbar">
        <router-link
          v-for="item in menuItems"
          :key="item.path"
          :to="item.path"
          custom
          v-slot="{ href, navigate, isActive }"
        >
          <a
            :href="href"
            @click="navigate"
            :class="[
              'flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 group',
              isActive
                ? 'bg-white text-black font-semibold shadow-md'
                : 'hover:bg-gray-800 hover:text-white'
            ]"
          >
            <div class="flex items-center gap-3">
              <i :class="[item.icon, 'text-xl', isActive ? 'text-black' : 'text-gray-400 group-hover:text-white']"></i>
              <span>{{ item.title }}</span>
            </div>

            <div v-if="item.badge" class="bg-black text-white text-xs px-2 py-0.5 rounded-full font-bold">
              {{ item.badge }}
            </div>
            <i v-if="item.hasDropdown" class="bx bx-chevron-down text-sm opacity-60"></i>
          </a>
        </router-link>
      </nav>
    </div>
  </aside>
</template>

<script setup lang="ts">
interface MenuItem {
  title: string;
  path: string;
  icon: string;
  badge?: string | number;
  hasDropdown?: boolean;
}

const menuItems: MenuItem[] = [
  { title: 'Dashboard', path: '/dashboard', icon: 'bx bx-grid-alt' },
  { title: 'Reservation', path: '/dashboard/reservation', icon: 'bx bx-calendar-check' },
  { title: 'Mes hébergements', path: '/dashboard/hebergement', icon: 'bx bx-home-alt' },
  { title: 'Calendrier', path: '/dashboard/calendrier', icon: 'bx bx-calendar' },
  { title: 'Finances', path: '/dashboard/finance', icon: 'bx bx-wallet', hasDropdown: true },

];
</script>

<style scoped>
/* Transition douce sur le changement de couleur */
a {
  content-visibility: auto;
}

/* Personnalisation de la barre de défilement pour la rendre invisible et fine */
.custom-scrollbar::-webkit-scrollbar {
  width: 4px;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
}
</style>

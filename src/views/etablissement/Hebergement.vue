<template>
  <div class="min-h-screen bg-white py-16 px-6 md:px-12 flex flex-col items-center">

    <!-- En-tête -->
    <div class="max-w-4xl w-full mb-12">
      <h1 class="text-3xl md:text-4xl font-bold text-[#1a1a1a] leading-tight mb-4">
        Inscrivez votre hébergement sur DOR.com et commencez à recevoir des clients en un rien de temps !
      </h1>
      <p class="text-gray-600 font-medium">
        Pour commencer, choisissez le type d'établissement que vous souhaitez inscrire
      </p>
    </div>

    <!-- Grille des Cartes -->
    <div class="max-w-7xl w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
      <div
        v-for="(item, index) in categories"
        :key="index"
        class="border border-gray-200 rounded-2xl p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow bg-white"
      >
        <!-- Icône Boxicons -->
        <div class="mb-6">
          <i :class="item.icon" class="text-6xl text-zinc-900"></i>
        </div>

        <h3 class="text-lg font-bold mb-3 min-h-[56px] flex items-center">
          {{ item.title }}
        </h3>

        <p class="text-gray-500 text-xs leading-relaxed mb-8 flex-1">
          {{ item.description }}
        </p>

        <router-link
          to="/etablissement/appartement"
          class="w-full bg-[#1a1a1a] text-white text-[13px] font-bold py-3 rounded-xl hover:bg-zinc-800 transition-colors"
        >
          Inscrivez l'établissement
        </router-link>
      </div>
    </div>

  </div>
</template>

<script setup>
const categories = [
  {
    title: 'Appartements',
    icon: 'bx bx-home-alt',
    description: 'Hébergement meublé avec cuisine que les clients peuvent louer intégralement',
    path: '/register/apartment'
  },
  {
    title: 'Maisons',
    icon: 'bx bx-building-house',
    description: 'Hébergements s\'apparentant à des appartements, des maisons de vacances, des villas, etc.',
    path: '/register/house'
  },
  {
    title: 'Hôtels, chambres d\'hôtes et bien plus',
    icon: 'bx bx-hotel',
    description: 'Hébergement meublé avec cuisine que les clients peuvent louer intégralement',
    path: '/register/hotel'
  },
  {
    title: 'Autres hébergements',
    icon: 'bx bx-landscape',
    description: 'Hébergements s\'apparentant à des bateaux, des campings, des tentes de luxe, etc.',
    path: '/register/others'
  }
]
</script>

<style scoped>
/* Ajustement de la typographie pour coller au design */
h1 {
  letter-spacing: -0.02em;
}

/* On force une hauteur minimale pour les titres afin que les boutons restent alignés */
h3 {
  line-height: 1.2;
}
</style>

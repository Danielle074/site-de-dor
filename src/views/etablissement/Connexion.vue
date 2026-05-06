<template>
  <div class="min-h-screen bg-white flex flex-col items-center pt-12 px-6">
    <div class="w-full max-w-xl">

      <!-- En-tête -->
      <div class="text-center mb-10">
        <h1 class="text-3xl font-bold mb-4">Vos coordonnées</h1>
        <p class="text-gray-600 text-sm leading-relaxed max-w-md mx-auto">
          Veuillez fournir votre nom complet ainsi que votre numéro de téléphone pour garantir la sécurité de votre compte DOR.com.
        </p>
      </div>

      <!-- Formulaire -->
      <form @submit.prevent="handleNext" class="space-y-6">

        <!-- Prénom -->
        <div class="space-y-2">
          <label for="firstName" class="block text-sm font-bold ml-1">Prénom</label>
          <input
            id="firstName"
            v-model="formData.firstName"
            type="text"
            placeholder="Suite Home"
            class="w-full border border-gray-300 rounded-2xl p-4 outline-none focus:ring-2 ring-zinc-500 transition-all"
          />
        </div>

        <!-- Nom -->
        <div class="space-y-2">
          <label for="lastName" class="block text-sm font-bold ml-1">Nom</label>
          <input
            id="lastName"
            v-model="formData.lastName"
            type="text"
            placeholder="SCB"
            class="w-full border border-gray-300 rounded-2xl p-4 outline-none focus:ring-2 ring-zinc-500 transition-all"
          />
        </div>

        <!-- Numéro de téléphone -->
        <div class="space-y-2">
          <label for="phone" class="block text-sm font-bold ml-1">Numéro de téléphone</label>
          <div class="flex gap-3">
            <!-- Sélecteur Pays simplifié -->
            <div class="flex items-center gap-2 border border-gray-300 rounded-2xl px-4 py-4 cursor-pointer hover:bg-gray-50 transition-colors">
              <span class="text-xl">🇨🇮</span>
              <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>
            </div>

            <!-- Input Numéro -->
            <div class="flex-1 flex items-center border border-gray-300 rounded-2xl overflow-hidden focus-within:ring-2 ring-zinc-500 transition-all">
              <span class="pl-4 pr-2 text-gray-400 border-r border-gray-200 text-sm">+225</span>
              <input
                id="phone"
                v-model="formData.phone"
                type="tel"
                placeholder="0102030405"
                class="w-full p-4 outline-none text-sm"
              />
            </div>
          </div>
        </div>

        <!-- Note d'information -->
        <p class="text-[12px] text-gray-500 leading-tight">
          Nous enverrons un SMS comportant un code d'authentification à 2 facteurs à ce numéro lorsque vous vous connecterez.
        </p>

        <!-- Bouton Suivant centré - Version centrée uniquement -->
        <div class="flex justify-center mt-6">
          <router-link to="/etablissement/mot-de-passe"

            class="bg-[#1e1e1e] text-white font-bold py-6 px-30 rounded-2xl hover:bg-zinc-800 transition-colors text-base cursor-pointer"
          >
            Suivant
        </router-link>
        </div>

        <!-- Mentions légales -->
        <p class="text-[11px] text-center text-gray-400 mt-8 px-4 leading-relaxed">
          En créant ou en vous connectant à un compte, vous acceptez nos
          <a href="#" class="text-gray-600 underline">conditions générales</a> et
          notre <a href="#" class="text-gray-600 underline">charte de confidentialité</a>.
        </p>

      </form>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const formData = reactive({
  firstName: '',
  lastName: '',
  phone: ''
})

const handleNext = () => {
  // Validation des champs
  if (!formData.firstName) {
    alert('Veuillez entrer votre prénom')
    return
  }
  if (!formData.lastName) {
    alert('Veuillez entrer votre nom')
    return
  }
  if (!formData.phone) {
    alert('Veuillez entrer votre numéro de téléphone')
    return
  }

  console.log('Données soumises :', formData)
  // Redirection vers la page suivante
  router.push('/mot-de-passe')
}
</script>

<style scoped>
input::placeholder {
  color: #9ca3af;
}
</style>

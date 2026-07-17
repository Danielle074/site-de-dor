<template>
  <div
    class="relative min-h-screen bg-cover bg-center"
    :style="{ backgroundImage: `url(${hotelImage})` }"
  >
    <div class="absolute inset-0 bg-black/60"></div>

    <div
      class="relative z-10 flex min-h-screen items-center justify-center px-4 lg:px-10"
    >
      <div class="grid w-full max-w-7xl lg:grid-cols-2 gap-10 items-center">

        <div class="hidden lg:block text-white">
          <h1 class="text-5xl font-bold leading-tight">
            Bienvenue sur la plateforme
          </h1>

          <h2 class="mt-4 text-6xl font-extrabold text-gray-200">
            DOR
          </h2>

          <p class="mt-6 text-lg text-gray-300 max-w-lg">
            Gérez vos réservations, vos chambres et vos clients
            depuis une interface moderne, sécurisée et intuitive.
          </p>
        </div>

        <div
          class="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 w-full max-w-xl mx-auto"
        >
          <div class="text-center mb-10">
            <h1
              class="text-5xl font-black tracking-[0.3em] text-black"
            >
              DOR
            </h1>

            <div class="flex items-center justify-center gap-3 mt-2">
              <div class="h-px w-12 bg-gray-300"></div>
              <span class="text-sm font-medium text-gray-500">
                Gestion d'hôtel
              </span>

              <div class="h-px w-12 bg-gray-300"></div>
            </div>
          </div>

          <h3 class="text-center text-2xl font-bold text-gray-800 mb-8">
            Connexion
          </h3>

          <form @submit.prevent="login" class="space-y-5">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">
                Adresse email
              </label>

              <input
                v-model="email"
                type="email"
                placeholder="Entrez votre adresse email"
                class="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-black focus:outline-none"
                required
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">
                Mot de passe
              </label>

              <input
                v-model="password"
                type="password"
                placeholder="Entrez votre mot de passe"
                class="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-black focus:outline-none"
                required
              />
            </div>

            <div class="flex items-center justify-between">
              <label class="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                <input
                  type="checkbox"
                  v-model="remember"
                  class="rounded text-black focus:ring-black"
                />
                Se souvenir de moi
              </label>

              <a
                href="#"
                class="text-sm font-medium text-black hover:underline"
              >
                Mot de passe oublié ?
              </a>
            </div>

            <button
              type="submit"
              class="w-full block text-center rounded-lg bg-black py-3 font-semibold text-white transition-colors duration-200 hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
            >
              Se connecter
            </button>
          </form>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

// Ton image d'hôtel
import hotelImage from '@/assets/images/chambre1.jpg'

const router = useRouter()

const email = ref<string>('')
const password = ref<string>('')
const remember = ref<boolean>(false)

const login = (): void => {
  console.log({
    email: email.value,
    password: password.value,
    remember: remember.value
  })

  // Redirection automatique vers le dashboard après la soumission valide
  router.push('/dashboard')
}
</script>

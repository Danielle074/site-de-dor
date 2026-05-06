import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/layouts/Layout.vue'
import Layout2 from '@/layouts/Layout2.vue'
import Layout3 from '@/layouts/Layout3.vue'

import Home from '@/views/Home.vue'
import Hotel from '@/views/Hotel.vue'
import OtpModal from '@/components/OtpModal.vue'
import Activites from '@/views/Activites.vue'
import Inscription from '@/views/Inscription.vue'
import Contacts from '@/views/Contacts.vue'
import HotelDetail from '@/components/hotel/HotelDetail.vue'
import Information from '@/components/hotel/Information.vue'
import Connexion from '@/views/etablissement/Connexion.vue'
import MotDePasse from '@/views/etablissement/MotDePasse.vue'
import Hebergement from '@/views/etablissement/Hebergement.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    // 🔵 Layout2 pour Information
    {
      path: '/hotel/:id/information',
      component: Layout2,
      children: [
        {
          path: '',
          name: 'hotel-information',
          component: Information
        }
      ]
    },

    // 🟣 Layout3 pour établissement
    {
      path: '/etablissement',
      component: Layout3,
      children: [
        {
          path: '',
          name: 'connexion',
          component: Connexion
        },
        {
          path: 'mot-de-passe',
          name: 'mot-de-passe',
          component: MotDePasse
        },
        {
          path: 'hebergement',
          name: 'hebergement',
          component: Hebergement
        }
      ]
    },

    // 🟢 Layout principal
    {
      path: '/',
      component: Layout,
      children: [
        { path: '', name: 'home', component: Home },
        { path: 'hotel', name: 'hotel', component: Hotel },
        { path: 'otp', name: 'otp', component: OtpModal },
        { path: 'activites', name: 'activites', component: Activites },
        { path: 'inscription', name: 'inscription', component: Inscription },
        { path: 'contacts', name: 'contacts', component: Contacts },
        { path: 'connexion', name: 'connexion', component: Connexion },

        { path: 'hotel/:id', name: 'hotel-detail', component: HotelDetail },
      ]
    }
  ]
})

export default router

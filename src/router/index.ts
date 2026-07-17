import { createRouter, createWebHistory } from 'vue-router'

// Layouts
import Layout from '@/layouts/Layout.vue'
import Layout2 from '@/layouts/Layout2.vue'
import Layout3 from '@/layouts/Layout3.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'

// Public pages
import Home from '@/views/Home.vue'
import Hotel from '@/views/Hotel.vue'
import Activites from '@/views/Activites.vue'
import Inscription from '@/views/Inscription.vue'
import Contacts from '@/views/Contacts.vue'
import OtpModal from '@/components/OtpModal.vue'

// Auth / autres
import ConnexionWebsite from '@/views/Connexion.vue'

// Détail hôtel
import HotelDetail from '@/components/hotel/HotelDetail.vue'

// Etablissement
import Information from '@/components/hotel/Information.vue'
import Connexion from '@/views/etablissement/Connexion.vue'
import MotDePasse from '@/views/etablissement/MotDePasse.vue'
import Hebergement from '@/views/etablissement/Hebergement.vue'
import Appartement from '@/views/etablissement/Appartement.vue'
import ChoixAppartements from '@/views/etablissement/ChoixAppartements.vue'
import LeChoix from '@/views/etablissement/LeChoix.vue'
import AjoutLien from '@/views/etablissement/AjoutLien.vue'
import InformationGenerale from '@/views/etablissement/InformationsGenerales.vue'
import AdressForm from '@/views/etablissement/AdresseForm.vue'
import ConfigurationHebergement from '@/views/etablissement/ConfigurationHebergement.vue'
import GestionReservations from '@/views/etablissement/GestionReservations.vue'

// 📊 Vue du Tableau de bord (À importer depuis votre dossier views)
import Dashboard from '@/views/dashboard/Dashboard.vue'
import Reservations from '@/views/dashboard/Reservation.vue'
import HebergementDashboard from '@/views/dashboard/Hebergement.vue'
import Calendrier from '@/views/dashboard/Calendrier.vue'
import Finance from '@/views/dashboard/Finance.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    // 🟢 LAYOUT PRINCIPAL (Website public)
    {
      path: '/',
      component: Layout,
      children: [
        { path: '', name: 'home', component: Home },
        { path: 'activites', name: 'activites', component: Activites },
        { path: 'inscription', name: 'inscription', component: Inscription },
        { path: 'contacts', name: 'contacts', component: Contacts },
        { path: 'otp', name: 'otp', component: OtpModal },
      ]
    },
    {
      path: '/hotel',
      component: Layout,
      children: [
        // 📌 LISTE HOTELS
        {
          path: '',
          name: 'hotel',
          component: Hotel
        },
        // 🔥 HOTEL DETAIL FIXE (SANS SLUG)
        {
          path: 'hotel-detail',
          name: 'hotel-azalai',
          component: HotelDetail
        },
        {
          path: 'sofitel',
          name: 'hotel-sofitel',
          component: HotelDetail
        },
        {
          path: 'bene-kigali',
          name: 'hotel-bene',
          component: HotelDetail
        },
        {
          path: 'bnb-angre',
          name: 'hotel-bnb',
          component: HotelDetail
        }
      ]
    },

    // Sans layout
    {
      path: '/connexion',
      name: 'connexion',
      component: ConnexionWebsite
    },

    // 🔵 INFO HOTEL
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

    // 🟣 ETABLISSEMENT (Formulaires de configuration)
    {
      path: '/etablissement',
      component: Layout3,
      children: [
        { path: '', name: 'connexion-etablissement', component: Connexion },
        { path: 'mot-de-passe', name: 'mot-de-passe', component: MotDePasse },
        { path: 'hebergement', name: 'hebergement', component: Hebergement },
        { path: 'appartement', name: 'appartement', component: Appartement },
        { path: 'choix-appartements', name: 'choix-appartements', component: ChoixAppartements },
        { path: 'le-choix', name: 'le-choix', component: LeChoix },
        { path: 'ajout-lien', name: 'ajout-lien', component: AjoutLien },
        { path: 'information-generale', name: 'information-generale', component: InformationGenerale },
        { path: 'adress-form', name: 'adress-form', component: AdressForm },
        { path: 'configuration-hebergement', name: 'configuration-hebergement', component: ConfigurationHebergement },
        { path: 'gestion-reservations', name: 'gestion-reservations', component: GestionReservations }
      ]
    },

    // 🛠️ 🟡 NOUVEAU : LAYOUT BACKOFFICE / ACCUEIL DOR (DefaultLayout)
    // Regroupe toutes les routes internes liées à votre Sidebar
    {
      path: '/dashboard',
      component: DefaultLayout,
      children: [
        {
          path: '',
          name: 'dashboard',
          component: Dashboard
        },
        {
          path: 'reservation',
          name: 'reservation',
          component: Reservations
        },
        {
          path: 'hebergement',
          name: 'hebergement',
          component: HebergementDashboard
        },
        {
          path: 'calendrier',
          name: 'calendrier',
          component: Calendrier
        },
        {
          path: 'finance',
          name: 'finance',
          component: Finance
        }
      ]
    }
  ]
})

export default router

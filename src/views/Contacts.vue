<template>
  <div class="max-w-6xl mx-auto">
    <!-- Section principale avec carte et formulaire -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">

      <!-- Colonne gauche : Informations de contact -->
      <div class="lg:col-span-1 space-y-6">
        <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 class="text-lg font-bold mb-4 flex items-center gap-2">
            <i class='bx bx-phone-call text-amber-500'></i>
            Contactez-nous
          </h3>
          <p class="text-sm text-gray-500 mb-6">
            Notre équipe est disponible 7j/7 pour répondre à vos questions et vous accompagner.
          </p>

          <div class="space-y-4">
            <div class="flex items-start gap-3">
              <div class="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center flex-shrink-0">
                <i class='bx bx-map text-amber-500'></i>
              </div>
              <div>
                <p class="text-xs font-bold text-gray-400 uppercase">Adresse</p>
                <p class="text-sm text-gray-700">Avenue Hassan II, Cocody<br>Abidjan, Côte d'Ivoire</p>
              </div>
            </div>

            <div class="flex items-start gap-3">
              <div class="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center flex-shrink-0">
                <i class='bx bx-phone text-amber-500'></i>
              </div>
              <div>
                <p class="text-xs font-bold text-gray-400 uppercase">Téléphone</p>
                <p class="text-sm text-gray-700">+225 27 22 48 00 00</p>
                <p class="text-xs text-gray-400">Lun-Ven: 8h-20h, Sam-Dim: 9h-18h</p>
              </div>
            </div>

            <div class="flex items-start gap-3">
              <div class="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center flex-shrink-0">
                <i class='bx bx-envelope text-amber-500'></i>
              </div>
              <div>
                <p class="text-xs font-bold text-gray-400 uppercase">Email</p>
                <p class="text-sm text-gray-700">contact@dor.com</p>
                <p class="text-xs text-gray-400">support@dor.com</p>
              </div>
            </div>

            <div class="flex items-start gap-3">
              <div class="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center flex-shrink-0">
                <i class='bx bx-time-five text-amber-500'></i>
              </div>
              <div>
                <p class="text-xs font-bold text-gray-400 uppercase">Horaires d'ouverture</p>
                <p class="text-sm text-gray-700">Lundi - Vendredi: 8h - 20h</p>
                <p class="text-sm text-gray-700">Samedi - Dimanche: 9h - 18h</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Carte Google Maps -->
        <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 class="text-lg font-bold mb-4 flex items-center gap-2">
            <i class='bx bx-map-alt text-amber-500'></i>
            Notre emplacement
          </h3>
          <div class="rounded-xl overflow-hidden h-48 bg-gray-100 relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.123456789!2d-4.008!3d5.325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc1f8d5e4c5b5c3d%3A0x123456789abcdef!2sAbidjan%2C%20C%C3%B4te%20d%27Ivoire!5e0!3m2!1sfr!2scm!4v1700000000000!5m2!1sfr!2scm"
              width="100%"
              height="100%"
              style="border:0;"
              allowfullscreen=""
              loading="lazy">
            </iframe>
          </div>
        </div>
      </div>

      <!-- Colonne droite : Formulaire de contact -->
      <div class="lg:col-span-2">
        <div class="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
          <h3 class="text-xl font-bold mb-2">Envoyez-nous un message</h3>
          <p class="text-sm text-gray-500 mb-6">
            Nous vous répondrons dans les meilleurs délais
          </p>

          <form @submit.prevent="submitForm" class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label class="block text-xs font-bold text-gray-700 mb-2">
                  Nom complet <span class="text-red-500">*</span>
                </label>
                <div class="relative">
                  <i class='bx bx-user absolute left-3 top-1/2 -translate-y-1/2 text-gray-400'></i>
                  <input
                    v-model="form.name"
                    type="text"
                    placeholder="Jean Dupont"
                    class="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition text-sm"
                    required
                  />
                </div>
              </div>

              <div>
                <label class="block text-xs font-bold text-gray-700 mb-2">
                  Email <span class="text-red-500">*</span>
                </label>
                <div class="relative">
                  <i class='bx bx-envelope absolute left-3 top-1/2 -translate-y-1/2 text-gray-400'></i>
                  <input
                    v-model="form.email"
                    type="email"
                    placeholder="jean@exemple.com"
                    class="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition text-sm"
                    required
                  />
                </div>
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label class="block text-xs font-bold text-gray-700 mb-2">
                  Téléphone
                </label>
                <div class="relative">
                  <i class='bx bx-phone absolute left-3 top-1/2 -translate-y-1/2 text-gray-400'></i>
                  <input
                    v-model="form.phone"
                    type="tel"
                    placeholder="+225 07 07 07 07 07"
                    class="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition text-sm"
                  />
                </div>
              </div>

              <div>
                <label class="block text-xs font-bold text-gray-700 mb-2">
                  Sujet <span class="text-red-500">*</span>
                </label>
                <div class="relative">
                  <i class='bx bx-tag absolute left-3 top-1/2 -translate-y-1/2 text-gray-400'></i>
                  <select
                    v-model="form.subject"
                    class="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition text-sm appearance-none bg-white"
                    required
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="reservation">Réservation</option>
                    <option value="information">Demande d'information</option>
                    <option value="reclamation">Réclamation</option>
                    <option value="partenariat">Partenariat</option>
                    <option value="autre">Autre</option>
                  </select>
                  <i class='bx bx-chevron-down absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none'></i>
                </div>
              </div>
            </div>

            <div>
              <label class="block text-xs font-bold text-gray-700 mb-2">
                Message <span class="text-red-500">*</span>
              </label>
              <div class="relative">
                <i class='bx bx-message absolute left-3 top-3 text-gray-400'></i>
                <textarea
                  v-model="form.message"
                  rows="6"
                  placeholder="Décrivez votre demande en détail..."
                  class="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition text-sm resize-none"
                  required
                ></textarea>
              </div>
            </div>

            <div class="flex items-center gap-3">
              <input
                type="checkbox"
                v-model="form.acceptTerms"
                id="terms"
                class="w-4 h-4 rounded border-gray-300 text-amber-500 focus:ring-amber-500"
                required
              />
              <label for="terms" class="text-xs text-gray-500">
                J'accepte que mes données soient traitées conformément à la
                <a href="#" class="text-amber-500 hover:underline">politique de confidentialité</a>
              </label>
            </div>

            <button
              type="submit"
              :disabled="loading"
              class="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white py-3 rounded-xl font-bold hover:from-amber-600 hover:to-orange-600 transition-all duration-300 shadow-lg shadow-amber-500/25 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              <i v-if="!loading" class='bx bx-send'></i>
              <i v-if="loading" class='bx bx-loader-alt bx-spin'></i>
              {{ loading ? 'Envoi en cours...' : 'Envoyer le message' }}
            </button>
          </form>
        </div>
      </div>
    </div>

    <!-- Section FAQ -->
    <div class="mt-12">
      <div class="text-center mb-8">
        <h3 class="text-2xl font-bold mb-2">Questions fréquentes</h3>
        <p class="text-gray-500 text-sm">Trouvez rapidement une réponse à vos questions</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div
          v-for="(faq, index) in faqs"
          :key="index"
          class="bg-white rounded-xl p-5 border border-gray-100 hover:shadow-md transition-shadow cursor-pointer"
          @click="toggleFaq(index)"
        >
          <div class="flex justify-between items-start">
            <h4 class="font-bold text-sm text-gray-800 pr-4">{{ faq.question }}</h4>
            <i class='bx text-gray-400 text-xl flex-shrink-0' :class="faq.open ? 'bx-minus' : 'bx-plus'"></i>
          </div>
          <p v-show="faq.open" class="text-xs text-gray-500 mt-3 leading-relaxed">{{ faq.answer }}</p>
        </div>
      </div>
    </div>

    <!-- Alert de succès/erreur -->
    <div
      v-if="alert.show"
      class="fixed bottom-4 right-4 z-50 animate-slide-up"
      :class="alert.type === 'success' ? 'bg-green-500' : 'bg-red-500'"
    >
      <div class="text-white px-6 py-3 rounded-xl shadow-lg flex items-center gap-2">
        <i :class="alert.type === 'success' ? 'bx bx-check-circle' : 'bx bx-error-circle'"></i>
        <span class="text-sm">{{ alert.message }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const loading = ref(false)

const form = reactive({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
  acceptTerms: false
})

const alert = reactive({
  show: false,
  message: '',
  type: 'success'
})

const faqs = ref([
  {
    question: "Comment modifier ou annuler ma réservation ?",
    answer: "Vous pouvez modifier ou annuler votre réservation gratuitement jusqu'à 24h avant votre date d'arrivée. Connectez-vous à votre compte DOR et allez dans 'Mes réservations'.",
    open: false
  },
  {
    question: "Quels sont les moyens de paiement acceptés ?",
    answer: "Nous acceptons les cartes bancaires (Visa, Mastercard), Wave, Orange Money, et le paiement à l'hôtel pour certains établissements.",
    open: false
  },
  {
    question: "Comment obtenir une facture ?",
    answer: "Votre facture est disponible dans l'email de confirmation et dans votre espace client. Vous pouvez aussi la télécharger depuis la page de confirmation de réservation.",
    open: false
  },
  {
    question: "Les prix affichés sont-ils TTC ?",
    answer: "Oui, tous nos prix sont affichés TTC (Toutes Taxes Comprises). Aucun frais caché ne viendra s'ajouter lors de votre réservation.",
    open: false
  },
  {
    question: "Puis-je réserver pour quelqu'un d'autre ?",
    answer: "Oui, vous pouvez réserver au nom d'une autre personne. Il vous suffira d'indiquer ses coordonnées lors de la réservation.",
    open: false
  },
  {
    question: "Que faire en cas de problème avec une réservation ?",
    answer: "Notre service client est disponible 7j/7. Contactez-nous par téléphone, email ou via ce formulaire, nous vous répondrons dans l'heure.",
    open: false
  }
])

const toggleFaq = (index) => {
  faqs.value[index].open = !faqs.value[index].open
}

const submitForm = async () => {
  loading.value = true

  // Simulation d'envoi (à remplacer par votre API)
  setTimeout(() => {
    loading.value = false
    alert.message = 'Votre message a été envoyé avec succès ! Nous vous répondrons rapidement.'
    alert.type = 'success'
    alert.show = true

    // Réinitialiser le formulaire
    form.name = ''
    form.email = ''
    form.phone = ''
    form.subject = ''
    form.message = ''
    form.acceptTerms = false

    setTimeout(() => {
      alert.show = false
    }, 5000)
  }, 1500)
}
</script>

<style scoped>
@keyframes slide-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slide-up {
  animation: slide-up 0.3s ease-out;
}
</style>

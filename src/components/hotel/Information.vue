<template>
  <div class="min-h-screen bg-gray-50 p-4 md:p-8 font-sans text-gray-800">

    <!-- Stepper (Barre de progression) -->
    <div class="max-w-6xl mx-auto flex items-center justify-between mb-10 px-4">
      <div v-for="(step, index) in steps" :key="index" class="flex items-center flex-1 last:flex-none">
        <div class="flex flex-col items-center">
          <div
            :class="[
              'w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all cursor-pointer',
              index < currentStep ? 'bg-green-600 border-green-600 text-white' :
              index === currentStep ? 'bg-zinc-800 border-zinc-800 text-white' :
              'bg-white border-gray-300 text-gray-400'
            ]"
            @click="currentStep = index"
          >
            <span v-if="index < currentStep">✓</span>
            <span v-else>{{ index + 1 }}</span>
          </div>
          <span class="text-xs mt-2 font-medium hidden md:block" :class="index === currentStep ? 'text-zinc-800 font-bold' : 'text-gray-500'">
            {{ step }}
          </span>
        </div>
        <div v-if="index < steps.length - 1" class="flex-1 h-px bg-gray-300 mx-4 mt-[-20px]"></div>
      </div>
    </div>

    <main class="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">

      <!-- Section Gauche : Contenu dynamique selon l'étape -->
      <section class="lg:col-span-2 space-y-6">

        <!-- ÉTAPE 0 : Ma sélection -->
        <div v-if="currentStep === 0" class="bg-white rounded-3xl border border-gray-200 p-6 shadow-sm">
          <h3 class="text-xl font-bold mb-6">Choisissez vos dates et voyageurs</h3>

          <div class="space-y-6">
            <div>
              <label class="block text-sm font-bold mb-2">Date d'arrivée</label>
              <input type="date" class="w-full border rounded-xl p-3 text-sm focus:ring-2 ring-zinc-500 outline-none" />
            </div>

            <div>
              <label class="block text-sm font-bold mb-2">Date de départ</label>
              <input type="date" class="w-full border rounded-xl p-3 text-sm focus:ring-2 ring-zinc-500 outline-none" />
            </div>

            <div>
              <label class="block text-sm font-bold mb-2">Nombre de chambres</label>
              <select class="w-full border rounded-xl p-3 text-sm focus:ring-2 ring-zinc-500 outline-none">
                <option>1 chambre</option>
                <option>2 chambres</option>
                <option>3 chambres</option>
              </select>
            </div>

            <div>
              <label class="block text-sm font-bold mb-2">Nombre d'adultes</label>
              <select class="w-full border rounded-xl p-3 text-sm focus:ring-2 ring-zinc-500 outline-none">
                <option>1 adulte</option>
                <option>2 adultes</option>
                <option>3 adultes</option>
                <option>4 adultes</option>
              </select>
            </div>
          </div>
        </div>

        <!-- ÉTAPE 1 : Informations -->
        <div v-if="currentStep === 1" class="bg-white rounded-3xl border border-gray-200 p-6 shadow-sm">
          <div class="flex flex-col md:flex-row gap-6">
            <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=300"
                 alt="Hôtel" class="w-full md:w-48 h-48 object-cover rounded-2xl" />
            <div>
              <h2 class="text-xl font-bold">Hôtel Sofitel Ivoire</h2>
              <p class="text-gray-500 text-sm flex items-center gap-1">
                <i class='bx bx-map-pin'></i> Avenue Hassan II, Cocody, Abidjan
              </p>
              <div class="flex items-center mt-2 text-yellow-500">
                <span>★★★★☆</span>
                <span class="text-gray-400 text-xs ml-2">4.5 (58 avis)</span>
              </div>
              <div class="mt-4 grid grid-cols-6 gap-2 opacity-60">
                 <div class="p-2 border rounded-lg flex justify-center"><i class='bx bx-swim bx-sm'></i></div>
                 <div class="p-2 border rounded-lg flex justify-center"><i class='bx bx-home bx-sm'></i></div>
                 <div class="p-2 border rounded-lg flex justify-center"><i class='bx bx-coffee bx-sm'></i></div>
                 <div class="p-2 border rounded-lg flex justify-center"><i class='bx bx-drink bx-sm'></i></div>
                 <div class="p-2 border rounded-lg flex justify-center"><i class='bx bx-accessibility bx-sm'></i></div>
                 <div class="p-2 border rounded-lg flex justify-center"><i class='bx bx-wifi bx-sm'></i></div>
              </div>
            </div>
          </div>

          <div class="mt-6">
            <h3 class="font-bold mb-2 text-sm">À propos</h3>
            <p class="text-xs text-gray-500 leading-relaxed">
              Pour vous faire mieux connaître d'où vient l'erreur de ceux qui blâment la volupté...
              (Lorem ipsum dolor sit amet, consectetur adipiscing elit).
            </p>
          </div>

          <hr class="my-8 border-gray-100" />

          <div>
            <h3 class="font-bold mb-6">Saisissez vos informations</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label class="block text-xs font-bold mb-2">Prénom <span class="text-red-500">*</span></label>
                <div class="relative">
                  <input v-model="form.firstName" type="text" class="w-full border rounded-xl p-3 text-sm focus:ring-2 ring-zinc-500 outline-none" />
                  <i class='bx bx-check-circle absolute right-3 top-3 text-green-500'></i>
                </div>
              </div>
              <div>
                <label class="block text-xs font-bold mb-2">Nom <span class="text-red-500">*</span></label>
                <div class="relative">
                  <input v-model="form.lastName" type="text" class="w-full border rounded-xl p-3 text-sm focus:ring-2 ring-zinc-500 outline-none" />
                  <i class='bx bx-check-circle absolute right-3 top-3 text-green-500'></i>
                </div>
              </div>
              <div class="md:col-span-1">
                <label class="block text-xs font-bold mb-2">Adresse mail <span class="text-red-500">*</span></label>
                <div class="relative">
                  <input v-model="form.email" type="email" class="w-full border rounded-xl p-3 text-sm focus:ring-2 ring-zinc-500 outline-none" />
                  <i class='bx bx-check-circle absolute right-3 top-3 text-green-500'></i>
                </div>
              </div>
              <div>
                <label class="block text-xs font-bold mb-2">Numéro de téléphone <span class="text-red-500">*</span></label>
                <div class="flex gap-2">
                  <div class="border rounded-xl px-3 py-3 text-sm bg-gray-50 flex items-center">+225 <i class='bx bx-chevron-down bx-xs ml-1'></i></div>
                  <div class="relative flex-1">
                    <input v-model="form.phone" type="text" class="w-full border rounded-xl p-3 text-sm focus:ring-2 ring-zinc-500 outline-none" />
                    <i class='bx bx-check-circle absolute right-3 top-3 text-green-500'></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr class="my-8 border-gray-100" />

          <div class="space-y-6">
            <h3 class="font-bold">Options à ajouter</h3>
            <div v-for="i in 3" :key="i" class="flex items-start gap-4 p-2">
              <input type="checkbox" class="mt-1 w-4 h-4 accent-zinc-800" />
              <div class="flex-1">
                <p class="text-sm font-bold">Je souhaite profiter de la navette aéroport</p>
                <p class="text-xs text-gray-400 mt-1">Nous ferons part de votre intérêt à l'établissement pour qu'il puisse vous donner plus de renseignements.</p>
              </div>
              <div class="text-xl grayscale"><i class='bx bx-plane-alt'></i></div>
            </div>
          </div>
        </div>

        <!-- ÉTAPE 2 : Paiement avec Carte Bancaire, Wave et Orange Money -->
        <div v-if="currentStep === 2" class="bg-white rounded-3xl border border-gray-200 p-6 shadow-sm">
          <h3 class="text-xl font-bold mb-6">Mode de paiement</h3>

          <!-- Sélection du mode de paiement -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <button
              @click="paymentMethod = 'card'"
              :class="[
                'p-4 rounded-xl border-2 transition-all flex items-center justify-center gap-3',
                paymentMethod === 'card' ? 'border-zinc-800 bg-zinc-50' : 'border-gray-200 hover:border-gray-300'
              ]"
            >
              <i class='bx bx-credit-card bx-lg'></i>
              <span class="font-bold text-sm">Carte Bancaire</span>
            </button>

            <button
              @click="paymentMethod = 'wave'"
              :class="[
                'p-4 rounded-xl border-2 transition-all flex items-center justify-center gap-3',
                paymentMethod === 'wave' ? 'border-orange-500 bg-orange-50' : 'border-gray-200 hover:border-gray-300'
              ]"
            >
              <i class='bx bx-money bx-lg text-orange-500'></i>
              <span class="font-bold text-sm">Wave</span>
            </button>

            <button
              @click="paymentMethod = 'orange'"
              :class="[
                'p-4 rounded-xl border-2 transition-all flex items-center justify-center gap-3',
                paymentMethod === 'orange' ? 'border-orange-600 bg-orange-50' : 'border-gray-200 hover:border-gray-300'
              ]"
            >
              <i class='bx bx-phone bx-lg text-orange-600'></i>
              <span class="font-bold text-sm">Orange Money</span>
            </button>
          </div>

          <!-- Formulaire Carte Bancaire -->
          <div v-if="paymentMethod === 'card'" class="space-y-6">
            <div>
              <label class="block text-sm font-bold mb-2">Nom sur la carte</label>
              <input
                v-model="cardPayment.cardName"
                type="text"
                placeholder="Jean Dupont"
                class="w-full border rounded-xl p-3 text-sm focus:ring-2 ring-zinc-500 outline-none"
              />
            </div>

            <div>
              <label class="block text-sm font-bold mb-2">Numéro de carte</label>
              <input
                v-model="cardPayment.cardNumber"
                type="text"
                placeholder="1234 5678 9012 3456"
                class="w-full border rounded-xl p-3 text-sm focus:ring-2 ring-zinc-500 outline-none"
              />
            </div>

            <div class="grid grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-bold mb-2">Date d'expiration</label>
                <input
                  v-model="cardPayment.expiryDate"
                  type="text"
                  placeholder="MM/AA"
                  class="w-full border rounded-xl p-3 text-sm focus:ring-2 ring-zinc-500 outline-none"
                />
              </div>
              <div>
                <label class="block text-sm font-bold mb-2">CVV</label>
                <input
                  v-model="cardPayment.cvv"
                  type="password"
                  placeholder="123"
                  class="w-full border rounded-xl p-3 text-sm focus:ring-2 ring-zinc-500 outline-none"
                />
              </div>
            </div>

            <div class="flex items-center gap-3 p-4 bg-blue-50 rounded-xl">
              <i class='bx bx-lock-alt bx-sm text-blue-600'></i>
              <p class="text-xs text-blue-800">Paiement 100% sécurisé. Vos informations bancaires sont cryptées.</p>
            </div>
          </div>

          <!-- Formulaire Wave -->
          <div v-if="paymentMethod === 'wave'" class="space-y-6">
            <div class="flex items-center gap-3 p-4 bg-orange-50 rounded-xl mb-6">
              <i class='bx bx-money bx-lg text-orange-500'></i>
              <div>
                <p class="text-sm font-bold text-orange-800">Paiement par Wave</p>
                <p class="text-xs text-orange-600">Vous recevrez un code OTP sur votre téléphone Wave</p>
              </div>
            </div>

            <div>
              <label class="block text-sm font-bold mb-2">Numéro Wave</label>
              <div class="flex gap-3">
                <div class="flex-1">
                  <input
                    v-model="wavePayment.phoneNumber"
                    type="tel"
                    placeholder="0707070707"
                    class="w-full border rounded-xl p-3 text-sm focus:ring-2 ring-orange-500 outline-none"
                  />
                </div>
                <button
                  @click="sendWaveOTP"
                  :disabled="!wavePayment.phoneNumber"
                  :class="[
                    'px-6 rounded-xl font-bold transition',
                    wavePayment.phoneNumber ? 'bg-orange-500 text-white hover:bg-orange-600' : 'bg-gray-300 cursor-not-allowed'
                  ]"
                >
                  Envoyer code
                </button>
              </div>
            </div>

            <div v-if="wavePayment.otpSent">
              <label class="block text-sm font-bold mb-2">Code OTP</label>
              <div class="flex gap-3">
                <div class="flex-1">
                  <input
                    v-model="wavePayment.otpCode"
                    type="text"
                    placeholder="123456"
                    class="w-full border rounded-xl p-3 text-sm focus:ring-2 ring-orange-500 outline-none text-center text-2xl tracking-widest"
                    maxlength="6"
                  />
                </div>
                <button
                  @click="sendWaveOTP"
                  class="px-4 rounded-xl text-orange-500 hover:text-orange-600 text-sm font-bold"
                >
                  Renvoyer
                </button>
              </div>
            </div>

            <div class="flex items-center gap-3 p-4 bg-green-50 rounded-xl">
              <i class='bx bx-check-shield bx-sm text-green-600'></i>
              <p class="text-xs text-green-800">Paiement sécurisé via Wave. Aucun frais supplémentaire.</p>
            </div>
          </div>

          <!-- Formulaire Orange Money -->
          <div v-if="paymentMethod === 'orange'" class="space-y-6">
            <div class="flex items-center gap-3 p-4 bg-orange-50 rounded-xl mb-6">
              <i class='bx bx-phone bx-lg text-orange-600'></i>
              <div>
                <p class="text-sm font-bold text-orange-800">Paiement par Orange Money</p>
                <p class="text-xs text-orange-600">Vous recevrez un code OTP sur votre téléphone Orange Money</p>
              </div>
            </div>

            <div>
              <label class="block text-sm font-bold mb-2">Numéro Orange Money</label>
              <div class="flex gap-3">
                <div class="flex-1">
                  <input
                    v-model="orangePayment.phoneNumber"
                    type="tel"
                    placeholder="0707070707"
                    class="w-full border rounded-xl p-3 text-sm focus:ring-2 ring-orange-600 outline-none"
                  />
                </div>
                <button
                  @click="sendOrangeOTP"
                  :disabled="!orangePayment.phoneNumber"
                  :class="[
                    'px-6 rounded-xl font-bold transition',
                    orangePayment.phoneNumber ? 'bg-orange-600 text-white hover:bg-orange-700' : 'bg-gray-300 cursor-not-allowed'
                  ]"
                >
                  Envoyer code
                </button>
              </div>
            </div>

            <div v-if="orangePayment.otpSent">
              <label class="block text-sm font-bold mb-2">Code OTP</label>
              <div class="flex gap-3">
                <div class="flex-1">
                  <input
                    v-model="orangePayment.otpCode"
                    type="text"
                    placeholder="123456"
                    class="w-full border rounded-xl p-3 text-sm focus:ring-2 ring-orange-600 outline-none text-center text-2xl tracking-widest"
                    maxlength="6"
                  />
                </div>
                <button
                  @click="sendOrangeOTP"
                  class="px-4 rounded-xl text-orange-600 hover:text-orange-700 text-sm font-bold"
                >
                  Renvoyer
                </button>
              </div>
            </div>

            <div class="flex items-center gap-3 p-4 bg-green-50 rounded-xl">
              <i class='bx bx-check-shield bx-sm text-green-600'></i>
              <p class="text-xs text-green-800">Paiement sécurisé via Orange Money. Aucun frais supplémentaire.</p>
            </div>
          </div>
        </div>

        <!-- ÉTAPE 3 : Confirmation avec QR Code -->
        <div v-if="currentStep === 3" class="bg-white rounded-3xl border border-gray-200 p-6 shadow-sm text-center">
          <div class="mb-6">
            <i class='bx bx-check-circle bx-lg text-green-500' style="font-size: 64px;"></i>
          </div>
          <h3 class="text-2xl font-bold mb-4">Réservation confirmée !</h3>
          <p class="text-gray-600 mb-6">
            Merci {{ form.firstName }} {{ form.lastName }}, votre réservation a bien été prise en compte.<br>
            Un email de confirmation a été envoyé à <strong>{{ form.email }}</strong>.
          </p>

          <div class="bg-gray-50 p-4 rounded-xl text-left mb-6">
            <p class="text-sm font-bold mb-2">Détails de la réservation :</p>
            <p class="text-xs text-gray-600">✓ Hôtel Sofitel Ivoire</p>
            <p class="text-xs text-gray-600">✓ 2 nuits (27-29 Janvier 2026)</p>
            <p class="text-xs text-gray-600">✓ 1 chambre pour 1 adulte</p>
            <p class="text-xs text-gray-600">✓ Montant total : XOF 86.500</p>
            <p class="text-xs text-gray-600 mt-2">
              ✓ Paiement par :
              <strong>
                {{ paymentMethod === 'card' ? 'Carte Bancaire' : paymentMethod === 'wave' ? 'Wave' : 'Orange Money' }}
              </strong>
            </p>
            <p class="text-xs text-gray-600 mt-2">
              ✓ Numéro de réservation : <strong class="text-blue-600">{{ reservationId }}</strong>
            </p>
            <p class="text-xs text-gray-600">
              ✓ Date de réservation : <strong>{{ reservationDate }}</strong>
            </p>
          </div>

          <!-- QR CODE SECTION -->
          <div class="mb-6 p-6 bg-white rounded-xl border-2 border-dashed border-gray-300">
            <div class="flex flex-col items-center justify-center">
              <div class="relative mb-4">
                <!-- QR Code Container -->
                <div class="w-48 h-48 bg-white border-2 border-gray-200 rounded-xl flex items-center justify-center shadow-lg">
                  <!-- QR Code SVG -->
                  <svg width="180" height="180" viewBox="0 0 180 180" xmlns="http://www.w3.org/2000/svg">
                    <!-- Position Patterns -->
                    <rect x="10" y="10" width="40" height="40" fill="black" rx="4"/>
                    <rect x="14" y="14" width="32" height="32" fill="white" rx="2"/>
                    <rect x="18" y="18" width="24" height="24" fill="black" rx="1"/>

                    <rect x="130" y="10" width="40" height="40" fill="black" rx="4"/>
                    <rect x="134" y="14" width="32" height="32" fill="white" rx="2"/>
                    <rect x="138" y="18" width="24" height="24" fill="black" rx="1"/>

                    <rect x="10" y="130" width="40" height="40" fill="black" rx="4"/>
                    <rect x="14" y="134" width="32" height="32" fill="white" rx="2"/>
                    <rect x="18" y="138" width="24" height="24" fill="black" rx="1"/>

                    <!-- Data blocks representing reservation info -->
                    <g fill="black">
                      <rect x="60" y="10" width="10" height="10"/>
                      <rect x="80" y="10" width="10" height="10"/>
                      <rect x="100" y="10" width="10" height="10"/>
                      <rect x="120" y="10" width="10" height="10"/>

                      <rect x="60" y="30" width="10" height="10"/>
                      <rect x="90" y="30" width="10" height="10"/>
                      <rect x="110" y="30" width="10" height="10"/>
                      <rect x="120" y="30" width="10" height="10"/>

                      <rect x="10" y="60" width="10" height="10"/>
                      <rect x="30" y="60" width="10" height="10"/>
                      <rect x="50" y="60" width="10" height="10"/>
                      <rect x="70" y="60" width="10" height="10"/>
                      <rect x="100" y="60" width="10" height="10"/>
                      <rect x="120" y="60" width="10" height="10"/>

                      <rect x="10" y="80" width="10" height="10"/>
                      <rect x="40" y="80" width="10" height="10"/>
                      <rect x="60" y="80" width="10" height="10"/>
                      <rect x="80" y="80" width="10" height="10"/>
                      <rect x="110" y="80" width="10" height="10"/>
                      <rect x="140" y="80" width="10" height="10"/>

                      <rect x="30" y="100" width="10" height="10"/>
                      <rect x="50" y="100" width="10" height="10"/>
                      <rect x="70" y="100" width="10" height="10"/>
                      <rect x="90" y="100" width="10" height="10"/>
                      <rect x="110" y="100" width="10" height="10"/>
                      <rect x="140" y="100" width="10" height="10"/>

                      <rect x="10" y="110" width="10" height="10"/>
                      <rect x="60" y="110" width="10" height="10"/>
                      <rect x="80" y="110" width="10" height="10"/>
                      <rect x="120" y="110" width="10" height="10"/>
                      <rect x="150" y="110" width="10" height="10"/>

                      <rect x="60" y="130" width="10" height="10"/>
                      <rect x="80" y="130" width="10" height="10"/>
                      <rect x="100" y="130" width="10" height="10"/>
                      <rect x="120" y="130" width="10" height="10"/>
                      <rect x="150" y="130" width="10" height="10"/>

                      <rect x="60" y="150" width="10" height="10"/>
                      <rect x="90" y="150" width="10" height="10"/>
                      <rect x="110" y="150" width="10" height="10"/>
                      <rect x="130" y="150" width="10" height="10"/>

                      <rect x="30" y="160" width="10" height="10"/>
                      <rect x="50" y="160" width="10" height="10"/>
                      <rect x="70" y="160" width="10" height="10"/>
                      <rect x="100" y="160" width="10" height="10"/>
                      <rect x="120" y="160" width="10" height="10"/>
                      <rect x="150" y="160" width="10" height="10"/>
                    </g>
                  </svg>
                </div>
              </div>
              <div class="text-center">
                <p class="text-xs font-mono text-gray-600 mb-1">{{ reservationId }}</p>
                <div class="flex items-center justify-center gap-2 text-xs text-gray-500">
                  <i class='bx bx-qr-scan'></i>
                  <span>Scannez ce code QR pour accéder à votre réservation</span>
                </div>
                <p class="text-xs text-green-600 mt-2">
                  <i class='bx bx-download'></i> Ce code sera également envoyé par email
                </p>
              </div>
            </div>
          </div>

          <div class="flex gap-4">
            <button
              @click="downloadInvoice"
              class="flex-1 bg-green-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-green-700 transition flex items-center justify-center gap-2"
            >
              <i class='bx bx-download'></i>
              Télécharger la facture
            </button>
            <button
              @click="downloadInvoice"
              class="flex-1 bg-blue-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition flex items-center justify-center gap-2"
            >
              <i class='bx bx-qr'></i>
              Enregistrer le QR code
            </button>
          </div>
          <p class="text-xs text-gray-400 mt-4">
            <i class='bx bx-time-five'></i> Un email de confirmation avec tous les détails vous a été envoyé
          </p>
        </div>

      </section>

      <!-- Sidebar Droite : Résumé (toujours visible) -->
      <aside class="lg:col-span-1">
        <div class="bg-white rounded-3xl border border-gray-200 p-6 shadow-sm sticky top-8">
          <h3 class="font-bold text-lg mb-6">Résumé de la réservation</h3>

          <div class="flex justify-between mb-6">
            <div class="text-sm">
              <p class="text-gray-400">Arrivée</p>
              <p class="font-bold">Mar. 27 Janvier 2026</p>
              <p class="text-xs">12h00</p>
            </div>
            <div class="text-sm text-right">
              <p class="text-gray-400">Départ</p>
              <p class="font-bold">Jeu. 29 Janvier 2026</p>
              <p class="text-xs">14h00</p>
            </div>
          </div>

          <p class="text-sm mb-6">Durée totale du séjour: <br> <span class="font-bold">2 nuits</span></p>

          <hr class="mb-6" />

          <div class="mb-6">
            <p class="text-xs text-gray-400 uppercase tracking-wider">Vous avez sélectionné</p>
            <p class="font-bold text-sm">1 chambre pour 1 adulte</p>
            <button class="text-blue-500 text-xs underline mt-1" @click="currentStep = 0">Modifier la sélection</button>
          </div>

          <hr class="mb-6" />

          <div class="space-y-3 mb-8">
            <h4 class="font-bold text-sm mb-4">Récapitulatif du montant</h4>
            <div class="flex justify-between text-sm">
              <span>Tarif initial</span>
              <span class="font-bold">XOF 85.000</span>
            </div>
            <div class="flex justify-between text-sm text-gray-400">
              <span>Réduction</span>
              <span>XOF 0.000</span>
            </div>
            <div class="flex justify-between text-sm">
              <span>Taxe</span>
              <span class="font-bold">XOF 1.500</span>
            </div>
            <div class="flex justify-between text-lg font-bold pt-4 border-t">
              <span>Montant total</span>
              <span>XOF 86.500</span>
            </div>
          </div>

          <!-- Boutons de navigation dynamiques -->
          <div class="space-y-3">
            <button
              v-if="currentStep < steps.length - 1"
              @click="nextStep"
              :disabled="(currentStep === 1 && !isFormValid()) || (currentStep === 2 && !isPaymentValid())"
              :class="[
                'w-full py-4 rounded-xl font-bold transition',
                ((currentStep === 1 && !isFormValid()) || (currentStep === 2 && !isPaymentValid()))
                  ? 'bg-gray-300 cursor-not-allowed'
                  : 'bg-zinc-800 text-white hover:bg-zinc-700'
              ]"
            >
              {{ currentStep === steps.length - 2 ? 'Confirmer et payer' : 'Continuer' }}
            </button>

            <button
              v-if="currentStep === steps.length - 1"
              @click="confirmReservation"
              class="w-full bg-green-600 text-white py-4 rounded-xl font-bold hover:bg-green-700 transition"
            >
              Terminer            </button>

            <button
              v-if="currentStep > 0 && currentStep < steps.length - 1"
              @click="prevStep"
              class="w-full bg-gray-200 text-gray-800 py-4 rounded-xl font-bold hover:bg-gray-300 transition"
            >
              Retour
            </button>
          </div>
        </div>
      </aside>

    </main>
  </div>
</template>
<script setup>
import { ref } from 'vue'

// Données réactives pour le formulaire
const form = ref({
  firstName: 'Sekongo',
  lastName: 'Daniel',
  email: 'sekongodaniel@gmail.com',
  phone: '0707711501',
  options: []
})

const steps = ['Ma selection', 'Informations', 'Paiement', 'Confirmation']
const currentStep = ref(0) // Index pour suivre l'étape actuelle (0 = Ma selection)

// Méthode de paiement sélectionnée
const paymentMethod = ref('card') // 'card', 'wave', ou 'orange'

// Données pour la carte bancaire
const cardPayment = ref({
  cardName: '',
  cardNumber: '',
  expiryDate: '',
  cvv: ''
})

// Données pour Wave
const wavePayment = ref({
  phoneNumber: '',
  otpCode: '',
  otpSent: false
})

// Données pour Orange Money
const orangePayment = ref({
  phoneNumber: '',
  otpCode: '',
  otpSent: false
})

// Données pour le QR code
const reservationId = ref('SOF-' + Math.random().toString(36).substring(2, 10).toUpperCase())
const reservationDate = ref(new Date().toLocaleDateString('fr-FR'))

// Fonction pour passer à l'étape suivante
const nextStep = () => {
  if (currentStep.value < steps.length - 1) {
    currentStep.value++
  }
}

// Fonction pour revenir à l'étape précédente
const prevStep = () => {
  if (currentStep.value > 0) {
    currentStep.value--
  }
}

// Fonction pour confirmer la réservation
const confirmReservation = () => {
  let paymentMethodName = ''
  if (paymentMethod.value === 'card') paymentMethodName = 'Carte Bancaire'
  else if (paymentMethod.value === 'wave') paymentMethodName = 'Wave'
  else paymentMethodName = 'Orange Money'

  alert(`Réservation confirmée ! Merci pour votre confiance.\nPaiement effectué par : ${paymentMethodName}`)
  // Ici vous pouvez ajouter la logique d'envoi des données
}

// Vérifier si le formulaire est valide pour l'étape 1 (Informations)
const isFormValid = () => {
  return form.value.firstName && form.value.lastName && form.value.email && form.value.phone
}

// Vérifier si le paiement est valide
const isPaymentValid = () => {
  if (paymentMethod.value === 'card') {
    return cardPayment.value.cardName &&
           cardPayment.value.cardNumber &&
           cardPayment.value.expiryDate &&
           cardPayment.value.cvv
  } else if (paymentMethod.value === 'wave') {
    return wavePayment.value.phoneNumber && wavePayment.value.otpCode
  } else {
    return orangePayment.value.phoneNumber && orangePayment.value.otpCode
  }
}

// Envoyer le code OTP pour Wave
const sendWaveOTP = () => {
  if (wavePayment.value.phoneNumber) {
    wavePayment.value.otpSent = true
    alert(`Code OTP envoyé au ${wavePayment.value.phoneNumber} (Wave)`)
  } else {
    alert('Veuillez entrer votre numéro Wave')
  }
}

// Envoyer le code OTP pour Orange Money
const sendOrangeOTP = () => {
  if (orangePayment.value.phoneNumber) {
    orangePayment.value.otpSent = true
    alert(`Code OTP envoyé au ${orangePayment.value.phoneNumber} (Orange Money)`)
  } else {
    alert('Veuillez entrer votre numéro Orange Money')
  }
}

// Fonction pour télécharger la facture
const downloadInvoice = () => {
  alert('Téléchargement de la facture en cours...')
  // Ici vous pouvez ajouter la logique de téléchargement PDF
}
</script>

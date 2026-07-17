<template>
  <div class="space-y-6 text-gray-600">

    <!-- ========================================== -->
    <!-- BARRE SUPÉRIEURE : FILTRES & RECHERCHE       -->
    <!-- ========================================== -->
    <div class="flex flex-col sm:flex-row justify-between sm:items-center gap-4 text-xs font-semibold">

      <!-- Filtres Gauche (Date & Statut) -->
      <div class="flex flex-wrap items-center gap-3">
        <!-- Date Picker (Simulé) -->
        <button class="bg-neutral-800 text-white px-4 py-2.5 rounded-xl flex items-center gap-2 shadow-sm hover:bg-neutral-700 transition-colors">
          <i class="bx bx-calendar text-sm"></i>
          <span>5 Juin - 16 Juin 2026</span>
          <i class="bx bx-chevron-down text-xs ml-1"></i>
        </button>

        <!-- Status Filter -->
        <div class="relative">
          <select class="appearance-none bg-gray-50 border border-gray-200 rounded-xl pl-9 pr-8 py-2.5 text-gray-700 font-bold outline-none cursor-pointer focus:border-gray-400 transition-colors">
            <option>All Status</option>
            <option>Paid</option>
            <option>Unpaid</option>
          </select>
          <i class="bx bx-filter-alt absolute left-3 top-3 text-gray-400 text-sm"></i>
          <i class="bx bx-chevron-down absolute right-3 top-3 text-gray-400 pointer-events-none"></i>
        </div>
      </div>

      <!-- Recherche & Configuration Droite -->
      <div class="flex items-center gap-2">
        <div class="relative">
          <i class="bx bx-search absolute left-3 top-2.5 text-gray-400 text-sm"></i>
          <input
            type="text"
            placeholder="Search name, room, etc"
            class="bg-gray-50 border border-gray-200 rounded-xl pl-9 pr-4 py-2 w-64 focus:outline-none focus:border-gray-400 transition-colors text-xs"
          />
        </div>
        <!-- Bouton Filtres Avancés -->
        <button class="bg-neutral-900 hover:bg-neutral-800 text-white p-2.5 rounded-xl flex items-center justify-center transition-colors">
          <i class="bx bx-sliders text-sm"></i>
        </button>
      </div>

    </div>

    <!-- ========================================== -->
    <!-- TABLEAU FINANCIER PRINCIPAL                 -->
    <!-- ========================================== -->
    <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <div class="overflow-x-auto">
        <table class="w-full text-left text-xs whitespace-nowrap">
          <thead class="bg-gray-50/70 text-gray-500 font-bold border-b border-gray-100">
            <tr>
              <th class="px-6 py-4 cursor-pointer hover:bg-gray-100/50 transition-colors">
                Nom du client <i class="bx bx-up-arrow-alt ml-0.5 text-gray-400"></i>
              </th>
              <th class="px-6 py-4 cursor-pointer hover:bg-gray-100/50 transition-colors">
                ID de reservation <i class="bx bx-up-arrow-alt ml-0.5 text-gray-400"></i>
              </th>
              <th class="px-6 py-4 cursor-pointer hover:bg-gray-100/50 transition-colors">
                Chambre <i class="bx bx-up-arrow-alt ml-0.5 text-gray-400"></i>
              </th>
              <th class="px-6 py-4 cursor-pointer hover:bg-gray-100/50 transition-colors">
                Prix (par nuit) <i class="bx bx-up-arrow-alt ml-0.5 text-gray-400"></i>
              </th>
              <th class="px-6 py-4 cursor-pointer hover:bg-gray-100/50 transition-colors">
                Duree <i class="bx bx-up-arrow-alt ml-0.5 text-gray-400"></i>
              </th>
              <th class="px-6 py-4 cursor-pointer hover:bg-gray-100/50 transition-colors">
                Total <i class="bx bx-up-arrow-alt ml-0.5 text-gray-400"></i>
              </th>
              <th class="px-6 py-4 cursor-pointer hover:bg-gray-100/50 transition-colors">
                Status <i class="bx bx-up-arrow-alt ml-0.5 text-gray-400"></i>
              </th>
              <th class="px-6 py-4 text-center">
                Action <i class="bx bx-up-arrow-alt ml-0.5 text-transparent"></i>
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-50">
            <tr v-for="row in financeData" :key="row.bookingId" class="hover:bg-gray-50/40 transition-colors">
              <!-- Nom du client -->
              <td class="px-6 py-4 font-bold text-gray-800">{{ row.clientName }}</td>

              <!-- ID de Réservation -->
              <td class="px-6 py-4 text-gray-500 font-mono text-[11px]">{{ row.bookingId }}</td>

              <!-- Type et Numéro de Chambre -->
              <td class="px-6 py-4 font-medium text-gray-700">{{ row.roomType }}</td>

              <!-- Prix par nuit -->
              <td class="px-6 py-4 font-bold text-gray-900">${{ row.pricePerNight }}</td>

              <!-- Durée du séjour -->
              <td class="px-6 py-4 text-gray-600 font-medium">{{ row.duration }}</td>

              <!-- Total Facturé -->
              <td class="px-6 py-4 font-black text-gray-900">${{ row.totalPrice }}</td>

              <!-- Statut du paiement (Badge de couleur adapté) -->
              <td class="px-6 py-4">
                <span :class="[
                  'px-2 py-0.5 rounded-md text-[10px] font-black tracking-wide inline-flex items-center gap-1 uppercase',
                  row.status === 'Paid' ? 'bg-lime-100 text-lime-800' : 'bg-rose-100 text-rose-700'
                ]">
                  <span class="w-1 h-1 rounded-full" :class="row.status === 'Paid' ? 'bg-lime-600' : 'bg-rose-500'"></span>
                  {{ row.status }}
                </span>
              </td>

              <!-- Boutons d'Action (Voir / Télécharger) -->
              <td class="px-6 py-4">
                <div class="flex items-center justify-center gap-3">
                  <button class="p-1 text-gray-400 hover:text-gray-700 transition-colors" title="Voir les détails">
                    <i class="bx bx-show text-lg"></i>
                  </button>
                  <button class="bg-neutral-900 hover:bg-neutral-800 text-white font-bold px-3 py-1.5 rounded-lg flex items-center gap-1.5 text-[11px] shadow-sm transition-colors">
                    <i class="bx bx-download text-xs"></i>
                    Download
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- ========================================== -->
    <!-- PIED DE TABLEAU : STATS & PAGINATION         -->
    <!-- ========================================== -->
    <div class="flex flex-col sm:flex-row justify-between sm:items-center gap-4 text-xs font-semibold text-gray-400 pt-2">
      <span>Showing 1-12 of 535</span>

      <div class="flex items-center gap-1">
        <!-- Flèche Gauche -->
        <button class="w-7 h-7 flex items-center justify-center rounded-lg border border-gray-100 bg-white text-gray-500 hover:bg-gray-50 transition-colors">
          <i class="bx bx-chevron-left text-base"></i>
        </button>

        <!-- Pages -->
        <button class="w-7 h-7 flex items-center justify-center rounded-lg bg-neutral-900 text-white font-bold">1</button>
        <button class="w-7 h-7 flex items-center justify-center rounded-lg bg-white text-gray-600 hover:bg-gray-50 border border-transparent hover:border-gray-100 transition-colors">2</button>
        <button class="w-7 h-7 flex items-center justify-center rounded-lg bg-white text-gray-600 hover:bg-gray-50 border border-transparent hover:border-gray-100 transition-colors">3</button>
        <span class="px-1 text-gray-300">...</span>
        <button class="w-7 h-7 flex items-center justify-center rounded-lg bg-white text-gray-600 hover:bg-gray-50 border border-transparent hover:border-gray-100 transition-colors">8</button>

        <!-- Flèche Droite -->
        <button class="w-7 h-7 flex items-center justify-center rounded-lg border border-gray-100 bg-white text-gray-500 hover:bg-gray-50 transition-colors">
          <i class="bx bx-chevron-right text-base"></i>
        </button>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface FinanceRow {
  clientName: string;
  bookingId: string;
  roomType: string;
  pricePerNight: number;
  duration: string;
  totalPrice: number;
  status: 'Paid' | 'Unpaid';
}

// Données exhaustives extraites de ta capture d'écran image_a6a266.png
const financeData = ref<FinanceRow[]>([
  { clientName: 'Angus Copper', bookingId: 'LG-B00108', roomType: 'Deluxe 101', pricePerNight: 150, duration: '3 nuits', totalPrice: 450, status: 'Paid' },
  { clientName: 'Catherine Lapp', bookingId: 'LG-B00109', roomType: 'Standard 202', pricePerNight: 100, duration: '2 nuits', totalPrice: 200, status: 'Unpaid' },
  { clientName: 'Edgar Irving', bookingId: 'LG-B00110', roomType: 'Suite 303', pricePerNight: 250, duration: '5 nuits', totalPrice: 1250, status: 'Paid' },
  { clientName: 'Gertrude Bale', bookingId: 'LG-B00111', roomType: 'Standard 204', pricePerNight: 100, duration: '1 nuit', totalPrice: 100, status: 'Unpaid' },
  { clientName: 'Ice B. Hand', bookingId: 'LG-B00112', roomType: 'Deluxe 105', pricePerNight: 150, duration: '5 nuits', totalPrice: 750, status: 'Paid' },
  { clientName: 'Sarah Johnson', bookingId: 'LG-B00113', roomType: 'Standard 305', pricePerNight: 100, duration: '2 nuits', totalPrice: 200, status: 'Paid' },
  { clientName: 'Kevin Lee', bookingId: 'LG-B00114', roomType: 'Suite 306', pricePerNight: 250, duration: '3 nuits', totalPrice: 750, status: 'Unpaid' },
  { clientName: 'Laura Martin', bookingId: 'LG-B00115', roomType: 'Deluxe 107', pricePerNight: 150, duration: '1 nuit', totalPrice: 150, status: 'Paid' },
  { clientName: 'Robert King', bookingId: 'LG-B00116', roomType: 'Standard 208', pricePerNight: 100, duration: '2 nuits', totalPrice: 200, status: 'Unpaid' },
  { clientName: 'Olivia White', bookingId: 'LG-B00117', roomType: 'Suite 310', pricePerNight: 250, duration: '5 nuits', totalPrice: 1250, status: 'Paid' },
  { clientName: 'Catherine Lopp', bookingId: 'LG-B00118', roomType: 'Deluxe 110', pricePerNight: 150, duration: '1 nuit', totalPrice: 150, status: 'Paid' },
  { clientName: 'Catherine Lopp', bookingId: 'LG-B00119', roomType: 'Standard 307', pricePerNight: 100, duration: '3 nuits', totalPrice: 300, status: 'Unpaid' }
]);
</script>

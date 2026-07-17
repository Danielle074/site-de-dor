<template>
  <div class="p-1 text-gray-600">

    <!-- ========================================== -->
    <!-- VUE 1 : LISTE DES RÉSERVATIONS (PAR DÉFAUT) -->
    <!-- ========================================== -->
    <div v-if="!selectedGuest" class="space-y-6">
      <div class="flex flex-col sm:flex-row justify-between sm:items-center gap-4 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
        <h2 class="text-lg font-bold text-gray-900">Liste des réservations</h2>
        <div class="flex flex-wrap items-center gap-3 text-xs">
          <div class="relative">
            <i class="bx bx-search absolute left-3 top-2.5 text-gray-400 text-sm"></i>
            <input type="text" placeholder="Search guest, status, etc" class="bg-gray-50 border border-gray-200 rounded-lg pl-9 pr-4 py-2 w-56 focus:outline-none" />
          </div>
          <button class="bg-neutral-900 text-white font-semibold px-4 py-2 rounded-lg flex items-center gap-2">
            <i class="bx bx-plus"></i> Add Booking
          </button>
        </div>
      </div>

      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div class="overflow-x-auto">
          <table class="w-full text-left text-xs whitespace-nowrap">
            <thead class="bg-gray-50 text-gray-500 font-semibold uppercase tracking-wider border-b border-gray-100">
              <tr>
                <th class="px-6 py-4">Guest</th>
                <th class="px-6 py-4">Room</th>
                <th class="px-6 py-4">Request</th>
                <th class="px-6 py-4">Duration</th>
                <th class="px-6 py-4">Check-In & Check-Out</th>
                <th class="px-6 py-4">Status</th>
                <th class="px-6 py-4 text-center">Action</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-50">
              <tr v-for="row in reservations" :key="row.id" class="hover:bg-gray-50/50 transition-colors">
                <!-- Clic sur le nom pour ouvrir le profil -->
                <td class="px-6 py-4.5 cursor-pointer" @click="viewProfile(row)">
                  <div class="flex flex-col group">
                    <span class="font-bold text-gray-900 text-sm leading-tight group-hover:text-neutral-600 group-hover:underline">{{ row.name }}</span>
                    <span class="text-[10px] text-gray-400 font-mono mt-0.5">{{ row.id }}</span>
                  </div>
                </td>
                <td class="px-6 py-4 font-medium text-gray-800">{{ row.room }}</td>
                <td class="px-6 py-4 text-gray-500 italic">{{ row.request }}</td>
                <td class="px-6 py-4 font-medium text-gray-700">{{ row.duration }}</td>
                <td class="px-6 py-4 text-gray-500">{{ row.dates }}</td>
                <td class="px-6 py-4">
                  <span :class="['px-2.5 py-1 rounded-md text-[11px] font-bold tracking-wide', row.status === 'Confirmed' ? 'bg-emerald-50 text-emerald-700' : 'bg-rose-50 text-rose-700']">
                    {{ row.status }}
                  </span>
                </td>
                <td class="px-6 py-4 text-center">
                  <button @click="viewProfile(row)" class="p-1.5 text-gray-400 hover:text-gray-700" title="Voir Profil">
                    <i class="bx bx-show text-lg"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- ========================================== -->
    <!-- VUE 2 : PROFIL CLIENT & DÉTAILS DE RÉSERVATION -->
    <!-- ========================================== -->
    <div v-else class="space-y-6">

      <!-- Fil d'ariane & Header -->
      <div class="flex justify-between items-center bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
        <div class="flex items-center gap-3">
          <button @click="goBack" class="p-2 hover:bg-gray-100 rounded-xl transition-colors">
            <i class="bx bx-arrow-back text-xl text-gray-800"></i>
          </button>
          <div>
            <h1 class="text-xl font-bold text-gray-900">Profil Client</h1>
            <p class="text-[11px] text-gray-400">Reservation <span class="mx-1">/</span> <span class="text-gray-600 font-medium">Guest Profile</span></p>
          </div>
        </div>

        <!-- Admin Profile Top Right -->
        <div class="flex items-center gap-3">
          <div class="text-right hidden sm:block">
            <p class="text-xs font-bold text-gray-900">Jaylon Dorwart</p>
            <p class="text-[10px] text-gray-400">Admin</p>
          </div>
          <div class="w-8 h-8 rounded-full bg-neutral-900"></div>
          <button class="p-2 text-gray-400 hover:text-gray-600"><i class="bx bx-cog text-lg"></i></button>
          <button class="p-2 text-gray-400 hover:text-rose-500 relative">
            <i class="bx bx-bell text-lg"></i>
            <span class="absolute top-2 right-2 w-1.5 h-1.5 bg-rose-500 rounded-full"></span>
          </button>
        </div>
      </div>

      <!-- Grille Principale du Profil -->
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-6">

        <!-- Bloc Gauche : Infos Personnelles -->
        <div class="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-6">
          <div class="flex justify-between items-start">
            <h3 class="text-xs font-bold uppercase tracking-wider text-gray-400">Profile</h3>
            <button class="text-gray-400"><i class="bx bx-dots-horizontal-rounded"></i></button>
          </div>

          <div class="flex items-center gap-4">
            <div class="w-16 h-16 rounded-full bg-neutral-800 flex items-center justify-center text-white text-xl font-bold">
              {{ selectedGuest.name.charAt(0) }}
            </div>
            <div>
              <h2 class="text-lg font-bold text-gray-900">{{ selectedGuest.name }}</h2>
              <p class="text-[11px] text-gray-400 font-mono">G011-987654321</p>
            </div>
          </div>

          <div class="space-y-3 pt-2 text-xs border-t border-gray-50">
            <div class="flex items-center gap-2.5 text-gray-700">
              <i class="bx bx-phone text-base text-gray-400"></i>
              <span>+1 (555) 789-1234</span>
            </div>
            <div class="flex items-center gap-2.5 text-gray-700">
              <i class="bx bx-envelope text-base text-gray-400"></i>
              <span class="lowercase">{{ selectedGuest.name.replace(/\s+/g, '.') }}@example.com</span>
            </div>
          </div>

          <div class="pt-4 border-t border-gray-50">
            <h4 class="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-3">Information personnelle</h4>
            <div class="grid grid-cols-2 gap-4 text-xs">
              <div>
                <p class="text-gray-400 text-[10px]">Date de naissance</p>
                <p class="font-bold text-gray-800 mt-0.5">15 Juin, 1985</p>
              </div>
              <div>
                <p class="text-gray-400 text-[10px]">Genre</p>
                <p class="font-bold text-gray-800 mt-0.5">Masculin</p>
              </div>
              <div>
                <p class="text-gray-400 text-[10px]">Nationalité</p>
                <p class="font-bold text-gray-800 mt-0.5">Américain</p>
              </div>
              <div>
                <p class="text-gray-400 text-[10px]">Numéro CNI</p>
                <p class="font-bold text-gray-800 mt-0.5">A12345678</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Bloc Central : Détails de la Réservation Actuelle -->
        <div class="lg:col-span-2 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between relative">
          <button class="absolute right-6 top-6 text-gray-400"><i class="bx bx-dots-horizontal-rounded"></i></button>

          <div class="space-y-5">
            <div>
              <h3 class="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Détails de la réservation</h3>
              <span class="bg-emerald-50 text-emerald-700 text-[10px] font-bold px-2 py-0.5 rounded-md">✓ Réservation Confirmée</span>
              <h2 class="text-xl font-black text-gray-900 mt-2">Booking ID: {{ selectedGuest.id }}</h2>
              <p class="text-[10px] text-gray-400 mt-0.5">17 Juin, 2026, 9:46 AM</p>
            </div>

            <!-- Grille d'informations de séjour -->
            <div class="grid grid-cols-3 gap-y-4 gap-x-2 text-xs">
              <div>
                <p class="text-gray-400 text-[10px]">Room Type</p>
                <p class="font-bold text-gray-800 mt-0.5">{{ selectedGuest.room.split(' ')[0] }}</p>
              </div>
              <div>
                <p class="text-gray-400 text-[10px]">Room Number</p>
                <p class="font-bold text-gray-800 mt-0.5">{{ selectedGuest.room.split(' ')[1] || '101' }}</p>
              </div>
              <div>
                <p class="text-gray-400 text-[10px]">Price</p>
                <p class="font-bold text-gray-800 mt-0.5">$150<span class="text-gray-400 font-normal text-[10px]">/night</span></p>
              </div>
              <div>
                <p class="text-gray-400 text-[10px]">Guests</p>
                <p class="font-bold text-gray-800 mt-0.5">2 Adults</p>
              </div>
              <div class="col-span-2">
                <p class="text-gray-400 text-[10px]">Requests</p>
                <p class="font-bold text-gray-800 mt-0.5">{{ selectedGuest.request }}</p>
              </div>
              <div>
                <p class="text-gray-400 text-[10px]">Check In</p>
                <p class="font-bold text-gray-800 mt-0.5">June 19, 2026</p>
                <p class="text-[10px] text-gray-400">1:45 PM</p>
              </div>
              <div>
                <p class="text-gray-400 text-[10px]">Check Out</p>
                <p class="font-bold text-gray-800 mt-0.5">June 22, 2026</p>
                <p class="text-[10px] text-gray-400">11:45 AM</p>
              </div>
              <div>
                <p class="text-gray-400 text-[10px]">Duration</p>
                <p class="font-bold text-gray-800 mt-0.5">{{ selectedGuest.duration }}</p>
              </div>
            </div>

            <div class="bg-gray-50/50 p-3 rounded-xl border border-gray-100 text-xs text-gray-600">
              <p class="text-[10px] uppercase font-bold text-gray-400 tracking-wide mb-1">Notes</p>
              Guest requested extra pillows and towels. Ensure room service is available upon arrival.
            </div>

            <!-- Services Additionnels & Extras -->
            <div class="grid grid-cols-3 gap-4 pt-2 text-xs border-t border-gray-50">
              <div>
                <p class="text-gray-400 text-[10px]">Loyalty Program</p>
                <p class="font-bold text-neutral-900 mt-0.5">Platinum Member</p>
              </div>
              <div class="col-span-2">
                <p class="text-gray-400 text-[10px] mb-1">Special Amenities</p>
                <div class="space-y-1 text-[11px] font-medium text-gray-700">
                  <p class="text-emerald-600"><i class="bx bx-check mr-1"></i> Complimentary breakfast</p>
                  <p class="text-emerald-600"><i class="bx bx-check mr-1"></i> Free Wi-Fi</p>
                  <p class="text-emerald-600"><i class="bx bx-check mr-1"></i> Access to gym and pool</p>
                </div>
              </div>
              <div>
                <p class="text-gray-400 text-[10px]">Transportation</p>
                <p class="font-bold text-gray-800 mt-0.5">Airport pickup arranged</p>
              </div>
              <div class="col-span-2">
                <p class="text-gray-400 text-[10px]">Extras</p>
                <p class="font-medium text-gray-400 mt-0.5">-</p>
              </div>
            </div>
          </div>

          <!-- Boutons d'Action Bas de Panneau -->
          <div class="flex justify-end gap-2 mt-6 pt-4 border-t border-gray-50">
            <button class="px-4 py-2 border border-gray-200 hover:bg-gray-50 rounded-xl text-xs font-bold transition-colors">Edit</button>
            <button class="px-4 py-2 bg-rose-50 hover:bg-rose-100 text-rose-600 rounded-xl text-xs font-bold transition-colors">Cancel Booking</button>
          </div>
        </div>

        <!-- Bloc Droit : Résumé Financier et Image de Chambre -->
        <div class="space-y-6">
          <div class="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm space-y-4">
            <div class="flex justify-between items-center text-xs">
              <h4 class="font-bold text-gray-900">Room Info</h4>
              <button class="text-gray-400 text-[11px] hover:underline">View Detail</button>
            </div>

            <!-- Affichage de l'image de la chambre importée -->
            <div class="w-full h-36 rounded-xl overflow-hidden bg-gray-100">
              <img :src="roomMainImg" alt="Room View" class="w-full h-full object-cover" />
            </div>

            <div class="flex justify-between text-gray-500 text-[11px] font-medium border-b border-gray-50 pb-3">
              <span class="flex items-center gap-1"><i class="bx bx-area text-sm"></i> 35 m²</span>
              <span class="flex items-center gap-1"><i class="bx bx-bed text-sm"></i> King Bed</span>
              <span class="flex items-center gap-1"><i class="bx bx-group text-sm"></i> 2 guests</span>
            </div>

            <!-- Price Summary -->
            <div class="space-y-2 text-xs">
              <div class="flex justify-between items-center">
                <h4 class="font-bold text-gray-900">Price Summary</h4>
                <span class="bg-black text-white text-[9px] px-1.5 py-0.5 rounded font-black uppercase tracking-wider">Paid</span>
              </div>
              <div class="space-y-1.5 text-gray-500 font-medium pt-1">
                <div class="flex justify-between"><span>Room and offer</span><span class="text-gray-800 font-bold">$450.00</span></div>
                <div class="flex justify-between"><span>Extras</span><span class="text-gray-800 font-bold">$0.00</span></div>
                <div class="flex justify-between"><span>8% VAT</span><span class="text-gray-800 font-bold">$36.00</span></div>
                <div class="flex justify-between"><span>City Tax</span><span class="text-gray-800 font-bold">$49.50</span></div>
              </div>
              <div class="flex justify-between border-t border-gray-100 pt-3 text-sm">
                <span class="font-bold text-gray-900">Total Price</span>
                <span class="font-black text-gray-900 text-base">$535.50</span>
              </div>
            </div>

            <div class="text-[11px] text-gray-500 leading-relaxed bg-amber-50/40 p-2.5 rounded-xl border border-amber-100/50">
              <span class="font-bold text-gray-700 block mb-0.5">Notes</span>
              Invoice sent to corporate account; payment confirmed by BIG Corporation
            </div>
          </div>
        </div>
      </div>

      <!-- Section Bas : Historique de réservation du client -->
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div class="p-6 flex flex-col sm:flex-row justify-between sm:items-center gap-4 border-b border-gray-50">
          <h3 class="font-bold text-gray-900 text-sm">Historique de réservation</h3>
          <div class="flex gap-2 text-xs">
            <div class="relative">
              <i class="bx bx-search absolute left-3 top-2.5 text-gray-400 text-sm"></i>
              <input type="text" placeholder="Search guest, status, etc" class="bg-gray-50 border border-gray-100 rounded-lg pl-8 pr-4 py-2 focus:outline-none" />
            </div>
          </div>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full text-left text-xs whitespace-nowrap">
            <thead class="bg-gray-50 text-gray-500 font-semibold uppercase tracking-wider">
              <tr>
                <th class="px-6 py-3.5">Image</th>
                <th class="px-6 py-3.5">ID reservation</th>
                <th class="px-6 py-3.5">Date de reservation</th>
                <th class="px-6 py-3.5">Type de chambre</th>
                <th class="px-6 py-3.5">Numéro de chambre</th>
                <th class="px-6 py-3.5">Check-In</th>
                <th class="px-6 py-3.5">Check-Out</th>
                <th class="px-6 py-3.5">Occupants</th>
                <th class="px-6 py-3.5"></th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-50">
              <tr v-for="(history, index) in historyData" :key="index" class="hover:bg-gray-50/30 transition-colors">
                <!-- Cellule Image d'historique importée dynamiquement -->
                <td class="px-6 py-3">
                  <div class="w-14 h-10 rounded-lg overflow-hidden bg-gray-100 border border-gray-100">
                    <img :src="history.img" alt="Room History" class="w-full h-full object-cover" />
                  </div>
                </td>
                <td class="px-6 py-3 font-semibold text-gray-900">{{ history.id }}</td>
                <td class="px-6 py-3">
                  <p class="font-bold text-gray-800">{{ history.bookDate }}</p>
                  <p class="text-[10px] text-gray-400">{{ history.bookTime }}</p>
                </td>
                <td class="px-6 py-3">
                  <span :class="['px-2 py-0.5 rounded-full text-[10px] font-bold uppercase', history.type === 'Deluxe' ? 'bg-lime-100 text-lime-800' : 'bg-amber-100 text-amber-800']">
                    {{ history.type }}
                  </span>
                </td>
                <td class="px-6 py-3 font-medium text-gray-700">{{ history.roomNum }}</td>
                <td class="px-6 py-3">
                  <p class="font-bold text-gray-800">{{ history.ciDate }}</p>
                  <p class="text-[10px] text-gray-400">{{ history.ciTime }}</p>
                </td>
                <td class="px-6 py-3">
                  <p class="font-bold text-gray-800">{{ history.coDate }}</p>
                  <p class="text-[10px] text-gray-400">{{ history.coTime }}</p>
                </td>
                <td class="px-6 py-3 font-medium text-gray-800">{{ history.occupants }}</td>
                <td class="px-6 py-3 text-gray-400"><i class="bx bx-dots-horizontal-rounded cursor-pointer hover:text-gray-600"></i></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// ==========================================
// 🛠️ IMPORTATION DES IMAGES DANS LE SCRIPT
// ==========================================
// Adapte les chemins relatifs '../assets/...' selon l'arborescence réelle de ton projet Vite.
import roomMainImg from '@/assets/images/chambre1.jpg';
import roomThumb1 from '@/assets/images/chambre2.jpg';
import roomThumb2 from '@/assets/images/salon.jpg';

interface Reservation {
  id: string;
  name: string;
  room: string;
  request: string;
  duration: string;
  dates: string;
  status: 'Confirmed' | 'Pending';
}

// État pour savoir quel utilisateur est actuellement sélectionné (null = vue table globale)
const selectedGuest = ref<Reservation | null>(null);

const reservations = ref<Reservation[]>([
  { id: 'LG-B00108', name: 'Angus Copper', room: 'Deluxe 101', request: 'Late Check-Out', duration: '3 nights', dates: 'June 19, 2028 - June 22, 2028', status: 'Confirmed' },
  { id: 'LG-B00109', name: 'Catherine Lapp', room: 'Standard 202', request: 'None', duration: '2 nights', dates: 'June 19, 2028 - June 21, 2028', status: 'Confirmed' },
  { id: 'LG-B00110', name: 'Edgar Irving', room: 'Suite 303', request: 'Extra Pillows', duration: '5 nights', dates: 'June 19, 2028 - June 24, 2028', status: 'Pending' },
  { id: 'LG-B00111', name: 'Gertrude Bale', room: 'Standard 204', request: 'Early Check-In', duration: '1 nights', dates: 'June 19, 2028 - June 20, 2028', status: 'Confirmed' },
  { id: 'LG-B00112', name: 'Ice B. Hand', room: 'Deluxe 105', request: 'Airport Pickup', duration: '4 nights', dates: 'June 19, 2028 - June 23, 2028', status: 'Pending' }
]);

// Historique lié au tableau inférieur de la vue profil (avec images importées intégrées)
const historyData = ref([
  { id: 'LG-B00109', bookDate: 'June 09, 2028', bookTime: '9:08 AM', type: 'Deluxe', roomNum: 'Room 101', ciDate: 'June 19, 2024', ciTime: '1:45 PM', coDate: 'June 21, 2024', coTime: '11:45 AM', occupants: '2 Guests', img: roomThumb1 },
  { id: 'LG-B00085', bookDate: 'March 20, 2028', bookTime: '9:08 AM', type: 'Suite', roomNum: 'Room 305', ciDate: 'March 25, 2028', ciTime: '1:45 PM', coDate: 'March 30, 2028', coTime: '11:45 AM', occupants: '1 Guest', img: roomThumb2 }
]);

// --- FONCTIONS DE NAVIGATION ET CONTRÔLE D'ÉTAT ---
const viewProfile = (guest: Reservation) => {
  selectedGuest.value = guest;
};

const goBack = () => {
  selectedGuest.value = null;
};
</script>

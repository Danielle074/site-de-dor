<template>
  <div class="space-y-6 text-gray-600">
    <div class="flex flex-col sm:flex-row justify-between sm:items-center gap-4 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
      <div class="relative text-xs">
        <i class="bx bx-search absolute left-3 top-2.5 text-gray-400 text-sm"></i>
        <input
          type="text"
          placeholder="Search room type, number, etc"
          class="bg-gray-50 border border-gray-200 rounded-lg pl-9 pr-4 py-2 w-64 focus:outline-none focus:border-gray-400 transition-colors"
        />
      </div>

      <div class="flex items-center gap-3 text-xs">
        <span class="text-gray-400">Sort by:</span>

        <div class="relative">
          <select class="appearance-none bg-gray-50 border border-gray-200 rounded-lg pl-3 pr-8 py-2 font-medium text-gray-700 outline-none focus:border-gray-400">
            <option>Popular</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
          <i class="bx bx-chevron-down absolute right-2.5 top-2.5 text-gray-400 pointer-events-none"></i>
        </div>

        <div class="relative">
          <select class="appearance-none bg-gray-50 border border-gray-200 rounded-lg pl-3 pr-8 py-2 font-medium text-gray-700 outline-none focus:border-gray-400">
            <option>All Type</option>
            <option>Standard</option>
            <option>Deluxe</option>
            <option>Suite</option>
          </select>
          <i class="bx bx-chevron-down absolute right-2.5 top-2.5 text-gray-400 pointer-events-none"></i>
        </div>

        <button class="bg-neutral-900 hover:bg-neutral-800 text-white font-semibold px-4 py-2 rounded-lg flex items-center gap-2 shadow-sm transition-colors">
          <i class="bx bx-plus text-sm"></i>
          Add Room
        </button>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">

      <div class="lg:col-span-2 space-y-4">
        <div
          v-for="room in rooms"
          :key="room.id"
          @click="selectRoom(room)"
          :class="[
            'bg-white p-4 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col md:flex-row gap-5 shadow-sm',
            selectedRoom.id === room.id ? 'border-neutral-900 ring-1 ring-neutral-900' : 'border-gray-100 hover:border-gray-300'
          ]"
        >
          <div class="w-full md:w-48 h-32 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0">
            <img :src="room.mainImage" :alt="room.title" class="w-full h-full object-cover" />
          </div>

          <div class="flex-1 flex flex-col justify-between py-0.5 space-y-2">
            <div>
              <div class="flex justify-between items-start">
                <h3 class="text-lg font-bold text-gray-900">{{ room.title }}</h3>
                <span :class="[
                  'text-[10px] font-bold px-2.5 py-0.5 rounded uppercase tracking-wide',
                  room.status === 'Disponible' || room.status === 'Available' ? 'bg-neutral-900 text-white' : 'bg-gray-100 text-gray-500'
                ]">
                  {{ room.status }}
                </span>
              </div>

              <div class="flex items-center gap-4 text-gray-400 text-[11px] mt-1 font-medium">
                <span class="flex items-center gap-1"><i class="bx bx-area text-sm"></i> {{ room.size }}</span>
                <span class="flex items-center gap-1"><i class="bx bx-bed text-sm"></i> {{ room.bedType }}</span>
                <span class="flex items-center gap-1"><i class="bx bx-group text-sm"></i> {{ room.capacity }}</span>
              </div>

              <p class="text-xs text-gray-500 line-clamp-2 mt-2 leading-relaxed">
                {{ room.description }}
              </p>
            </div>

            <div class="flex justify-between items-center pt-2 border-t border-gray-50 text-xs">
              <span class="text-gray-400 font-medium">
                Availability: <strong class="text-gray-700">{{ room.availability }} Rooms</strong>
              </span>
              <span class="text-gray-900 font-black text-base">
                ${{ room.price }}<span class="text-gray-400 font-normal text-[11px]">/night</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm space-y-5">
        <div class="flex justify-between items-center text-xs">
          <h4 class="font-bold text-gray-400 uppercase tracking-wider">Room Detail</h4>
          <button class="bg-neutral-100 hover:bg-neutral-200 text-gray-800 font-bold px-3 py-1 rounded-md transition-colors">Edit</button>
        </div>

        <div>
          <div class="flex items-center gap-2">
            <h2 class="text-xl font-black text-gray-900">{{ selectedRoom.title }} Room</h2>
            <span class="bg-emerald-50 text-emerald-700 text-[10px] font-bold px-2 py-0.5 rounded">Available</span>
          </div>
          <p class="text-[11px] text-gray-400 mt-0.5">Occupied: <strong>18/25 Rooms</strong></p>
        </div>

        <div class="grid grid-cols-4 gap-2">
          <div class="col-span-3 h-44 rounded-xl overflow-hidden bg-gray-100">
            <img :src="selectedRoom.mainImage" alt="Main View" class="w-full h-full object-cover" />
          </div>
          <div class="grid grid-rows-4 gap-1.5">
            <div v-for="(thumb, idx) in selectedRoom.gallery" :key="idx" class="rounded-lg overflow-hidden h-9 bg-gray-100 relative">
              <img :src="thumb" alt="Thumb" class="w-full h-full object-cover" />
              <div v-if="idx === 3" class="absolute inset-0 bg-black/50 flex items-center justify-center text-[10px] text-white font-bold">
                + 12
              </div>
            </div>
          </div>
        </div>

        <div class="flex justify-between text-gray-500 text-[11px] font-medium border-b border-gray-100 pb-3">
          <span class="flex items-center gap-1"><i class="bx bx-area text-sm"></i> {{ selectedRoom.size }}</span>
          <span class="flex items-center gap-1"><i class="bx bx-bed text-sm"></i> {{ selectedRoom.bedType }}</span>
          <span class="flex items-center gap-1"><i class="bx bx-group text-sm"></i> {{ selectedRoom.capacity }}</span>
        </div>

        <p class="text-xs text-gray-500 leading-relaxed">
          Upgrade to our {{ selectedRoom.title }} Rooms for added space and luxury. With a king-size bed, separate seating area, larger work desk, and a 55-inch flat-screen TV.
        </p>

        <div class="space-y-2">
          <h4 class="text-xs font-bold text-gray-900">Features</h4>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-1.5 text-[11px] text-gray-600 font-medium">
            <p class="flex items-center gap-1 text-emerald-600"><i class="bx bx-check text-sm"></i> <span class="text-gray-600">Private balcony</span></p>
            <p class="flex items-center gap-1 text-emerald-600"><i class="bx bx-check text-sm"></i> <span class="text-gray-600">Work desk with chair</span></p>
            <p class="flex items-center gap-1 text-emerald-600"><i class="bx bx-check text-sm"></i> <span class="text-gray-600">Spacious layout</span></p>
            <p class="flex items-center gap-1 text-emerald-600"><i class="bx bx-check text-sm"></i> <span class="text-gray-600">Large windows</span></p>
          </div>
        </div>

        <div class="space-y-2 pt-1">
          <h4 class="text-xs font-bold text-gray-900">Facilities</h4>
          <div class="grid grid-cols-3 gap-y-2.5 text-[10px] text-gray-500 font-medium">
            <span class="flex items-center gap-1.5"><i class="bx bx-wifi text-base text-gray-400"></i> High-speed Wi-Fi</span>
            <span class="flex items-center gap-1.5"><i class="bx bx-shield-quarter text-base text-gray-400"></i> In-room safe</span>
            <span class="flex items-center gap-1.5"><i class="bx bx-fridge text-base text-gray-400"></i> Mini-fridge</span>
            <span class="flex items-center gap-1.5"><i class="bx bx-tv text-base text-gray-400"></i> Flat-screen TV</span>
            <span class="flex items-center gap-1.5"><i class="bx bx-wind text-base text-gray-400"></i> Air conditioning</span>
            <span class="flex items-center gap-1.5"><i class="bx bx-coffee text-base text-gray-400"></i> Coffee maker</span>
          </div>
        </div>

        <div class="space-y-2 pt-2 border-t border-gray-100">
          <h4 class="text-xs font-bold text-gray-900">Amenities</h4>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-1.5 text-[11px] font-medium">
            <p v-for="(amenity, i) in amenities" :key="i" class="flex items-center gap-1 text-emerald-600">
              <i class="bx bx-check text-sm"></i>
              <span class="text-gray-600">{{ amenity }}</span>
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// ==========================================
// 🛠️ IMPORTATION CENTRALISÉE DES IMAGES
// ==========================================
// Remplplace ces chemins par l'emplacement réel de tes photos de chambres dans ton dossier src/assets/
import imgStandard from '@/assets/images/chambre1.jpg';
import imgDeluxe from '@/assets/images/chambre2.jpg';
import imgSuite from '@/assets/images/salon.jpg';
import imgFamily from '@/assets/images/terrasse.jpg';
import imgSingle from '@/assets/images/hotelAbidjan.jpg';

// Thumbnails pour la galerie latérale droite
import thumb1 from '@/assets/images/abidjan.jpg';
import thumb2 from '@/assets/images/hotelcassablanca.jpg';
import thumb3 from '@/assets/images/cassablanca.jpg';
import thumb4 from '@/assets/images/hotelkigali.jpg';

interface Room {
  id: number;
  title: string;
  size: string;
  bedType: string;
  capacity: string;
  description: string;
  availability: string;
  price: number;
  status: 'Occupé' | 'Disponible' | 'Available';
  mainImage: string;
  gallery: string[];
}

// Liste complète des hébergements issue de tes maquettes
const rooms = ref<Room[]>([
  {
    id: 1,
    title: 'Standard',
    size: '25 m²',
    bedType: 'Queen Bed',
    capacity: '2 guests',
    description: 'Comfortable, affordable stay for solo travelers or couples. Queen bed, en-suite bathroom, work desk, essential amenities.',
    availability: '22/30',
    price: 100,
    status: 'Occupé',
    mainImage: imgStandard,
    gallery: [thumb1, thumb2, thumb3, thumb4]
  },
  {
    id: 2,
    title: 'Deluxe',
    size: '35 m²',
    bedType: 'King Bed',
    capacity: '2 guests',
    description: 'More space and luxury. King bed, separate seating, larger desk, 55-inch flat-screen TV. En-suite bathroom with bathtub and shower.',
    availability: '18/25',
    price: 150,
    status: 'Disponible',
    mainImage: imgDeluxe,
    gallery: [thumb1, thumb2, thumb3, thumb4]
  },
  {
    id: 3,
    title: 'Suite',
    size: '50 m²',
    bedType: 'King Bed',
    capacity: '3 guests',
    description: 'Spacious and private with separate living and sleeping areas. King bed, furnished living room, kitchenette - ideal for extended stays.',
    availability: '8/10',
    price: 250,
    status: 'Disponible',
    mainImage: imgSuite,
    gallery: [thumb1, thumb2, thumb3, thumb4]
  },
  {
    id: 4,
    title: 'Family',
    size: '45 m²',
    bedType: '2 Queen Beds',
    capacity: '4 guests',
    description: 'Designed for comfort and practicality. Two queen beds, bunk beds accommodate up to 6 guests. En-suite bathroom, seating area, 50-inch TV.',
    availability: '12/15',
    price: 200,
    status: 'Occupé',
    mainImage: imgFamily,
    gallery: [thumb1, thumb2, thumb3, thumb4]
  },
  {
    id: 5,
    title: 'Single',
    size: '20 m²',
    bedType: 'Single Bed',
    capacity: '1 guests',
    description: 'Features a single bed, en-suite bathroom, work desk, and essential amenities for a practical and functional stay.',
    availability: '17/20',
    price: 70,
    status: 'Available',
    mainImage: imgSingle,
    gallery: [thumb1, thumb2, thumb3, thumb4]
  }
]);

// Chambre sélectionnée par défaut (la Deluxe en index 1).
// L'opérateur ! assure à TypeScript que la valeur n'est pas undefined.
const selectedRoom = ref<Room>(rooms.value[1]!);

// Liste statique des Amenities pour le panneau de droite
const amenities = ref([
  'Complimentary bottled water',
  'Luxury toiletries',
  'Coffee and tea making facilities',
  'Hairdryer',
  'Premium bedding and linens',
  'Bathrobe and slippers',
  'Ensuite bathroom with shower and bathtub',
  '24-hour room service'
]);

// Fonction pour changer de chambre au clic dans la liste
const selectRoom = (room: Room) => {
  selectedRoom.value = room;
};
</script>

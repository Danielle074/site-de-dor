<template>
  <div class="grid grid-cols-1 xl:grid-cols-4 gap-6 p-1">

    <div class="xl:col-span-3 space-y-6">

      <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div class="bg-[#1e1e1e] text-white p-5 rounded-2xl flex flex-col justify-between shadow-sm relative overflow-hidden">
          <div>
            <div class="flex justify-between items-center">
              <span class="text-xs text-gray-400 font-medium">Nouvelles réservations</span>
              <span class="w-8 h-8 rounded-lg bg-neutral-800 flex items-center justify-center">
                <i class="bx bx-calendar text-lg"></i>
              </span>
            </div>
            <h3 class="text-3xl font-bold mt-2">840</h3>
          </div>
          <div class="mt-4 flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded-lg w-fit">
            <i class="bx bx-trending-up"></i> 8.70% <span class="text-gray-400">from last week</span>
          </div>
        </div>

        <div class="bg-white p-5 rounded-2xl border border-gray-100 flex flex-col justify-between shadow-sm">
          <div>
            <div class="flex justify-between items-center">
              <span class="text-xs text-gray-500 font-medium">Check-In</span>
              <span class="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-gray-700">
                <i class="bx bx-log-in-circle text-lg"></i>
              </span>
            </div>
            <h3 class="text-3xl font-bold mt-2 text-gray-900">231</h3>
          </div>
          <div class="mt-4 flex items-center gap-1.5 text-xs text-lime-600 bg-lime-500/10 px-2 py-1 rounded-lg w-fit">
            <i class="bx bx-trending-up"></i> 3.56% <span class="text-gray-400">from last week</span>
          </div>
        </div>

        <div class="bg-white p-5 rounded-2xl border border-gray-100 flex flex-col justify-between shadow-sm">
          <div>
            <div class="flex justify-between items-center">
              <span class="text-xs text-gray-500 font-medium">Check-Out</span>
              <span class="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-gray-700">
                <i class="bx bx-log-out-circle text-lg"></i>
              </span>
            </div>
            <h3 class="text-3xl font-bold mt-2 text-gray-900">124</h3>
          </div>
          <div class="mt-4 flex items-center gap-1.5 text-xs text-rose-600 bg-rose-500/10 px-2 py-1 rounded-lg w-fit">
            <i class="bx bx-trending-down"></i> 1.06% <span class="text-gray-400">from last week</span>
          </div>
        </div>

        <div class="bg-white p-5 rounded-2xl border border-gray-100 flex flex-col justify-between shadow-sm">
          <div>
            <div class="flex justify-between items-center">
              <span class="text-xs text-gray-500 font-medium">Total Revenue</span>
              <span class="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-gray-700">
                <i class="bx bx-dollar text-lg"></i>
              </span>
            </div>
            <h3 class="text-3xl font-bold mt-2 text-gray-900">$123,980</h3>
          </div>
          <div class="mt-4 flex items-center gap-1.5 text-xs text-lime-600 bg-lime-500/10 px-2 py-1 rounded-lg w-fit">
            <i class="bx bx-trending-up"></i> 5.70% <span class="text-gray-400">from last week</span>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div class="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between">
          <div>
            <div class="flex justify-between items-center mb-4">
              <h4 class="font-bold text-gray-900 text-sm">Disponibilité des chambres</h4>
              <button class="text-gray-400 hover:text-gray-600"><i class="bx bx-dots-horizontal-rounded"></i></button>
            </div>
            <div class="w-full h-8 bg-gray-100 rounded-lg overflow-hidden flex mb-6">
              <div class="bg-[#c2f3d2] h-full" style="width: 65%"></div>
              <div class="bg-[#f0fbb5] h-full border-l-2 border-white" style="width: 20%"></div>
              <div class="bg-[#ffe58f] h-full border-l-2 border-white" style="width: 10%"></div>
              <div class="bg-[#ffccc7] h-full border-l-2 border-white" style="width: 5%"></div>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-4 text-xs">
            <div class="flex gap-2">
              <span class="w-1 h-8 bg-rose-500 rounded-full block"></span>
              <div><p class="text-gray-400">Occupé</p><p class="text-lg font-bold text-gray-900">286</p></div>
            </div>
            <div class="flex gap-2">
              <span class="w-1 h-8 bg-amber-400 rounded-full block"></span>
              <div><p class="text-gray-400">Réservé</p><p class="text-lg font-bold text-gray-900">87</p></div>
            </div>
            <div class="flex gap-2">
              <span class="w-1 h-8 bg-lime-400 rounded-full block"></span>
              <div><p class="text-gray-400">Disponible</p><p class="text-lg font-bold text-gray-900">32</p></div>
            </div>
            <div class="flex gap-2">
              <span class="w-1 h-8 bg-amber-600 rounded-full block"></span>
              <div><p class="text-gray-400">Pas disponible</p><p class="text-lg font-bold text-gray-900">13</p></div>
            </div>
          </div>
        </div>

        <div class="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm lg:col-span-2">
          <div class="flex justify-between items-center mb-2">
            <h4 class="font-bold text-gray-900 text-sm">Revenue</h4>
            <select class="text-xs bg-gray-50 border border-gray-200 rounded-lg px-2 py-1 outline-none text-gray-600 font-medium">
              <option>Last 6 Months</option>
            </select>
          </div>
          <apexchart type="area" height="200" :options="revenueChartOptions" :series="revenueChartSeries"></apexchart>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div class="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <div class="flex justify-between items-center mb-4">
            <h4 class="font-bold text-gray-900 text-sm">Reservations</h4>
            <select class="text-xs bg-gray-50 border border-gray-200 rounded-lg px-2 py-1 outline-none text-gray-600 font-medium">
              <option>Last 7 Days</option>
            </select>
          </div>
          <apexchart type="bar" height="220" :options="reservationsChartOptions" :series="reservationsChartSeries"></apexchart>
        </div>

        <div class="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <div class="flex justify-between items-center mb-4">
            <h4 class="font-bold text-gray-900 text-sm">Reservation par plateforme</h4>
            <button class="text-gray-400 hover:text-gray-600"><i class="bx bx-dots-horizontal-rounded"></i></button>
          </div>
          <div class="flex items-center justify-center h-52">
            <apexchart type="donut" width="340" :options="platformChartOptions" :series="platformChartSeries"></apexchart>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div class="p-6 flex flex-col sm:flex-row justify-between sm:items-center gap-4">
          <h4 class="font-bold text-gray-900 text-sm">Liste de réservation</h4>
          <div class="flex gap-2">
            <div class="relative text-xs">
              <i class="bx bx-search absolute left-3 top-2.5 text-gray-400 text-sm"></i>
              <input type="text" placeholder="Search client, status, etc" class="bg-gray-50 border border-gray-100 rounded-lg pl-8 pr-4 py-2 w-56 focus:outline-none" />
            </div>
            <select class="text-xs bg-black text-white rounded-lg px-3 py-2 outline-none font-medium">
              <option>Tous les Status</option>
            </select>
          </div>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full text-left text-xs text-gray-600 whitespace-nowrap">
            <thead class="bg-gray-50 text-gray-500 font-semibold uppercase tracking-wider border-b border-gray-100">
              <tr>
                <th class="px-6 py-3.5">Booking ID <i class="bx bx-up-arrow-alt opacity-50"></i></th>
                <th class="px-6 py-3.5">Guest Name <i class="bx bx-up-arrow-alt opacity-50"></i></th>
                <th class="px-6 py-3.5">Room Type <i class="bx bx-up-arrow-alt opacity-50"></i></th>
                <th class="px-6 py-3.5">Room Number <i class="bx bx-up-arrow-alt opacity-50"></i></th>
                <th class="px-6 py-3.5">Duration <i class="bx bx-up-arrow-alt opacity-50"></i></th>
                <th class="px-6 py-3.5">Check-In & Check-Out <i class="bx bx-up-arrow-alt opacity-50"></i></th>
                <th class="px-6 py-3.5">Status <i class="bx bx-up-arrow-alt opacity-50"></i></th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-50">
              <tr v-for="row in bookings" :key="row.id" class="hover:bg-gray-50/50 transition-colors">
                <td class="px-6 py-4 font-medium text-gray-900">{{ row.id }}</td>
                <td class="px-6 py-4 font-medium text-gray-800">{{ row.name }}</td>
                <td class="px-6 py-4">
                  <span :class="[
                    'px-2 py-0.5 rounded-full text-[10px] font-bold uppercase',
                    row.type === 'Deluxe' ? 'bg-lime-100 text-lime-800' : row.type === 'Suite' ? 'bg-amber-100 text-amber-800' : 'bg-teal-100 text-teal-800'
                  ]">{{ row.type }}</span>
                </td>
                <td class="px-6 py-4">{{ row.room }}</td>
                <td class="px-6 py-4">{{ row.duration }}</td>
                <td class="px-6 py-4 text-gray-500">{{ row.dates }}</td>
                <td class="px-6 py-4">
                  <span :class="[
                    'px-2.5 py-1 rounded-lg text-[11px] font-bold tracking-wide',
                    row.status === 'Checked-In' ? 'bg-[#f0fbb5] text-lime-900' : 'bg-[#e6f4ff] text-blue-900'
                  ]">{{ row.status }}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>

    <div class="space-y-6">

      <div class="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
        <div class="flex justify-between items-center mb-4">
          <h4 class="font-bold text-gray-900 text-sm">Note globale</h4>
          <button class="text-gray-400"><i class="bx bx-dots-horizontal-rounded"></i></button>
        </div>
        <div class="flex items-baseline gap-2 mb-4">
          <span class="text-4xl font-extrabold text-white bg-neutral-900 px-3 py-1.5 rounded-xl">4.6</span>
          <span class="text-xs text-gray-400">/5</span>
          <div class="ml-2 text-xs">
            <p class="font-bold text-gray-900">Avis</p>
            <p class="text-gray-400">de 2546 commentaires</p>
          </div>
        </div>
        <div class="space-y-2 text-xs font-medium text-gray-500">
          <div v-for="rate in ratings" :key="rate.label" class="flex items-center justify-between">
            <span class="w-16 text-gray-400">{{ rate.label }}</span>
            <div class="flex-1 mx-3 bg-gray-100 h-1.5 rounded-full overflow-hidden">
              <div class="bg-neutral-800 h-full" :style="{ width: (rate.val / 5) * 100 + '%' }"></div>
            </div>
            <span class="text-gray-900 font-bold">{{ rate.val }}</span>
          </div>
        </div>
      </div>

      <div class="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
        <div class="flex justify-between items-center mb-4">
          <h4 class="font-bold text-gray-900 text-sm">Tâches</h4>
          <button class="w-7 h-7 bg-black text-white rounded-lg flex items-center justify-center text-sm"><i class="bx bx-plus"></i></button>
        </div>
        <div class="space-y-3">
          <div v-for="(task, idx) in tasks" :key="idx" :class="['p-3.5 rounded-xl border border-gray-50 text-xs shadow-xs', task.bg]">
            <div class="flex justify-between text-[10px] text-gray-500 font-semibold mb-1">
              <span>{{ task.date }}</span>
              <button class="text-gray-400"><i class="bx bx-dots-horizontal-rounded"></i></button>
            </div>
            <p class="font-bold text-gray-900 leading-snug">{{ task.title }}</p>
          </div>
        </div>
      </div>

      <div class="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
        <div class="flex justify-between items-center mb-6">
          <h4 class="font-bold text-gray-900 text-sm">Recent Activities</h4>
          <button class="text-gray-400"><i class="bx bx-dots-horizontal-rounded"></i></button>
        </div>
        <div class="relative border-l border-gray-100 pl-5 space-y-6 text-xs">
          <div v-for="(act, idx) in activities" :key="idx" class="relative">
            <span :class="['absolute -left-[31px] top-0 w-6 h-6 rounded-full flex items-center justify-center text-sm ring-4 ring-white', act.iconBg, act.iconColor]">
              <i :class="act.icon"></i>
            </span>
            <span class="text-[10px] text-gray-400 font-semibold block mb-0.5">{{ act.time }}</span>
            <p class="font-bold text-gray-900">{{ act.title }}</p>
            <p class="text-gray-400 mt-0.5 leading-relaxed">{{ act.desc }}</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import apexchart from 'vue3-apexcharts';
import type { ApexOptions } from 'apexcharts';

// --- CONFIGURATION APEXCHARTS : REVENUE (AREA) ---
const revenueChartSeries = ref([
  {
    name: 'Total Revenue',
    data: [290000, 315060, 240000, 320000, 250000, 310000]
  }
]);

const revenueChartOptions = ref<ApexOptions>({
  chart: { type: 'area', toolbar: { show: false }, fontFamily: 'sans-serif' },
  stroke: { curve: 'smooth', width: 2, colors: ['#a3e635'] },
  fill: {
    type: 'gradient',
    gradient: { shadeIntensity: 1, opacityFrom: 0.25, opacityTo: 0.02, colorStops: [] }
  },
  colors: ['#a3e635'],
  xaxis: {
    categories: ['Dec 2027', 'Jan 2028', 'Feb 2028', 'Mar 2028', 'Apr 2028', 'May 2028'],
    labels: { style: { colors: '#9ca3af', fontSize: '10px' } },
    axisBorder: { show: false }, axisTicks: { show: false }
  },
  yaxis: {
    labels: {
      formatter: (val: number) => `$${val / 1000}K`,
      style: { colors: '#9ca3af', fontSize: '10px' }
    }
  },
  grid: { strokeDashArray: 4, borderColor: '#f3f4f6' },
  dataLabels: { enabled: false },
  markers: { size: 0, hover: { size: 5 } },
  tooltip: {
    custom: function({ series, seriesIndex, dataPointIndex }: any) {
      return `<div class="bg-black text-white px-2.5 py-1.5 rounded-lg text-center text-xs shadow-md">
        <p class="text-[10px] opacity-70">Total Revenue</p>
        <p class="font-bold text-lime-400">$${series[seriesIndex][dataPointIndex].toLocaleString()}</p>
      </div>`;
    }
  }
});

// --- CONFIGURATION APEXCHARTS : RESERVATIONS (BAR) ---
const reservationsChartSeries = ref([
  { name: 'Reservé', data: [68, 48, 68, 68, 70, 60, 64] },
  { name: 'Annulé', data: [12, 12, 14, 10, 12, 12, 14] }
]);

const reservationsChartOptions = ref<ApexOptions>({
  chart: { type: 'bar', stacked: true, toolbar: { show: false } },
  colors: ['#d1fae5', '#eab308'],
  plotOptions: { bar: { columnWidth: '35%', borderRadius: 4 } },
  dataLabels: { enabled: false },
  xaxis: {
    categories: ['12 Jun', '13 Jun', '14 Jun', '15 Jun', '16 Jun', '17 Jun', '18 Jun'],
    labels: { style: { colors: '#9ca3af', fontSize: '10px' } },
    axisBorder: { show: false }, axisTicks: { show: false }
  },
  yaxis: { max: 100, labels: { style: { colors: '#9ca3af', fontSize: '10px' } } },
  grid: { show: false },
  legend: { show: false }
});

// --- CONFIGURATION APEXCHARTS : PLATEFORME (DONUT) ---
const platformChartSeries = ref([61, 12, 11, 9, 5, 2]);
const platformChartOptions = ref<ApexOptions>({
  chart: { type: 'donut' },
  labels: ['Direct Booking', 'Booking.com', 'Agoda', 'Airbnb', 'Hotels.com', 'Others'],
  colors: ['#a7f3d0', '#6ee7b7', '#facc15', '#fef08a', '#fef9c3', '#e2e8f0'],
  legend: { position: 'right', fontSize: '11px', labels: { colors: '#4b5563' } },
  dataLabels: { enabled: false },
  stroke: { width: 2, colors: ['#ffffff'] },
  plotOptions: { pie: { donut: { size: '75%' } } }
});

// --- DONNÉES DU TABLEAU & DES ANNOTATIONS ---
const bookings = ref([
  { id: 'LG-B00108', name: 'Angus Copper', type: 'Deluxe', room: 'Room 101', duration: '3 nights', dates: 'June 19, 2028 - June 22, 2028', status: 'Checked-In' },
  { id: 'LG-B00109', name: 'Catherine Lapp', type: 'Standard', room: 'Room 202', duration: '2 nights', dates: 'June 19, 2028 - June 21, 2028', status: 'Checked-In' },
  { id: 'LG-B00110', name: 'Edgar Irving', type: 'Suite', room: 'Room 303', duration: '5 nights', dates: 'June 19, 2028 - June 24, 2028', status: 'Pending' },
  { id: 'LG-B00111', name: 'Joe B. Hand', type: 'Standard', room: 'Room 105', duration: '4 nights', dates: 'June 19, 2028 - June 23, 2028', status: 'Checked-In' },
  { id: 'LG-B00112', name: 'Gertrude Bale', type: 'Deluxe', room: 'Room 204', duration: '1 night', dates: 'June 19, 2028 - June 20, 2028', status: 'Pending' }
]);

const ratings = [
  { label: 'Facilities', val: 4.4 },
  { label: 'Cleanliness', val: 4.7 },
  { label: 'Services', val: 4.6 },
  { label: 'Comfort', val: 4.8 },
  { label: 'Location', val: 4.5 }
];

const tasks = [
  { date: 'June 19, 2028', title: 'Set Up Conference Room B for 10 AM Meeting', bg: 'bg-gray-300/40 text-gray-900 border-l-4 border-gray-500' },
  { date: 'June 19, 2028', title: 'Restock Housekeeping Supplies on 3rd Floor', bg: 'bg-[#f0fbb5]/50 text-lime-950 border-l-4 border-lime-400' },
  { date: 'June 20, 2028', title: 'Inspect and Clean the Pool Area', bg: 'bg-emerald-50 text-emerald-950 border-l-4 border-emerald-400' },
  { date: 'June 20, 2028', title: 'Check-In Assistance During Peak Hours (4 PM - 6 PM)', bg: 'bg-neutral-900 text-white' }
];

const activities = [
  { time: '12:00 PM', title: 'Conference Room Setup', desc: 'Events Team set up Conference Room B for 10 AM meeting, including AV equipment and refreshments.', icon: 'bx bx-slideshow', iconBg: 'bg-amber-100', iconColor: 'text-amber-700' },
  { time: '11:30 AM', title: 'Guest Check-Out', desc: 'Sarah Johnson completed check-out process and updated room availability for Room 305.', icon: 'bx bx-log-out', iconBg: 'bg-emerald-100', iconColor: 'text-emerald-700' },
  { time: '11:00 AM', title: 'Room Cleaning Completed', desc: 'Maria Gonzalez cleaned and prepared Room 204 for new guests.', icon: 'bx bx-brush', iconBg: 'bg-lime-100', iconColor: 'text-lime-700' }
];
</script>

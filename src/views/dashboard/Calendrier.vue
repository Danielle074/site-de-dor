<template>
  <div class="flex flex-col lg:flex-row gap-6 text-gray-700">

    <!-- ========================================== -->
    <!-- PANNEAU GAUCHE : MINI CALENDRIER & CATÉGORIES -->
    <!-- ========================================== -->
    <div class="w-full lg:w-64 flex-shrink-0 space-y-6">

      <!-- Mini Calendrier -->
      <div class="bg-gray-50/50 border border-gray-100 rounded-2xl p-4 shadow-sm">
        <div class="flex justify-between items-center mb-4">
          <span class="text-xs font-bold text-gray-900">Juin 2026</span>
          <div class="flex gap-1">
            <button class="p-1 hover:bg-gray-200 rounded-md text-gray-400"><i class="bx bx-chevron-left text-sm"></i></button>
            <button class="p-1 hover:bg-gray-200 rounded-md text-gray-400"><i class="bx bx-chevron-right text-sm"></i></button>
          </div>
        </div>

        <!-- Jours de la semaine mini -->
        <div class="grid grid-cols-7 gap-y-3 text-center text-[10px] font-bold text-gray-400 mb-2">
          <span>Sun</span><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span>
        </div>

        <!-- Jours du mois mini -->
        <div class="grid grid-cols-7 gap-y-2.5 text-center text-[11px] font-medium text-gray-700">
          <span class="text-gray-300">28</span><span class="text-gray-300">29</span><span class="text-gray-300">30</span><span class="text-gray-300">31</span><span>1</span><span>2</span><span>3</span>
          <span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span><span>10</span>
          <span>11</span><span>12</span><span>13</span><span>14</span><span>15</span><span>16</span><span>17</span>
          <span class="bg-neutral-900 text-white rounded-full w-5 h-5 flex items-center justify-center mx-auto font-bold">18</span><span>19</span><span>20</span><span>21</span><span>22</span><span>23</span><span>24</span>
          <span>25</span><span>26</span><span>27</span><span>28</span><span>29</span><span>30</span><span class="text-gray-300">1</span>
        </div>
      </div>

      <!-- Liste des Catégories -->
      <div class="space-y-3">
        <div class="flex justify-between items-center px-1">
          <h4 class="text-xs font-bold text-gray-900">Categories</h4>
          <button class="text-gray-400"><i class="bx bx-dots-horizontal-rounded"></i></button>
        </div>
        <div class="space-y-2 text-xs font-semibold">
          <div class="flex items-center gap-2.5 px-2 py-1.5 hover:bg-gray-50 rounded-lg cursor-pointer">
            <span class="w-2.5 h-2.5 rounded-full bg-gray-200"></span>
            <span class="text-gray-600">Training</span>
          </div>
          <div class="flex items-center gap-2.5 px-2 py-1.5 hover:bg-gray-50 rounded-lg cursor-pointer">
            <span class="w-2.5 h-2.5 rounded-full bg-neutral-900"></span>
            <span class="text-gray-900">Meeting</span>
          </div>
          <div class="flex items-center gap-2.5 px-2 py-1.5 hover:bg-gray-50 rounded-lg cursor-pointer">
            <span class="w-2.5 h-2.5 rounded-full bg-neutral-800"></span>
            <span class="text-gray-600">Guest Service</span>
          </div>
          <div class="flex items-center gap-2.5 px-2 py-1.5 hover:bg-gray-50 rounded-lg cursor-pointer">
            <span class="w-2.5 h-2.5 rounded-full bg-gray-300"></span>
            <span class="text-gray-600">Maintenance</span>
          </div>
          <div class="flex items-center gap-2.5 px-2 py-1.5 hover:bg-gray-50 rounded-lg cursor-pointer">
            <span class="w-2.5 h-2.5 rounded-full bg-gray-400"></span>
            <span class="text-gray-600">Event</span>
          </div>
        </div>
      </div>
    </div>

    <!-- ========================================== -->
    <!-- PANNEAU DROIT : LE GRAND CALENDRIER MENSUEL -->
    <!-- ========================================== -->
    <div class="flex-1 space-y-4">

      <!-- Filtres d'affichage (Jour, Semaine, Mois) & Bouton d'action -->
      <div class="flex flex-wrap items-center justify-end gap-3 text-xs font-bold">
        <div class="bg-gray-100/80 p-1 rounded-xl flex items-center">
          <button class="px-4 py-1.5 rounded-lg text-gray-500 hover:text-gray-900">Jour</button>
          <button class="px-4 py-1.5 rounded-lg text-gray-500 hover:text-gray-900">Semaine</button>
          <button class="bg-white text-gray-900 px-4 py-1.5 rounded-lg shadow-sm">Mois</button>
        </div>

        <div class="relative">
          <select class="appearance-none bg-white border border-gray-200 rounded-xl pl-3 pr-8 py-2 text-gray-700 outline-none cursor-pointer">
            <option>Toutes catégories</option>
          </select>
          <i class="bx bx-chevron-down absolute right-2.5 top-2.5 text-gray-400 pointer-events-none"></i>
        </div>

        <button class="bg-neutral-900 hover:bg-neutral-800 text-white px-4 py-2 rounded-xl flex items-center gap-2 shadow-sm transition-colors">
          Ajouter un calendrier
        </button>
      </div>

      <!-- Structure principale de la grille calendaire -->
      <div class="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">

        <!-- En-têtes des jours de la semaine (Dimanche à Samedi) -->
        <div class="grid grid-cols-7 border-b border-gray-100 bg-gray-50/30 text-center text-xs font-bold text-gray-500 py-3">
          <span>Dimanche</span><span>Lundi</span><span>Mardi</span><span>Mercredi</span><span>Jeudi</span><span>Vendredi</span><span>Samedi</span>
        </div>

        <!-- Les cases des jours (7 colonnes x 5 lignes) -->
        <div class="grid grid-cols-7 grid-rows-5 divide-x divide-y divide-gray-100 border-t border-gray-100">

          <!-- LIGNE 1 -->
          <div class="p-2 min-h-[110px] bg-gray-50/30 bg-stripes text-gray-300 font-bold text-xs">28</div>
          <div class="p-2 min-h-[110px] bg-gray-50/30 bg-stripes text-gray-300 font-bold text-xs">29</div>
          <div class="p-2 min-h-[110px] bg-gray-50/30 bg-stripes text-gray-300 font-bold text-xs">30</div>
          <div class="p-2 min-h-[110px] bg-gray-50/30 bg-stripes text-gray-300 font-bold text-xs">31</div>
          <div class="p-2 min-h-[110px] text-gray-900 font-bold text-xs space-y-1">
            <span>1</span>
            <div class="bg-neutral-800 text-white p-2 rounded-lg text-[9px] leading-tight space-y-1">
              <p class="text-gray-400 font-medium font-mono">11:00 AM - 1:00 PM</p>
              <p class="font-bold">Chambre occupée</p>
              <p class="text-[8px] text-gray-500 pt-2 font-mono uppercase">Maintenance</p>
            </div>
          </div>
          <div class="p-2 min-h-[110px] text-gray-900 font-bold text-xs">2</div>
          <div class="p-2 min-h-[110px] text-gray-900 font-bold text-xs">3</div>

          <!-- LIGNE 2 -->
          <div class="p-2 min-h-[110px] text-gray-900 font-bold text-xs">4</div>
          <div class="p-2 min-h-[110px] text-gray-900 font-bold text-xs space-y-1">
            <span>5</span>
            <div class="bg-slate-100 text-gray-800 p-2 rounded-lg text-[9px] leading-tight space-y-1 border border-slate-200/40">
              <p class="text-gray-400 font-medium font-mono">2:00 PM - 4:00 PM</p>
              <p class="font-bold text-gray-900">Fire Safety Training</p>
              <p class="text-[8px] text-gray-400 pt-2 font-mono uppercase">Reserve</p>
            </div>
          </div>
          <div class="p-2 min-h-[110px] text-gray-900 font-bold text-xs">6</div>
          <div class="p-2 min-h-[110px] text-gray-900 font-bold text-xs space-y-1">
            <span>7</span>
            <div class="bg-slate-100 text-gray-800 p-2 rounded-lg text-[9px] leading-tight space-y-1 border border-slate-200/40">
              <p class="text-gray-400 font-medium font-mono">12:00 PM</p>
              <p class="font-bold text-gray-900">VIP Guest Arrival</p>
              <p class="text-[8px] text-gray-400 pt-3 font-mono uppercase">Reserve</p>
            </div>
          </div>
          <div class="p-2 min-h-[110px] text-gray-900 font-bold text-xs">8</div>
          <div class="p-2 min-h-[110px] text-gray-900 font-bold text-xs">9</div>
          <div class="p-2 min-h-[110px] text-gray-900 font-bold text-xs space-y-1">
            <span>10</span>
            <div class="bg-slate-100 text-gray-800 p-2 rounded-lg text-[9px] leading-tight space-y-1 border border-slate-200/40">
              <p class="text-gray-400 font-medium font-mono">3:00 PM - 5:00 PM</p>
              <p class="font-bold text-gray-900">Team Building Activity</p>
              <p class="text-[8px] text-gray-400 pt-2 font-mono uppercase">Reserve</p>
            </div>
          </div>

          <!-- LIGNE 3 -->
          <div class="p-2 min-h-[110px] text-gray-900 font-bold text-xs">11</div>
          <div class="p-2 min-h-[110px] text-gray-900 font-bold text-xs space-y-1">
            <span>12</span>
            <div class="bg-zinc-200/70 text-gray-800 p-2 rounded-lg text-[9px] leading-tight space-y-1">
              <p class="text-gray-500 font-medium font-mono">9:00 AM - 1:00 PM</p>
              <p class="font-bold text-gray-900">Indisponible</p>
              <p class="text-[8px] text-gray-400 pt-2 font-mono uppercase">Maintenance</p>
            </div>
          </div>
          <div class="p-2 min-h-[110px] text-gray-900 font-bold text-xs">13</div>
          <div class="p-2 min-h-[110px] text-gray-900 font-bold text-xs">14</div>
          <div class="p-2 min-h-[110px] text-gray-900 font-bold text-xs space-y-1">
            <span>15</span>
            <div class="bg-zinc-200/70 text-gray-800 p-2 rounded-lg text-[9px] leading-tight space-y-1">
              <p class="text-gray-500 font-medium font-mono">11:00 AM - 1:00 PM</p>
              <p class="font-bold text-gray-900">Indisponible</p>
              <p class="text-[8px] text-gray-400 pt-2 font-mono uppercase">Training</p>
            </div>
          </div>
          <div class="p-2 min-h-[110px] text-gray-900 font-bold text-xs">16</div>
          <div class="p-2 min-h-[110px] text-gray-900 font-bold text-xs">17</div>

          <!-- LIGNE 4 -->
          <div class="p-2 min-h-[110px] text-gray-900 font-bold text-xs space-y-1">
            <span>18</span>
            <div class="bg-zinc-200/70 text-gray-800 p-2 rounded-lg text-[9px] leading-tight space-y-1">
              <p class="text-gray-500 font-medium font-mono">10:00 AM - 12:00 PM</p>
              <p class="font-bold text-gray-900">Marketing Strategy Meeting</p>
              <p class="text-[8px] text-gray-400 pt-2 font-mono uppercase">Meeting</p>
            </div>
          </div>
          <div class="p-2 min-h-[110px] text-gray-900 font-bold text-xs">19</div>
          <div class="p-2 min-h-[110px] text-gray-900 font-bold text-xs space-y-1">
            <span>20</span>
            <div class="bg-neutral-800 text-white p-2 rounded-lg text-[9px] leading-tight space-y-1">
              <p class="text-gray-400 font-medium font-mono">9:00 AM - 10:00 AM</p>
              <p class="font-bold">Staff Meeting</p>
              <p class="text-[8px] text-gray-500 pt-2 font-mono uppercase">Meeting</p>
            </div>
          </div>
          <div class="p-2 min-h-[110px] text-gray-900 font-bold text-xs space-y-1">
            <span>21</span>
            <div class="bg-neutral-800 text-white p-2 rounded-lg text-[9px] leading-tight space-y-1">
              <p class="text-gray-400 font-medium font-mono">6:00 PM - 8:00 PM</p>
              <p class="font-bold">Guest Welcome Event</p>
              <p class="text-[8px] text-gray-500 pt-2 font-mono uppercase">Guest Service</p>
            </div>
          </div>
          <div class="p-2 min-h-[110px] text-gray-900 font-bold text-xs">22</div>
          <div class="p-2 min-h-[110px] text-gray-900 font-bold text-xs space-y-1">
            <span>23</span>
            <div class="bg-neutral-800 text-white p-2 rounded-lg text-[9px] leading-tight space-y-1">
              <p class="text-gray-400 font-medium font-mono">11:00 AM - 1:00 PM</p>
              <p class="font-bold">Chambre occupée</p>
              <p class="text-[8px] text-gray-500 pt-2 font-mono uppercase">Occupation</p>
            </div>
          </div>
          <div class="p-2 min-h-[110px] text-gray-900 font-bold text-xs space-y-1">
            <span>24</span>
            <div class="bg-neutral-800 text-white p-2 rounded-lg text-[9px] leading-tight space-y-1">
              <p class="text-gray-400 font-medium font-mono">3:00 PM - 4:00 PM</p>
              <p class="font-bold">Chambre occupée</p>
              <p class="text-[8px] text-gray-500 pt-2 font-mono uppercase">Occupation</p>
            </div>
          </div>

          <!-- LIGNE 5 -->
          <div class="p-2 min-h-[110px] text-gray-900 font-bold text-xs">25</div>
          <div class="p-2 min-h-[110px] text-gray-900 font-bold text-xs">26</div>
          <div class="p-2 min-h-[110px] text-gray-900 font-bold text-xs">27</div>
          <div class="p-2 min-h-[110px] text-gray-900 font-bold text-xs">28</div>
          <div class="p-2 min-h-[110px] text-gray-900 font-bold text-xs space-y-1">
            <span>29</span>
            <div class="bg-slate-400 text-white p-2 rounded-lg text-[9px] leading-tight space-y-1 shadow-sm">
              <p class="text-slate-200 font-medium font-mono">11:00 AM - 1:00 PM</p>
              <p class="font-bold">Activité visite</p>
              <p class="text-[8px] text-slate-300 pt-2 font-mono uppercase">Activités</p>
            </div>
          </div>
          <div class="p-2 min-h-[110px] text-gray-900 font-bold text-xs space-y-1">
            <span>30</span>
            <div class="bg-slate-400 text-white p-2 rounded-lg text-[9px] leading-tight space-y-1 shadow-sm">
              <p class="text-slate-200 font-medium font-mono">5:00 PM - 7:00 PM</p>
              <p class="font-bold">Activité randonnée</p>
              <p class="text-[8px] text-slate-300 pt-2 font-mono uppercase">Activités</p>
            </div>
          </div>
          <div class="p-2 min-h-[110px] bg-gray-50/30 bg-stripes text-gray-300 font-bold text-xs">1</div>

        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
// Aucune configuration complexe ou import requis ici.
// Les styles hachurés des cases vides sont directement déclarés en CSS ci-dessous.
</script>

<style scoped>
/* Style personnalisé pour reproduire l'effet hachuré des jours hors-mois de la maquette */
.bg-stripes {
  background-image: linear-gradient(
    45deg,
    #f9fafb 25%,
    transparent 25%,
    transparent 50%,
    #f9fafb 50%,
    #f9fafb 75%,
    transparent 75%,
    transparent
  );
  background-size: 16px 16px;
}
</style>

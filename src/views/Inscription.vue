<template>
  <teleport to="body">
    <Transition name="modal-fade" appear>
      <div
        v-if="isVisible"
        class="fixed inset-0 z-50 flex items-center justify-center p-4"
      >
        <!-- Overlay avec fond noir -->
        <Transition name="overlay-fade" appear>
          <div
            class="absolute inset-0 bg-black/60 backdrop-blur-[2px] transition-opacity"
            @click="handleClose"
          ></div>
        </Transition>

        <!-- Contenu modal inscription - Plus petit -->
        <Transition name="modal-zoom" appear>
          <div
            v-if="isVisible"
            class="relative bg-white w-full max-w-md rounded-2xl p-6 md:p-8 shadow-2xl"
          >
            <button
              @click="handleClose"
              class="absolute top-4 right-5 p-1.5 text-gray-400 hover:text-black transition-all duration-300 rounded-full hover:bg-gray-100 hover:scale-110 active:scale-95"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div class="text-center mb-6">
              <div class="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <i class='bx bx-mail-send text-amber-500 text-xl'></i>
              </div>
              <h2 class="text-xl font-bold mb-1">Inscription</h2>
              <p class="text-xs text-gray-500 leading-relaxed px-2">
                Inscrivez-vous avec votre email ou<br />
                connectez-vous via les réseaux sociaux
              </p>
            </div>

            <form @submit.prevent="handleSubmit" class="space-y-3">
              <div>
                <label class="block text-xs font-semibold mb-1.5 text-gray-700">Email</label>
                <input
                  v-model="email"
                  type="email"
                  placeholder="exemple@email.com"
                  class="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-200 focus:border-amber-400 transition-all duration-300"
                />
              </div>

              <button
                type="submit"
                :disabled="isLoading"
                class="relative w-full bg-[#1c1c1c] text-white font-semibold py-2.5 rounded-xl text-sm hover:bg-black transition-all duration-300 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed overflow-hidden"
              >
                <span :class="{ 'opacity-0': isLoading }">Continuer</span>
                <div
                  v-if="isLoading"
                  class="absolute inset-0 flex items-center justify-center"
                >
                  <div class="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                </div>
              </button>
            </form>

            <div class="relative my-5 text-center">
              <div class="absolute inset-0 flex items-center">
                <span class="w-full border-t border-gray-200"></span>
              </div>
              <span class="relative bg-white px-3 text-xs text-gray-400">Ou</span>
            </div>

            <div class="space-y-2">
              <button
                @click="handleGoogleLogin"
                class="w-full border border-gray-300 rounded-xl py-2.5 flex items-center justify-center gap-2 text-sm font-medium hover:bg-gray-50 transition-all duration-300 hover:scale-[1.01] active:scale-[0.98] hover:border-gray-400"
              >
                <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" class="w-4 h-4" alt="Google" />
                Google
              </button>

              <button
                @click="handleFacebookLogin"
                class="w-full border border-gray-300 rounded-xl py-2.5 flex items-center justify-center gap-2 text-sm font-medium hover:bg-gray-50 transition-all duration-300 hover:scale-[1.01] active:scale-[0.98] hover:border-gray-400"
              >
                <svg class="w-4 h-4 text-[#1877F2] fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Facebook
              </button>
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </teleport>

  <!-- MODAL OTP avec fond transparent -->
  <OtpModal
    :isOpen="showOtpModal"
    :email="email"
    @close="showOtpModal = false"
    @submit="handleOtpSubmit"
    @back="handleBackToEmailModal"
  />
</template>
<script setup>
import { ref } from 'vue';
import OtpModal from '@/components/OtpModal.vue';

const emit = defineEmits(['close']);
const isVisible = ref(true);
const isLoading = ref(false);
const email = ref('');
const showOtpModal = ref(false);

const handleClose = () => {
  isVisible.value = false;
  setTimeout(() => {
    emit('close');
  }, 300);
};

const handleSubmit = async () => {
  if (!email.value) return;

  isLoading.value = true;
  await new Promise(resolve => setTimeout(resolve, 1000));
  isLoading.value = false;

  isVisible.value = false;
  setTimeout(() => {
    showOtpModal.value = true;
  }, 300);
};

const handleOtpSubmit = (code) => {
  console.log('Code OTP soumis:', code);
  console.log('Email:', email.value);
  showOtpModal.value = false;
  alert('Inscription réussie !');
};

const handleBackToEmailModal = () => {
  showOtpModal.value = false;
  isVisible.value = true;
};

const handleGoogleLogin = () => {
  console.log('Login avec Google');
  handleClose();
};

const handleFacebookLogin = () => {
  console.log('Login avec Facebook');
  handleClose();
};
</script>

<style scoped>
.overlay-fade-enter-active,
.overlay-fade-leave-active {
  transition: opacity 0.3s ease;
}

.overlay-fade-enter-from,
.overlay-fade-leave-to {
  opacity: 0;
}

.modal-zoom-enter-active {
  animation: modalZoomIn 0.35s cubic-bezier(0.34, 1.2, 0.64, 1);
}

.modal-zoom-leave-active {
  animation: modalZoomOut 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes modalZoomIn {
  from {
    opacity: 0;
    transform: scale(0.95) translateY(-15px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

@keyframes modalZoomOut {
  from {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
  to {
    opacity: 0;
    transform: scale(0.95) translateY(15px);
  }
}

.animate-spin {
  animation: spin 0.6s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>

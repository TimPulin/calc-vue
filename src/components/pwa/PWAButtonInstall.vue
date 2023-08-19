<template>
  <button
    class="button button--install"
    v-if="isButtonInstallShow"
    @click="installPWA"
  >
    Установить приложение
  </button>
</template>

<script>
export default {
  data() {
    return {
      isButtonInstallShow: false,
      installEvent: null,
    };
  },

  beforeMount() {
    window.addEventListener('beforeinstallprompt', (event) => {
      event.preventDefault();
      this.installEvent = event;
      this.isButtonInstallShow = true;
    });

    window.addEventListener('appinstalled', () => {
      this.isButtonInstallShow = false;
      this.installEvent = null;
    });
  },

  methods: {
    installPWA() {
      this.installEvent.prompt();
      this.installEvent.userChoice.then((choice) => {
        this.dismissInstall(); // Hide the prompt once the user's clicked

        if (choice.outcome === 'accepted') {
          console.log('accepted');
          // Do something additional if the user chose to install
        } else {
          console.log('refused');
          // Do something additional if the user declined
        }
      });
    },

    dismissInstall() {
      this.isButtonInstallShow = false;
      this.installEvent = null;
    },
  },
};
</script>

<template>
  <button
    class="button button--install"
    v-if="isButtonUpdateShow"
    @click="updatePWA"
  >
    Обновить приложение
  </button>
</template>

<script>
export default {
  data() {
    return {
      isButtonUpdateShow: false,
      updateEvent: null,
    };
  },

  beforeMount() {
    window.addEventListener('update-is-ready', (event) => {
      this.isButtonUpdateShow = true;
      this.updateEvent = event.detail.data;
    });
  },

  methods: {
    updatePWA() {
      this.confirmUpdate().then((result) => {
        if (result) {
          this.setUpdate();
        } else {
          this.dismissUpdate();
        }
      });
    },

    confirmUpdate() {
      return new Promise(function (resolve) {
        const resultConfirm = confirm(
          'Добрая новость! Мы внесли парочку улучшений в приложение. Готовы установить обновление?'
        );
        if (resultConfirm) {
          return resolve(true);
        } else {
          return resolve(false);
        }
      });
    },

    dismissUpdate() {
      this.isButtonUpdateShow = false;
      this.updateEvent = null;
    },

    setUpdate() {
      window.location.reload();
      this.updateEvent.waiting.postMessage({ type: 'SKIP_WAITING' });
    },
  },
};
</script>

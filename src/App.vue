<template>
  <div class="overlay" id="overlayBody" ref="overlayBody"></div>
  <ModalElement @update:overlay-modal="updateOverlayModal" />

  <h1 class="page-title">Калькулятор программ фигурного катания</h1>

  <main>
    <div class="container">
      <router-view />
    </div>
  </main>
</template>

<script>
import { Modal } from 'bootstrap';
import { computed } from 'vue';

import ModalElement from '@/components/modal/ModalElement.vue';

export default {
  components: { ModalElement },

  provide() {
    return {
      overlayBody: computed(() => this.overlayBody),
      overlayModal: computed(() => this.overlayModal),
    };
  },

  data() {
    return {
      overlayBody: null,
      overlayModal: null,
    };
  },

  created() {
    this.$store.dispatch('createProgram', {});
  },

  mounted() {
    this.createNewModal();
    this.overlayBody = this.$refs.overlayBody;
  },

  methods: {
    updateOverlayModal(value) {
      this.overlayModal = value;
    },

    createNewModal() {
      const modalElement = new Modal('#modal-element', {
        backdrop: 'static',
      });
      this.$store.commit('setModalElement', modalElement);
    },
  },
};
</script>

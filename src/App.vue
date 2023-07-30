<template>
  <div class="overlay" id="overlayBody" ref="overlayBody"></div>
  <ModalElement @update:overlay-modal="updateOverlayModal" />

  <SiteHeader />

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
import SiteHeader from './components/site/SiteHeader.vue';

export default {
  components: { ModalElement, SiteHeader },

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

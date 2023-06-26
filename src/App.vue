<template>
  <ModalElement />

  <SiteHeader />

  <main>
    <div class="container">
      <div class="overlay" id="overlay"></div>
      <router-view />
    </div>
  </main>
</template>

<script>
import { Modal } from 'bootstrap';

import ModalElement from '@/components/modal/ModalElement.vue';
import SiteHeader from './components/site/SiteHeader.vue';

export default {
  components: { ModalElement, SiteHeader },

  created() {
    this.$store.dispatch('createProgram', {});
    // TODO убрать если не понадобится
    this.$store.dispatch('createEditingElement');
  },

  mounted() {
    const modalElement = new Modal('#modal-element');
    this.$store.commit('setModalElement', modalElement);
  },

  methods: {},
};
</script>

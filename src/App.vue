<template>
  <ModalElementConfig />

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

import ModalElementConfig from '@/components/modal/ModalElementConfig.vue';
import SiteHeader from './components/site/SiteHeader.vue';

export default {
  components: { ModalElementConfig, SiteHeader },

  created() {
    this.$store.dispatch('createProgram', {});
  },

  mounted() {
    const modalElementConfig = new Modal('#modal-element-config');
    this.$store.commit('setModalElementConfig', modalElementConfig);
  },

  methods: {},
};
</script>

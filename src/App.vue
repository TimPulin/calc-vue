<template>
  <SiteHeader />

  <main>
    <div class="container">
      <div class="overlay" id="overlay"></div>
      <router-view />
    </div>
  </main>
</template>

<script>
import SiteHeader from './components/site/SiteHeader.vue';
export default {
  components: { SiteHeader },
  created() {
    this.$store.dispatch('createProgram', {});
  },
};
</script>

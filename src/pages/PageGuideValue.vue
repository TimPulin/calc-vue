<template>
  <h1 class="page-title">Справочник стоимости элементов</h1>

  <GuidePanelTabs
    :active-tab="activeTab"
    @update:model-value="onUpdateActiveTab"
  />
  <div class="visible" :class="classObject">
    <router-view />
  </div>
</template>

<script>
import GuidePanelTabs from '@/components/guide-value/GuidePanelTabs.vue';

export default {
  components: {
    GuidePanelTabs,
  },

  data() {
    return {
      activeTab: 'jumps',
      visibleOff: false,
    };
  },

  computed: {
    classObject() {
      return {
        'visible--off': this.visibleOff,
      };
    },
  },

  watch: {
    $route() {
      this.setActiveTabName();
    },
  },

  created() {
    this.setActiveTabName();
  },

  methods: {
    onUpdateActiveTab(value) {
      this.visibleOff = true;
      setTimeout(() => {
        this.$router.push({ path: `/guide-value/${value}` });
        this.visibleOff = false;
      }, 300);
    },

    setActiveTabName() {
      const pathArr = window.location.href.split('/');
      const name = pathArr.slice(-1)[0];

      this.activeTab = name;
      console.log(this.activeTab);
    },
  },
};
</script>

<style>
.visible {
  opacity: 1;
  transition: opacity 0.3s ease-in;
}

.visible--off {
  opacity: 0;
}
</style>

<template>
  <h1 class="page-title">Справочник стоимости элементов</h1>

  <GuidePanelTabs
    :active-tab="activeTab"
    @update:model-value="onUpdateActiveTab"
  />

  <GuideTableJumps />
  <GuideTableSpins />
  <GuideTableSteps />
</template>

<script>
import GuidePanelTabs from '@/components/guide-value/GuidePanelTabs.vue';
import GuideTableJumps from '@/components/guide-value/GuideTableJumps.vue';
import GuideTableSpins from '@/components/guide-value/GuideTableSpins.vue';
import GuideTableSteps from '@/components/guide-value/GuideTableSteps.vue';

export default {
  components: {
    GuidePanelTabs,
    GuideTableJumps,
    GuideTableSpins,
    GuideTableSteps,
  },

  data() {
    return {
      activeTab: 'jump',
    };
  },

  methods: {
    onUpdateActiveTab(value) {
      this.activeTab = value;
    },
  },
};
</script>

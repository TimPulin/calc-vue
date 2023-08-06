<template>
  <tr>
    <td class="table__element-legend" colspan="4">
      {{ elementInitProperties.legend }}
    </td>
  </tr>
  <tr>
    <td class="tr__section">{{ element.fullElementName }}</td>

    <td class="tr__section">
      <OptionsBlockLevel
        :index="element.index"
        :model-value="element.elementName[0].level"
        @update:model-value="updateElementProperty($event, 'level')"
      />
    </td>

    <td class="tr__section">
      <OptionsBlockGoe
        :index="element.index"
        :model-value="element.goe"
        @update:model-value="updateElementGoe($event)"
      />
    </td>

    <td class="tr__section">
      {{ element.fullElementScores }}
    </td>
  </tr>

  <tr class="tr--empty">
    <td class="tr__section"></td>
  </tr>
</template>

<script>
import guideRowMixin from '@/mixins/guide-row-mixin';

import OptionsBlockLevel from '@/components/options/OptionsBlockLevel.vue';
import OptionsBlockGoe from '@/components/options/OptionsBlockGoe.vue';

export default {
  components: {
    OptionsBlockLevel,
    OptionsBlockGoe,
  },

  mixins: [guideRowMixin],

  methods: {
    setElementProperties() {
      this.element.elementName[0].level = 'B';
    },
  },
};
</script>

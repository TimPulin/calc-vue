<template>
  <tr>
    <td class="table__element-legend" colspan="7">
      {{ elementInitProperties.legend }}
    </td>
  </tr>

  <tr>
    <td class="tr__section">{{ element.fullElementName }}</td>

    <td class="tr__section">
      <OptionsBlockRotation
        :index="element.index"
        :model-value="name.rotations"
        @update:model-value="updateElementProperty($event, 'rotations')"
      />
    </td>

    <td class="tr__section">
      <OptionsBlockUnderrotate
        :index="element.index"
        :model-value="name.underrotate"
        @update:model-value="updateElementProperty($event, 'underrotate')"
      />
    </td>

    <td class="tr__section tr__section--edge">
      <OptionsBlockEdge
        :index="element.index"
        :is-button-options-show="isButtonOptionsEdgeShow"
        :model-value="name.edge"
        @update:model-value="updateElementProperty($event, 'edge')"
      />
    </td>

    <td class="tr__section">
      <OptionsBlockGoe
        :index="element.index"
        :model-value="element.goe"
        @update:model-value="updateElementGoe($event)"
      />
    </td>

    <td class="tr__section tr__section--scores">
      {{ element.fullElementScores }}
    </td>
  </tr>

  <tr class="tr--empty">
    <td class="tr__section"></td>
  </tr>
</template>

<script>
import guideRowMixin from '@/mixins/guide-row-mixin';

import OptionsBlockRotation from '@/components/options/OptionsBlockRotation.vue';
import OptionsBlockUnderrotate from '@/components/options/OptionsBlockUnderrotate.vue';
import OptionsBlockGoe from '@/components/options/OptionsBlockGoe.vue';
import OptionsBlockEdge from '@/components/options/OptionsBlockEdge.vue';

export default {
  components: {
    OptionsBlockRotation,
    OptionsBlockUnderrotate,
    OptionsBlockEdge,
    OptionsBlockGoe,
  },

  mixins: [guideRowMixin],

  computed: {
    isButtonOptionsEdgeShow() {
      return !this.element.elementName[0].lockEdge;
    },
  },

  methods: {
    setElementProperties() {
      this.element.elementName[0].rotations = 1;
    },
  },
};
</script>

<template>
  <tr>
    <td>{{ elementInitProperties.legend }}</td>

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

    <td class="tr__section">
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

    <td>
      <div class="tr__wrapper">
        {{ element.fullElementScores }}
      </div>
    </td>
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

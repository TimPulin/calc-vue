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
import OptionsBlockGoe from '@/components/options/OptionsBlockGoe.vue';

export default {
  components: {
    OptionsBlockRotation,
    OptionsBlockGoe,
  },

  mixins: [guideRowMixin],

  methods: {
    setElementProperties() {
      this.element.elementName[0].rotations = 1;
    },
  },
};
</script>

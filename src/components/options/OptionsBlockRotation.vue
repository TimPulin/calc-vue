<template>
  <OptionsBlockBase
    :options-panel-name="optionsPanelName"
    :list-radio="listRadio"
    class-extended="options--modal-panel-auto"
    :model-value="modelValue"
    @update:model-value="$emit('update:model-value', $event)"
  />
</template>

<script>
import OptionsBlockBase from '@/components/options/base/OptionsBlockBase.vue';

export default {
  components: { OptionsBlockBase },
  props: {
    modelValue: [String, Number],
    index: Number,
  },
  data() {
    return {
      listRadio: [1, 2, 3, 4],
    };
  },
  computed: {
    optionsPanelName() {
      return `rotations-${this.index}`;
    },
  },
};
</script>

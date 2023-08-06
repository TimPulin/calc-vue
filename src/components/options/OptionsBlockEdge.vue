<template>
  <OptionsBlockBase
    :options-panel-name="optionsPanelName"
    :list-radio="listRadio"
    class-extended="options--modal-panel-auto"
    :is-button-options-show="isButtonOptionsShow"
    :model-value="modelValue"
    @update:model-value="$emit('update:model-value', $event)"
  >
    <RadioThombUp
      :name="optionsPanelName"
      :local-value="''"
      :model-value="modelValue"
      @update:model-value="$emit('update:model-value', $event)"
    />
  </OptionsBlockBase>
</template>

<script>
import OptionsBlockBase from '@/components/options/base/OptionsBlockBase.vue';
import RadioThombUp from '@/components/checkbox/RadioThombUp.vue';

export default {
  components: { OptionsBlockBase, RadioThombUp },
  props: {
    modelValue: [String, Number],
    index: Number,
    isButtonOptionsShow: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      listRadio: ['!', 'e'],
    };
  },
  computed: {
    optionsPanelName() {
      return `underrotate-${this.index}`;
    },
  },
};
</script>

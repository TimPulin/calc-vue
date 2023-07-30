<template>
  <div class="options" :class="animationClassesObj">
    <OptionsRadioBase
      v-for="(radio, index) in listRadio"
      :key="index"
      :name="name"
      :local-value="radio"
      :model-value="modelValue"
      @update:model-value="$emit('update:modelValue', $event)"
    >
      {{ radio }}
    </OptionsRadioBase>
  </div>
</template>
<script>
import OptionsRadioBase from '@/components/options/OptionsRadioBase.vue';
import optionsAnimationsMixin from '@/mixins/animations/options-animation-mixin';
export default {
  components: { OptionsRadioBase },

  mixins: [optionsAnimationsMixin],

  props: {
    listRadio: {
      type: Array,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    modelValue: {
      required: true,
    },
  },
};
</script>

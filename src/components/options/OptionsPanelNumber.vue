<template>
  <div class="options" :class="animationClassesObj">
    <RadioBase
      v-for="(radio, index) in listRadio"
      :key="index"
      :name="name"
      :local-value="radio"
      :model-value="modelValue"
      @update:model-value="$emit('update:modelValue', $event)"
    >
      {{ radio }}
    </RadioBase>
  </div>
</template>
<script>
import RadioBase from '@/components/options/base/RadioBase.vue';
import optionsAnimationsMixin from '@/mixins/animations/options-animation-mixin';
export default {
  components: { RadioBase },

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

<template>
  <div class="options">
    <OptionsRadioBase
      v-for="(radio, index) in listRadio"
      :key="index"
      :name="name"
      :local-value="radio"
      :model-value="modelValue"
      @update:model-value="$emit('update:modelValue')"
    >
      {{ radio }}
    </OptionsRadioBase>
  </div>
</template>
<script>
import OptionsRadioBase from '@/components/options/OptionsRadioBase.vue';
export default {
  components: { OptionsRadioBase },
  props: {
    listRadio: {
      type: Array,
      required: true,
    },
    name: String,
    modelValue: {
      required: true,
    },
  },
};
</script>

<template>
  <CheckboxBase
    :name="checkboxName"
    class-extended="checkbox--content"
    :disabled="isDisabled"
    :local-value="true"
    :model-value="modelValue"
    @update:modelValue="$emit('update:modelValue', $event)"
  />
</template>

<script>
import CheckboxBase from '@/components/checkbox/CheckboxBase.vue';
export default {
  components: { CheckboxBase },
  props: ['modelValue', 'checkboxName'],
  computed: {
    isDisabled() {
      return this.modelValue === 'disabled';
    },
  },
};
</script>

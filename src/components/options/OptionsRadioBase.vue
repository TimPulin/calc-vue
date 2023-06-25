<template>
  <CheckboxBase
    eltype="radio"
    :name="name"
    class-extended="options__checkbox"
    :local-value="localValue"
    :model-value="modelValue"
    @update:modelValue="$emit('update:modelValue', $event)"
  >
    <slot></slot>
  </CheckboxBase>
</template>

<script>
import CheckboxBase from '@/components/checkbox/CheckboxBase.vue';
export default {
  components: { CheckboxBase },
  props: ['name', 'localValue', 'modelValue'],
};
</script>

<template>
  <OptionsRadioBase
    :name="name"
    :local-value="radio"
    :model-value="modelValue"
    @update:model-value="$emit('update:modelValue', $event)"
  >
    <IconsThombUp />
  </OptionsRadioBase>
</template>

<script>
import OptionsRadioBase from '@/components/options/OptionsRadioBase.vue';
import IconsThombUp from '@/components/icons/IconsThombUp.vue';

export default {
  components: { OptionsRadioBase, IconsThombUp },
  props: ['name', 'localValue', 'modelValue'],
};
</script>

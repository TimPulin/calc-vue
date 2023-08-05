<template>
  <RadioBase
    :name="name"
    :local-value="localValue"
    :model-value="modelValue"
    @update:model-value="$emit('update:modelValue', $event)"
  >
    <IconsThombUp />
  </RadioBase>
</template>

<script>
import RadioBase from '@/components/options/base/RadioBase.vue';
import IconsThombUp from '@/components/icons/IconsThombUp.vue';

export default {
  components: { RadioBase, IconsThombUp },
  props: ['name', 'localValue', 'modelValue'],
};
</script>

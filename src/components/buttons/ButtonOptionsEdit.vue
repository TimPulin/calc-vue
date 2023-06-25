<template>
  <ButtonOptions classExtention="edit">
    <span class="button-options__number">{{ index }}</span>
    <IconEdit />
  </ButtonOptions>
</template>

<script>
import ButtonOptions from './ButtonOptions.vue';
import IconEdit from '../icons/IconEdit.vue';
export default {
  components: { ButtonOptions, IconEdit },
  props: {
    index: {
      type: Number,
      default: 1,
    },
  },
};
</script>

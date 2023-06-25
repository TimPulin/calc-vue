<template>
  <button class="button button-options" :class="classExtended">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    classExtention: {
      type: String,
      default: null,
    },
  },

  computed: {
    classExtended() {
      return this.classExtention !== null
        ? `button-options--${this.classExtention}`
        : null;
    },
  },
};
</script>

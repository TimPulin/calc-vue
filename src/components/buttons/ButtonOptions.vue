<template>
  <button class="button button-options" :class="classExtended">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    classExtension: {
      type: String,
      default: null,
    },
  },

  computed: {
    classExtended() {
      return this.classExtension !== null
        ? `button-options--${this.classExtension}`
        : null;
    },
  },
};
</script>

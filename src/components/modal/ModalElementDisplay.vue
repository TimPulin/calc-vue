<template>
  <div class="modal__display">
    <div class="modal__element-name">
      {{ fullElementName }}
    </div>
    <div class="modal__scores">12.03</div>
  </div>
</template>

<script>
export default {
  props: ['element'],

  computed: {
    fullElementName() {
      if (this.element.getFullElementName) {
        return this.element.getFullElementName();
      } else {
        return '';
      }
    },
  },
};
</script>

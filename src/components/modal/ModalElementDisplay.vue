<template>
  <div class="modal__display">
    <div class="modal__element-name">
      {{ fullElementName }}
    </div>
    <div class="modal__scores">{{ scores }}</div>
  </div>
</template>

<script>
import formatScores from '@/utils/format-scores';

export default {
  props: ['element'],

  computed: {
    fullElementName() {
      if (this.element.fullElementName) {
        return this.element.fullElementName;
      } else {
        return '';
      }
    },

    scores() {
      return formatScores(this.element.fullElementBaseScores);
    },
  },
};
</script>

<template>
  <button class="button button--install" v-if="shown" @click="installPWA">
    <slot>Установить</slot>
  </button>
</template>

<script>
import pwaPromptMixin from '@/components/pwa/pwa-prompt-mixin';

export default {
  mixins: [pwaPromptMixin],
};
</script>

<!-- PWAPrompt.vue -->
<template>
  <div v-if="shown">
    Добавить приложение на домашний экран?

    <button class="button button--install" @click="installPWA">
      Установить
    </button>

    <button class="button button--install-reject" @click="dismissPrompt">
      Нет
    </button>
  </div>
</template>

<script>
import pwaPromptMixin from '@/components/pwa/pwa-prompt-mixin';

export default {
  mixins: [pwaPromptMixin],
};
</script>

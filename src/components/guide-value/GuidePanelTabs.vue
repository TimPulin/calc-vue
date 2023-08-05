<template>
  <ul class="panel-tabs options--panel-tabs">
    <li class="panel-tabs__item">
      <OptionsRadioBase
        name="element-type"
        local-value="jump"
        :model-value="activeTab"
        @update:model-value="$emit('update:model-value', $event)"
      >
        Прыжок
      </OptionsRadioBase>
    </li>

    <li class="panel-tabs__item">
      <OptionsRadioBase
        name="element-type"
        local-value="spin"
        :model-value="activeTab"
        @update:model-value="$emit('update:model-value', $event)"
      >
        Вращение
      </OptionsRadioBase>
    </li>

    <li class="panel-tabs__item">
      <OptionsRadioBase
        name="element-type"
        local-value="step"
        :model-value="activeTab"
        @update:model-value="$emit('update:model-value', $event)"
      >
        Дорожка
      </OptionsRadioBase>
    </li>
  </ul>
</template>

<script>
import OptionsRadioBase from '@/components/options/OptionsRadioBase.vue';

export default {
  components: { OptionsRadioBase },

  props: ['activeTab'],

  emits: ['update:model-value'],
};
</script>

<template>
  <ul class="panel-tabs options--panel-tabs">
    <li class="panel-tabs__item">
      <RadioBase
        name="element-type"
        local-value="jump"
        :model-value="activeTab"
        @update:model-value="$emit('update:model-value', $event)"
      >
        Прыжок
      </RadioBase>
    </li>

    <li class="panel-tabs__item">
      <RadioBase
        name="element-type"
        local-value="spin"
        :model-value="activeTab"
        @update:model-value="$emit('update:model-value', $event)"
      >
        Вращение
      </RadioBase>
    </li>

    <li class="panel-tabs__item">
      <RadioBase
        name="element-type"
        local-value="step"
        :model-value="activeTab"
        @update:model-value="$emit('update:model-value', $event)"
      >
        Дорожка
      </RadioBase>
    </li>
  </ul>
</template>

<script>
import RadioBase from '@/components/checkbox/RadioBase.vue';

export default {
  components: { RadioBase },

  props: ['activeTab'],

  emits: ['update:model-value'],
};
</script>

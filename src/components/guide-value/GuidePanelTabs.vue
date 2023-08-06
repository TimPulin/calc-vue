<template>
  <ul class="panel-tabs options--panel-tabs">
    <li>
      <RadioBase
        name="element-type"
        local-value="jumps"
        :model-value="activeTab"
        @update:model-value="$emit('update:model-value', $event)"
      >
        Прыжок
      </RadioBase>
    </li>

    <li>
      <RadioBase
        name="element-type"
        local-value="spins"
        :model-value="activeTab"
        @update:model-value="$emit('update:model-value', $event)"
      >
        Вращение
      </RadioBase>
    </li>

    <li>
      <RadioBase
        name="element-type"
        local-value="steps"
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

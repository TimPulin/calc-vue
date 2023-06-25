<template>
  <div class="options options--type" :class="[animationClassesObj]">
    <OptionsRadioBase
      name="element-type"
      local-value="jump"
      v-model="localValue"
    >
      <IconJump />
      Прыжок
    </OptionsRadioBase>

    <OptionsRadioBase
      name="element-type"
      local-value="spin"
      v-model="localValue"
    >
      <IconSpin />
      Вращение
    </OptionsRadioBase>

    <OptionsRadioBase
      name="element-type"
      local-value="step"
      v-model="localValue"
    >
      <IconStep />
      Дорожка
    </OptionsRadioBase>
  </div>
</template>

<script>
import OptionsRadioBase from '@/components/options/OptionsRadioBase.vue';
import IconJump from '@/components/icons/IconJump.vue';
import IconSpin from '@/components/icons/IconSpin.vue';
import IconStep from '@/components/icons/IconStep.vue';

import optionsAnimationsMixin from '@/mixins/options-animation-mixin';

export default {
  components: { OptionsRadioBase, IconJump, IconSpin, IconStep },

  mixins: [optionsAnimationsMixin],

  // TODO заменить props и localValue на mixin localValueMixin, хотя не уверен
  props: ['modelValue'],

  computed: {
    localValue: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit('update:modelValue', value);
      },
    },
  },
};
</script>

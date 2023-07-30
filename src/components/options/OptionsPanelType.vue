<template>
  <div class="options options--type" :class="[animationClassesObj]">
    <OptionsRadioBase
      name="element-type"
      local-value="jump"
      v-model="localValue"
      @click="callOpenModalElement('jump')"
    >
      <IconJump />
      Прыжок
    </OptionsRadioBase>

    <OptionsRadioBase
      name="element-type"
      local-value="spin"
      v-model="localValue"
      @click="callOpenModalElement('spin')"
    >
      <IconSpin />
      Вращение
    </OptionsRadioBase>

    <OptionsRadioBase
      name="element-type"
      local-value="step"
      v-model="localValue"
      @click="callOpenModalElement('step')"
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

import optionsAnimationsMixin from '@/mixins/animations/options-animation-mixin';

export default {
  components: { OptionsRadioBase, IconJump, IconSpin, IconStep },

  mixins: [optionsAnimationsMixin],

  // TODO заменить props и localValue на mixin localValueMixin, хотя не уверен
  props: ['modelValue'],

  emits: ['callOpenModalElement'],

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
  methods: {
    callOpenModalElement(value) {
      this.$emit('callOpenModalElement', value);
    },
  },
};
</script>

<template>
  <div class="options options--type" :class="[animationClassesObj]">
    <RadioBase
      name="element-type"
      local-value="jump"
      v-model="localValue"
      @click="callOpenModalElement('jump')"
    >
      <IconJump />
      Прыжок
    </RadioBase>

    <RadioBase
      name="element-type"
      local-value="spin"
      v-model="localValue"
      @click="callOpenModalElement('spin')"
    >
      <IconSpin />
      Вращение
    </RadioBase>

    <RadioBase
      name="element-type"
      local-value="step"
      v-model="localValue"
      @click="callOpenModalElement('step')"
    >
      <IconStep />
      Дорожка
    </RadioBase>
  </div>
</template>

<script>
import RadioBase from '@/components/options/base/RadioBase.vue';
import IconJump from '@/components/icons/IconJump.vue';
import IconSpin from '@/components/icons/IconSpin.vue';
import IconStep from '@/components/icons/IconStep.vue';

import optionsAnimationsMixin from '@/mixins/animations/options-animation-mixin';

export default {
  components: { RadioBase, IconJump, IconSpin, IconStep },

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

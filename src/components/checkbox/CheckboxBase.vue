<template>
  <label class="checkbox" :class="[classesObject, classExtended]">
    <slot></slot>
    <input
      class="checkbox__input"
      :type="eltype"
      :name="name"
      :disabled="isDisabled"
      :value="localValue"
      v-model="currentValue"
    />
  </label>
</template>

<script>
export default {
  props: {
    eltype: {
      type: String,
      default: 'checkbox',
    },
    name: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    classExtended: {
      type: String,
      default: '',
    },
    localValue: {
      type: [String, Number, Boolean],
      required: true,
    },
    modelValue: {
      type: [String, Number, Boolean],
      required: true,
    },
  },

  emits: ['update: modelValue'],

  computed: {
    currentValue: {
      get() {
        return this.modelValue;
      },
      set(localValue) {
        this.$emit('update:modelValue', localValue);
      },
    },
    classesObject() {
      return {
        'checkbox--checked': this.isChecked,
        'checkbox--disabled': this.isDisabled,
      };
    },
    isChecked() {
      return this.localValue === this.currentValue;
    },
    isDisabled() {
      return this.disabled;
    },
  },
};
</script>

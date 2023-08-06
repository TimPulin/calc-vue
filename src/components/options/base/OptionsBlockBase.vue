<template>
  <div class="wrapper-modal-panel">
    <ButtonOptions
      @click="openPanel($event)"
      :class="classObject"
      v-if="isButtonOptionsShow"
    >
      {{ modelValue }}
    </ButtonOptions>

    <OptionsPanelBase
      class="options--modal-panel"
      :class="classExtended"
      options-class-animation="table-calc-options"
      options-class-duration="--open-options-animation-duration"
      :panel-options-open="isOptionsOpen.panelOptionsOpen"
      :name="optionsPanelName"
      :listRadio="listRadio"
      :model-value="modelValue"
      @update:model-value="$emit('update:model-value', $event)"
    >
      <slot></slot>
    </OptionsPanelBase>
  </div>
</template>

<script>
import OptionsPanelBase from '@/components/options/base/OptionsPanelBase.vue';
import ButtonOptions from '@/components/buttons/ButtonOptions.vue';
import clickListenerOnDocumentMixin from '@/mixins/click-listener-on-document-mixin';

export default {
  components: { OptionsPanelBase, ButtonOptions },
  mixins: [clickListenerOnDocumentMixin],

  props: {
    listRadio: Array,
    modelValue: [String, Number],
    optionsPanelName: String,
    classExtended: { type: String },
    isButtonOptionsShow: {
      type: Boolean,
      default: true,
    },
    isButtonOptionsLocked: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      isOptionsOpen: {
        panelOptionsOpen: false,
      },
    };
  },

  computed: {
    classObject() {
      return {
        'element-disabled': this.isButtonOptionsLocked,
      };
    },
  },

  methods: {
    openPanel(event) {
      this.isOptionsOpen.panelOptionsOpen = true;
      this.addClickListenerOnDocument('panelOptionsOpen', event.target);
    },
  },
};
</script>

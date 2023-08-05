<template>
  <div class="wrapper-modal-panel">
    <ButtonOptions @click="openPanel($event)">
      {{ elementProperty }}
    </ButtonOptions>

    <OptionsPanelNumber
      class="options--modal-panel"
      options-class-animation="table-calc-options"
      options-class-duration="--open-options-animation-duration"
      :panel-options-open="isOptionsOpen.panelOptionsOpen"
      :name="optionsPanelName"
      :listRadio="listRadio"
      :model-value="elementProperty"
      @update:model-value="$emit('update:model-value', $event)"
    />
  </div>
</template>

<script>
import OptionsPanelNumber from '@/components/options/OptionsPanelNumber.vue';
import ButtonOptions from '@/components/buttons/ButtonOptions.vue';
import clickListenerOnDocumentMixin from '@/mixins/click-listener-on-document-mixin';

export default {
  components: { OptionsPanelNumber, ButtonOptions },
  mixins: [clickListenerOnDocumentMixin],

  props: ['listRadio', 'elementProperty', 'optionsPanelName'],

  data() {
    return {
      isOptionsOpen: {
        panelOptionsOpen: false,
      },
    };
  },

  methods: {
    openPanel(event) {
      this.isOptionsOpen.panelOptionsOpen = true;
      this.addClickListenerOnDocument('panelOptionsOpen', event.target);
    },
  },
};
</script>

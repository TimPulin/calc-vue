<template>
  <tr>
    <td>{{ elementInitProperties.legend }}</td>

    <OptionsBlockBase
      :options-panel-name="optionsPanelName"
      :list-radio="listRadioGoe"
      :element-property="elementProperty"
      @update:model-value="updateElementGoe($event)"
    />

    <td>
      <ButtonOptions @click="openPanelLevel($event)">
        {{ element.elementName[0].level }}
      </ButtonOptions>

      <OptionsPanelNumber
        class="options--goe"
        options-class-animation="table-calc-options"
        options-class-duration="--open-options-animation-duration"
        v-model:panel-options-open="isOptionsOpen.panelLevelOpen"
        :name="`level-${index}`"
        :list-radio="['B', 1, 2, 3, 4]"
        :model-value="element.elementName[0].level"
        @update:model-value="updateElementProperty($event, 'level')"
      />
    </td>
    <td class="tr__section">
      <OptionsBlockBase
        :options-panel-name="optionsPanelName"
        :list-radio="listRadioGoe"
        :element-property="elementProperty"
        @update:model-value="updateElementGoe($event)"
      />
    </td>
  </tr>
</template>

<script>
import createProgramElement from '@/utils/create-program-element/create-program-element.js';

import clickListenerOnDocumentMixin from '@/mixins/click-listener-on-document-mixin';
import OptionsBlockBase from '@/components/options/base/OptionsBlockBase.vue';
import ButtonOptions from '@/components/buttons/ButtonOptions.vue';
import OptionsPanelNumber from '../options/OptionsPanelNumber.vue';

export default {
  components: { OptionsBlockBase, ButtonOptions, OptionsPanelNumber },

  mixins: [clickListenerOnDocumentMixin],

  props: {
    elementInitProperties: {
      required: true,
      type: Object,
    },
    index: Number,
  },

  data() {
    return {
      isOptionsOpen: {
        panelLevelOpen: false,
      },

      element: {},

      listRadioLevel: ['B', 1, 2, 3, 4],

      listRadioGoe: [-1, -2, -3, -4, -5, 0, 1, 2, 3, 4, 5],
    };
  },

  computed: {
    optionsPanelName() {
      return `goe-${this.element.index}`;
    },

    elementProperty() {
      return this.element.goe;
    },
  },

  created() {
    this.element = createProgramElement(
      this.index,
      this.elementInitProperties.type,
      this.elementInitProperties.name
    );
    this.element.elementName[0].level = 'B';
  },

  methods: {
    openPanelLevel(event) {
      this.isOptionsOpen.panelLevelOpen = true;
      this.addClickListenerOnDocument('panelLevelOpen', event.target);
    },

    updateElementProperty(value, propertyName) {
      this.element.elementName[0][propertyName] = value;
    },

    updateElementGoe(value) {
      this.element.goe = value;
    },
  },
};
</script>

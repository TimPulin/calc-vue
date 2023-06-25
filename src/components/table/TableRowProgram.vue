<template>
  <tr class="tr">
    <td class="tr__section tr__section--edit">
      <ButtonOptionsEdit :index="index + 1" @click="openPanelType" />

      <OptionsPanelType
        options-class-animation="options-type"
        options-class-duration="--open-options-animation-duration"
        v-model:panel-options-open="panelTypeOpen"
        :model-value="programElement.type"
        @update:modelValue="updateElementProperty($event, 'type')"
      />
    </td>

    <td class="tr__section tr__section--name">{{ programElement.name }}</td>

    <td class="tr__section tr__section--bonus">
      <CheckboxSecondPart
        :model-value="secondPart"
        @update:modelValue="updateElementProperty($event, 'secondPart')"
      />
    </td>

    <td class="tr__section">
      <ButtonOptions>0</ButtonOptions>
      <OptionsPanelNumber
        class="options--goe"
        :listRadio="[0, 1, 2, 3, 4, 5]"
        :model-value="programElement.goe"
        @update:modelValue="updateElementProperty($event, 'goe')"
      />
    </td>

    <td class="tr__section tr__section--scores">{{ formatedScores }}</td>
  </tr>

  <tr class="tr--empty">
    <td class="tr__section" colspan="5"></td>
  </tr>
</template>

<script>
import formatScores from '@/utils/format-scores';

import ButtonOptions from '@/components/buttons/ButtonOptions.vue';
import ButtonOptionsEdit from '@/components/buttons/ButtonOptionsEdit.vue';
import CheckboxSecondPart from '@/components/checkbox/CheckboxPart2.vue';
import OptionsPanelType from '@/components/options/OptionsPanelType.vue';
import OptionsPanelNumber from '../options/OptionsPanelNumber.vue';

export default {
  components: {
    ButtonOptions,
    ButtonOptionsEdit,
    CheckboxSecondPart,
    OptionsPanelType,
    OptionsPanelNumber,
  },

  props: ['programElement', 'index'],

  data() {
    return {
      panelTypeOpen: false,
    };
  },

  computed: {
    formatedScores() {
      return formatScores(this.programElement.scores);
    },

    secondPart: {
      get() {
        return this.programElement.secondPart;
      },
      set(value) {
        this.$store.commit('updateProgramElementProperty', {
          index: this.index,
          programElement: { secondPart: value },
        });
      },
    },
  },

  methods: {
    updateElementProperty(value, propertyName) {
      this.$store.commit('updateProgramElementSingleProperty', {
        index: this.index,
        programElement: {
          propertyName: propertyName,
          propertyValue: value,
        },
      });
    },

    openPanelType() {
      this.panelTypeOpen = true;
    },
  },
};
</script>

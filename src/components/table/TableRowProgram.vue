<template>
  <tr class="tr">
    <td class="tr__section tr__section--edit">
      <ButtonOptionsEdit
        :index="programElement.index + 1"
        @click="openPanelType"
      />

      <!-- TODO заменить обработчик для openModal на что-то другое -->
      <OptionsPanelType
        options-class-animation="table-calc-options"
        options-class-duration="--open-options-animation-duration"
        v-model:panel-options-open="panelTypeOpen"
        :model-value="programElement.type"
        @update:modelValue="openModal($event, 'type')"
      />
    </td>

    <td class="tr__section tr__section--name">{{ programElement.name }}</td>

    <td class="tr__section tr__section--bonus">
      <CheckboxSecondPart
        :model-value="programElement.secondPart"
        @update:modelValue="updateElementProperty($event, 'secondPart')"
      />
    </td>

    <td class="tr__section tr__section--goe">
      <ButtonOptions @click="openPanelGoe">
        {{ programElement.goe }}</ButtonOptions
      >

      <OptionsPanelNumber
        class="options--goe"
        options-class-animation="table-calc-options"
        options-class-duration="--open-options-animation-duration"
        v-model:panel-options-open="panelGoeOpen"
        :name="`goe-${programElement.index}`"
        :listRadio="[-1, -2, -3, -4, -5, 0, 1, 2, 3, 4, 5]"
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

import { mapState } from 'vuex';

export default {
  components: {
    ButtonOptions,
    ButtonOptionsEdit,
    CheckboxSecondPart,
    OptionsPanelType,
    OptionsPanelNumber,
  },

  props: ['programElement'],

  data() {
    return {
      panelTypeOpen: false,
      panelGoeOpen: false,
    };
  },

  computed: {
    ...mapState(['modalElement']),

    formatedScores() {
      return formatScores(this.programElement.scores);
    },
  },

  methods: {
    updateElementProperty(value, propertyName) {
      this.$store.commit('updateProgramElementSingleProperty', {
        index: this.programElement.index,
        programElement: {
          propertyName: propertyName,
          propertyValue: value,
        },
      });
    },

    openPanelType() {
      this.panelTypeOpen = true;
    },

    openPanelGoe() {
      this.panelGoeOpen = true;
    },

    openModal(value) {
      if (value !== undefined) {
        this.updateElementProperty(value, 'type');
        this.$store.commit(
          'copyProgramElementForEditing',
          this.programElement.index
        );
        this.modalElement.show();
      }
    },
  },
};
</script>

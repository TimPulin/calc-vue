<template>
  <tr class="tr">
    <td class="tr__section tr__section--edit">
      <ButtonOptionsEdit
        :index="programElement.index + 1"
        @click="openPanelType($event)"
      />

      <!-- TODO заменить обработчик для openModal на что-то другое -->
      <OptionsPanelType
        options-class-animation="table-calc-options"
        options-class-duration="--open-options-animation-duration"
        v-model:panel-options-open="isOptionsOpen.panelTypeOpen"
        :model-value="programElement.type"
        @call-open-modal-element="handleOpenModal($event, 'type')"
      />
    </td>

    <td class="tr__section tr__section--name">{{ programElement.name }}</td>

    <td class="tr__section tr__section--bonus">
      <CheckboxSecondPart
        :checkbox-name="`second-part${index}`"
        :model-value="programElement.secondPart"
        @update:modelValue="updateElementProperty($event, 'secondPart')"
      />
    </td>

    <td class="tr__section tr__section--goe">
      <ButtonOptions @click="openPanelGoe($event)">
        {{ programElement.goe }}</ButtonOptions
      >

      <OptionsPanelNumber
        class="options--goe"
        options-class-animation="table-calc-options"
        options-class-duration="--open-options-animation-duration"
        v-model:panel-options-open="isOptionsOpen.panelGoeOpen"
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

import clickListenerOnDocumentMixin from '@/mixins/click-listener-on-document-mixin';
import openModalAnimationMixin from '@/mixins/open&close-modal-animation/open-modal-animation-mixin';

import { mapState } from 'vuex';

export default {
  components: {
    ButtonOptions,
    ButtonOptionsEdit,
    CheckboxSecondPart,
    OptionsPanelType,
    OptionsPanelNumber,
  },

  mixins: [clickListenerOnDocumentMixin, openModalAnimationMixin],

  props: ['programElement', 'index'],

  data() {
    return {
      isOptionsOpen: {
        panelTypeOpen: false,
        panelGoeOpen: false,
      },
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

    openPanelType(event) {
      this.isOptionsOpen.panelTypeOpen = true;
      this.addClickListenerOnDocument('panelTypeOpen', event.target);
    },

    openPanelGoe(event) {
      this.isOptionsOpen.panelGoeOpen = true;
      this.addClickListenerOnDocument('panelGoeOpen', event.target);
    },

    handleOpenModal(value) {
      if (value !== undefined) {
        this.updateElementProperty(value, 'type');
        this.$store.commit(
          'copyProgramElementForEditing',
          this.programElement.index
        );
        this.openModal();
      }
    },
  },
};
</script>

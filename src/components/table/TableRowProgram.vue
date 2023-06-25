<template>
  <tr class="tr">
    <td class="tr__section tr__section--edit">
      <ButtonOptionsEdit :index="index + 1" @click="openOptions" />

      <OptionsPanelType
        :class="[animationClassesObj]"
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

import optionsAnimationsMixin from '@/mixins/options-animation-mixin';

export default {
  components: {
    ButtonOptions,
    ButtonOptionsEdit,
    CheckboxSecondPart,
    OptionsPanelType,
  },

  mixins: [optionsAnimationsMixin],

  props: ['programElement', 'index'],

  data() {
    return {
      optionsClassAnimation: 'options-type',
      classDuration: '--open-options-animation-duration',
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
  },
};
</script>

<template>
  <OptionsPanelBase
    v-if="isShow('jump')"
    class="options--element"
    :listRadio="[1, 2, 3, 4]"
    name="rotations"
    v-model="localRotations"
    options-class-animation="options-element"
    :options-class-duration="optionsClassDuration"
    :panel-options-open="isOptionsOpen['rotations']"
    @options-is-opened="onOptionsIsOpened"
    @options-is-closed="onOptionsIsClosed"
  />

  <OptionsPanelBase
    v-if="isShow('jump')"
    class="options--element"
    :listRadio="['A', 'T', 'S', 'Lo', 'F', 'Lz', 'Eu']"
    name="jump-name"
    v-model="localName"
    options-class-animation="options-element"
    :options-class-duration="optionsClassDuration"
    :panel-options-open="isOptionsOpen['jump-name']"
    @options-is-opened="onOptionsIsOpened"
    @options-is-closed="onOptionsIsClosed"
  />

  <OptionsPanelBase
    v-if="isShow('jump')"
    class="options--element space-evenly"
    :listRadio="['<<', '<', 'q']"
    name="underrotate"
    v-model="localUnderrotate"
    options-class-animation="options-element"
    :options-class-duration="optionsClassDuration"
    :panel-options-open="isOptionsOpen['underrotate']"
    @options-is-opened="onOptionsIsOpened"
    @options-is-closed="onOptionsIsClosed"
  >
    <!-- TODO приствоить local-value = null, сделать проверку на null в  class Jump-->
    <OptionRadioThombUp
      name="underrotate"
      :local-value="''"
      v-model="localUnderrotate"
    />
  </OptionsPanelBase>

  <OptionsPanelBase
    v-if="isShow('jump')"
    class="options--element space-evenly"
    :listRadio="['e', '!']"
    name="edge"
    v-model="localEdge"
    options-class-animation="options-element"
    :options-class-duration="optionsClassDuration"
    :panel-options-open="isOptionsOpen['edge']"
    @options-is-opened="onOptionsIsOpened"
    @options-is-closed="onOptionsIsClosed"
  >
    <!-- TODO приствоить local-value = null, сделать проверку на null в  class Jump-->
    <OptionRadioThombUp
      name="jump-edge"
      :local-value="''"
      v-model="localEdge"
    />
  </OptionsPanelBase>

  <OptionsPanelBase
    v-if="isShow('spin')"
    class="options--element"
    :listRadio="['USp', 'SSp', 'CSp', 'CoSp', 'LSp']"
    name="spin-name"
    v-model="localName"
    options-class-animation="options-element"
    :options-class-duration="optionsClassDuration"
    :panel-options-open="isOptionsOpen['spin-name']"
    @options-is-opened="onOptionsIsOpened"
    @options-is-closed="onOptionsIsClosed"
  />

  <OptionsPanelBase
    v-if="isShow('spin') || isShow('step')"
    class="options--element"
    :listRadio="['B', '1', '2', '3', '4']"
    name="level"
    v-model="localLevel"
    options-class-animation="options-element"
    :options-class-duration="optionsClassDuration"
    :panel-options-open="isOptionsOpen['level']"
    @options-is-opened="onOptionsIsOpened"
    @options-is-closed="onOptionsIsClosed"
  />

  <OptionsPanelBase
    v-if="isShow('step')"
    class="options--element space-evenly"
    :listRadio="['StSq', 'ChSq']"
    name="step-name"
    v-model="localName"
    options-class-animation="options-element"
    :options-class-duration="optionsClassDuration"
    :panel-options-open="isOptionsOpen['step-name']"
    @options-is-opened="onOptionsIsOpened"
    @options-is-closed="onOptionsIsClosed"
  />
</template>

<script>
import OptionsPanelBase from '@/components/options/base/OptionsPanelBase.vue';
import OptionRadioThombUp from '@/components/options/OptionRadioThombUp.vue';

import clickListenerOnDocumentMixin from '@/mixins/click-listener-on-document-mixin';
import updateEditingElementProperty from '@/mixins/update-editing-element-property-mixin';

export default {
  components: {
    OptionsPanelBase,
    OptionRadioThombUp,
  },

  mixins: [clickListenerOnDocumentMixin, updateEditingElementProperty],

  props: ['element', 'isOptionsOpen', 'currentElementIndex', 'goThrowDown'],

  emits: ['update:go-throw-down'],

  data() {
    return {
      optionsClassDuration: '--open-options-animation-duration',
    };
  },

  computed: {
    localGoThrowDown: {
      get() {
        return this.goThrowDown;
      },
      set(value) {
        this.$emit('update:go-throw-down', value);
      },
    },

    localRotations: {
      get() {
        if (this.element.elementName.length > 0) {
          return this.element.elementName[this.currentElementIndex].rotations;
        } else {
          return '';
        }
      },
      set(value) {
        this.updateEditingElementProperty(value, 'rotations');
      },
    },

    localName: {
      get() {
        if (this.element.elementName.length > 0) {
          return this.element.elementName[this.currentElementIndex].name;
        } else {
          return '';
        }
      },
      set(value) {
        this.updateEditingElementProperty(value, 'name');
      },
    },

    localUnderrotate: {
      get() {
        if (this.element.elementName.length > 0) {
          return this.element.elementName[this.currentElementIndex].underrotate;
        } else {
          return '';
        }
      },
      set(value) {
        this.updateEditingElementProperty(value, 'underrotate');
      },
    },

    localEdge: {
      get() {
        if (this.element.elementName.length > 0) {
          return this.element.elementName[this.currentElementIndex].edge;
        } else {
          return '';
        }
      },
      set(value) {
        this.updateEditingElementProperty(value, 'edge');
      },
    },

    localLevel: {
      get() {
        if (this.element.elementName.length > 0) {
          return this.element.elementName[this.currentElementIndex].level;
        } else {
          return '';
        }
      },
      set(value) {
        this.updateEditingElementProperty(value, 'level');
      },
    },
  },

  methods: {
    isShow(currentType) {
      return this.element.type === currentType;
    },

    onOptionsIsOpened(optionsName) {
      this.addClickListenerOnDocument(optionsName, this.currentOptionsCaller);
    },

    onOptionsIsClosed() {
      this.localGoThrowDown = true;
    },
  },
};
</script>

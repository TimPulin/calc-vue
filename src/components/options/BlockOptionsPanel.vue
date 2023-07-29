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
</template>

<script>
import OptionsPanelBase from '@/components/options/OptionsPanelBase.vue';
// import OptionRadioThombUp from '@/components/options/OptionRadioThombUp.vue';

import clickListenerOnDocumentMixin from '@/mixins/click-listener-on-document-mixin';

export default {
  components: {
    OptionsPanelBase,
    // OptionRadioThombUp,
  },

  mixins: [clickListenerOnDocumentMixin],

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

    updateEditingElementProperty(value, propertyName) {
      this.$store.commit('updateEditingElementSingleProperty', {
        index: this.currentElementIndex,
        programElement: {
          propertyName: propertyName,
          propertyValue: value,
        },
      });
    },
  },
};
</script>

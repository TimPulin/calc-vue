<template>
  <tr>
    <td>{{ elementInitProperties.legend }}</td>

    <td class="tr__section">
      <OptionsBlockLevel
        :index="element.index"
        :model-value="element.elementName[0].level"
        @update:model-value="updateElementProperty($event, 'level')"
      />
    </td>

    <td class="tr__section">
      <OptionsBlockGoe
        :index="element.index"
        :model-value="element.goe"
        @update:model-value="updateElementGoe($event)"
      />
    </td>
  </tr>
</template>

<script>
import createProgramElement from '@/utils/create-program-element/create-program-element.js';

import clickListenerOnDocumentMixin from '@/mixins/click-listener-on-document-mixin';
import OptionsBlockLevel from '@/components/options/OptionsBlockLevel.vue';
import OptionsBlockGoe from '@/components/options/OptionsBlockGoe.vue';

export default {
  components: {
    OptionsBlockLevel,
    OptionsBlockGoe,
  },

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
    };
  },

  computed: {
    optionsPanelName() {
      return `goe-${this.element.index}`;
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

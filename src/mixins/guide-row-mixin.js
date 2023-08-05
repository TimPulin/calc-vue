import createProgramElement from '@/utils/create-program-element/create-program-element.js';

const guideRowMixin = {
  props: {
    elementInitProperties: {
      required: true,
      type: Object,
    },
    index: Number,
  },

  data() {
    return {
      element: {},
    };
  },

  computed: {
    name() {
      return this.element.elementName[0];
    },
  },

  created() {
    this.element = createProgramElement(
      this.index,
      this.elementInitProperties.type,
      this.elementInitProperties.name
    );

    this.setElementProperties();
  },

  methods: {
    updateElementProperty(value, propertyName) {
      this.element.elementName[0][propertyName] = value;
    },

    updateElementGoe(value) {
      this.element.goe = value;
    },
  },
};

export default guideRowMixin;

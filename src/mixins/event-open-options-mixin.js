const eventOpenOptionsMixin = {
  emits: ['open-options'],

  methods: {
    createOpenOptionsEvent(optionsName) {
      this.$emit('open-options', optionsName);
    },
  },
};

export default eventOpenOptionsMixin;

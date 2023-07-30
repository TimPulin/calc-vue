const eventOpenOptionsMixin = {
  emits: ['open-options'],

  methods: {
    createOpenOptionsEvent(optionsName, currentOptionsCaller) {
      this.$emit('open-options', {
        optionsName: optionsName,
        currentOptionsCaller: currentOptionsCaller,
      });
    },
  },
};

export default eventOpenOptionsMixin;

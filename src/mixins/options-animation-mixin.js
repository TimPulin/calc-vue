import getAnimationDelay from '@/utils/get-animation-delay';

const optionsAnimationsMixin = {
  props: {
    panelOptionsOpen: {
      type: Boolean,
      require: true,
    },
    optionsClassAnimation: {
      type: String,
      require: true,
    },
    optionsClassDuration: {
      type: String,
      require: true,
    },
  },

  data() {
    return {
      optionsVisible: false,
      optionsOpening: false,
      optionsOpen: false,
      optionsClosing: false,
    };
  },

  watch: {
    panelOptionsOpen() {
      if (this.panelOptionsOpen) this.openOptions();
    },
  },

  computed: {
    animationClassesObj() {
      return {
        'options--visible': this.optionsVisible,
        [`${this.optionsClassAnimation}--opening`]: this.optionsOpening,
        [`${this.optionsClassAnimation}--open`]: this.optionsOpen,
        [`${this.optionsClassAnimation}--closing`]: this.optionsClosing,
      };
    },
  },

  methods: {
    openOptions() {
      this.optionsVisible = true;
      this.optionsOpening = true;
      this.handleAnimationsForwardEnd();
    },

    closeOptions() {
      this.optionsClosing = true;
      this.handleAnimationsBackwardEnd();
    },

    handleAnimationsForwardEnd() {
      const animationDelay = getAnimationDelay(this.optionsClassDuration);

      setTimeout(() => {
        this.optionsOpen = true;
        this.optionsOpening = false;
        this.optionsVisible = false;
        document.addEventListener('click', this.handleClickOnDocument, {
          once: true,
          capture: true,
        });
      }, animationDelay);
    },

    handleAnimationsBackwardEnd() {
      const animationDelay = getAnimationDelay(this.optionsClassDuration);

      setTimeout(() => {
        this.optionsOpen = false;
        this.optionsClosing = false;
        this.$emit('update:panelOptionsOpen', false);
      }, animationDelay);
    },

    handleClickOnDocument(event) {
      event.stopPropagation();

      const animationDelay = getAnimationDelay(this.optionsClassDuration);
      this.closeOptions();
      setTimeout(() => {
        event.target.dispatchEvent(new Event(event.type));
      }, animationDelay);
    },
  },
};

export default optionsAnimationsMixin;

import getAnimationDelay from '@/utils/get-animation-delay';

const optionsAnimationsMixin = {
  data() {
    return {
      anymationDelay: getAnimationDelay(this.optionsClassAnimation),
      optionsVisible: false,
      optionsOpening: false,
      optionsOpen: false,
      optionsClosing: false,
    };
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
      const animationDelay = getAnimationDelay(this.classDuration);

      setTimeout(() => {
        this.optionsOpen = true;
        this.optionsOpening = false;
        this.optionsVisible = false;
        document.addEventListener('click', this.handleClick, {
          once: true,
          capture: true,
        });
      }, animationDelay);
    },

    handleAnimationsBackwardEnd() {
      const animationDelay = getAnimationDelay(this.classDuration);

      setTimeout(() => {
        this.optionsOpen = false;
        this.optionsClosing = false;
      }, animationDelay);
    },

    handleClick(event) {
      event.stopPropagation();

      const animationDelay = getAnimationDelay(this.classDuration);
      this.closeOptions();
      setTimeout(() => {
        event.target.dispatchEvent(new Event(event.type));
      }, animationDelay);
    },
  },
};

export default optionsAnimationsMixin;

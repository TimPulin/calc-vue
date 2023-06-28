// В data КОМПОНЕНТА УСТАНОВИТЬ
// functionOnAnimationsEnd С ТРЕБУЕМОЙ ФУНКЦИЕЙ
// delayCorrectionForNextAnimation

import getAnimationDelay from '@/utils/get-animation-delay';

const ThrowAnimationMixin = {
  props: {
    benchmark: {
      require: true,
    },
  },

  data() {
    return {
      classThrowUp: 'options-element-caller--throw-up',
      classMoveDown: 'options-element-caller--move-down',
      currentButtonCaller: null,
      currentOptionsName: '',
    };
  },

  computed: {
    animationClassesObj() {
      return {};
    },
  },

  methods: {
    callOptions(event, optionsName) {
      this.currentButtonCaller = event.target;
      this.currentOptionsName = optionsName;
      this.throwUp(this.currentButtonCaller);
    },

    throwUp(button) {
      const coordsBenchmark = this.getCoords(this.benchmark);
      const coords = this.getCoords(button);

      this.setCoords(button, coordsBenchmark, coords);
      button.classList.add(this.classThrowUp);
      this.handleAnimationsBackwardEnd(button);
    },

    throwDown(button) {
      const coordsBenchmark = this.getCoords(this.benchmark);
      const coords = this.getCoords(button);

      this.setCoords(button, coordsBenchmark, coords);
      button.classList.add(this.classMoveDown);
      this.removeAnimationClass(button, this.classMoveDown);
    },

    handleAnimationsBackwardEnd(button) {
      const animationDelay = getAnimationDelay('--throw-up-animation-duration');
      this.removeAnimationClass(button, this.classThrowUp, animationDelay);
      setTimeout(() => {
        if (this.functionOnAnimationsEnd)
          this.functionOnAnimationsEnd(this.currentOptionsName);
      }, animationDelay - this.delayCorrectionForNextAnimation);
    },

    getCoords(button) {
      const coords = button.getBoundingClientRect();

      return {
        top: coords.y + window.scrollX,
        left: coords.x + window.scrollY,
      };
    },

    setCoords(button, coordsBenchmark, coords) {
      button.style.setProperty(
        '--top',
        `${coords.top - coordsBenchmark.top}px`
      );
      button.style.setProperty(
        '--left',
        `${coords.left - coordsBenchmark.left}px`
      );
    },

    removeAnimationClass(button, animationClass, animationDelay) {
      setTimeout(() => {
        button.classList.remove(animationClass);
      }, animationDelay);
    },
  },
};

export default ThrowAnimationMixin;

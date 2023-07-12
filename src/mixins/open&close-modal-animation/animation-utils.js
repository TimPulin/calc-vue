const animationUtilsMixin = {
  inject: ['overlayBody', 'overlayModal'],

  methods: {
    addOverlay() {
      this.overlayBody.classList.add('overlay--visible');

      setTimeout(() => {
        this.overlayBody.classList.add('opacity-wave');
      }, 100);
    },

    removeOverlay() {
      this.overlayBody.classList.remove('opacity-wave');
      setTimeout(() => {
        this.overlayBody.classList.remove('overlay--visible');
        this.setZIndexDefault();
      }, 600);
    },

    setZIndexNew() {
      const elementModalZIndex = getComputedStyle(
        this.overlayModal
      ).getPropertyValue('--bs-modal-zindex');
      this.overlayBody.style.setProperty(
        'z-index',
        `${Number(elementModalZIndex) + 1000}`
      );
    },

    setZIndexDefault() {
      this.overlayBody.style.setProperty('z-index', `1000`);
    },
  },
};

export default animationUtilsMixin;

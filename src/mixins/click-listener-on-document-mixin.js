import getAnimationDelay from '@/utils/get-animation-delay';

//  УСТАНОВТЬ В КОМПОНЕНТЕ optionsClassDuration

const clickListenerOnDocumentMixin = {
  methods: {
    addClickListenerOnDocument(optionsName, currentButton) {
      document.addEventListener(
        'click',
        (event) => {
          this.handleClickOnDocument(event, optionsName, currentButton);
        },
        {
          once: true,
          capture: true,
        }
      );
    },

    handleClickOnDocument(event, optionsName, currentButton) {
      event.stopPropagation();
      const animationDelay = getAnimationDelay(this.optionsClassDuration);
      this.isOptionsOpen[optionsName] = false;
      if (event.target != currentButton) {
        setTimeout(() => {
          event.target.dispatchEvent(new Event(event.type));
        }, animationDelay);
      }
    },
  },
};

export default clickListenerOnDocumentMixin;

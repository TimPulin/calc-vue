import getAnimationDelay from '@/utils/get-animation-delay';

//  УСТАНОВТЬ В КОМПОНЕНТЕ optionsClassDuration

const clickListenerOnDocumentMixin = {
  methods: {
    addClickListenerOnDocument(optionsName) {
      document.addEventListener(
        'click',
        (event) => {
          this.handleClickOnDocument(event, optionsName);
        },
        {
          once: true,
          capture: true,
        }
      );
    },

    handleClickOnDocument(event, optionsName) {
      event.stopPropagation();
      console.log(optionsName, 'documentListener');
      const animationDelay = getAnimationDelay(this.optionsClassDuration);
      this.isOptionsOpen[optionsName] = false;

      setTimeout(() => {
        event.target.dispatchEvent(new Event(event.type));
      }, animationDelay);
    },
  },
};

export default clickListenerOnDocumentMixin;

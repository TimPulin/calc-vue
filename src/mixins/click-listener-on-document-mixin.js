import getAnimationDelay from '@/utils/get-animation-delay';

//  УСТАНОВИТЬ В КОМПОНЕНТЕ optionsClassDuration

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
    // TODO для TableRowProgram сделать чтобы реагировал один раз (пока что modal вызывается дважды:
    // (первый раз при клике на кнопку вызова modal, второй - при обработке клика на документе)

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

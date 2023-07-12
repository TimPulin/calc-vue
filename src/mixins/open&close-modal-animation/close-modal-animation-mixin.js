import animationUtilsMixin from '@/mixins/open&close-modal-animation/animation-utils';
import { mapState } from 'vuex';

const closeModalAnimationMixin = {
  mixins: [animationUtilsMixin],

  computed: {
    ...mapState({
      modal: 'modalElement',
    }),
  },

  methods: {
    callToCloseModal(event) {
      if (event.target === event.currentTarget) {
        this.closeModal();
      }
    },
    closeModal() {
      this.setZIndexNew();
      this.addOverlay();
      setTimeout(() => {
        this.modal.hide();
      }, 300);
      setTimeout(() => {
        this.removeOverlay();
      }, 600);
    },
  },
};

export default closeModalAnimationMixin;

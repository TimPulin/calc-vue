import animationUtilsMixin from '@/mixins/open&close-modal-animation/animation-utils';
import { mapState } from 'vuex';

const openModalAnimationMixin = {
  mixins: [animationUtilsMixin],

  computed: {
    ...mapState({
      modal: 'modalElement',
    }),
  },

  methods: {
    openModal() {
      this.setZIndexNew();
      this.addOverlay();
      setTimeout(() => {
        this.modal.show();
      }, 300);
      setTimeout(() => {
        this.removeOverlay();
      }, 600);
    },
  },
};

export default openModalAnimationMixin;

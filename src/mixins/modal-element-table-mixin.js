import eventOpenOptionsMixin from '@/mixins/event-open-options-mixin';
import ThrowAnimationMixin from '@/mixins/throw-animation-mixin';

const modalElementTableMixin = {
  mixins: [eventOpenOptionsMixin, ThrowAnimationMixin],

  props: {
    nameList: {
      type: Array,
      require: true,
    },
  },

  data() {
    return {
      functionOnAnimationsEnd: this.createOpenOptionsEvent,
      delayCorrectionForNextAnimation: 100,
    };
  },

  computed: {
    name() {
      return this.nameList[0];
    },
  },
};

export default modalElementTableMixin;

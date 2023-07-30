import eventOpenOptionsMixin from '@/mixins/animations/event-open-options-mixin';
import ThrowAnimationMixin from '@/mixins/animations/throw-animation-mixin';
import formatedScoresMixin from '@/mixins/formated-scores-mixin';

const modalElementTableMixin = {
  mixins: [eventOpenOptionsMixin, ThrowAnimationMixin, formatedScoresMixin],

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

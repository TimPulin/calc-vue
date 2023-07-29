import formatScores from '@/utils/format-scores';

const formatedScoresMixin = {
  computed: {
    formatedScores() {
      if (this.name.getScores()) {
        return formatScores(this.name.getScores());
      } else {
        return formatScores(0);
      }
    },
  },
};

export default formatedScoresMixin;

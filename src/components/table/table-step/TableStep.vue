<template>
  <table class="table table--element">
    <thead class="thead">
      <tr>
        <th class="tr__section">
          <span class="tr__text">Элемент</span>
        </th>
        <th class="tr__section">
          <span class="tr__text">уровень</span>
        </th>
      </tr>
    </thead>

    <tbody class="tbody">
      <tr class="tr">
        <td class="tr__section">
          <button
            class="button options-element-caller button--editing"
            @click="callOptions($event, 'step-name')"
          >
            {{ name.name }}
          </button>
        </td>

        <td class="tr__section">
          <button
            class="button options-element-caller"
            @click="callOptions($event, 'level')"
          >
            {{ name.level }}
          </button>
        </td>

        <td class="tr__section">1.99</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import eventOpenOptionsMixin from '@/mixins/event-open-options-mixin';
import ThrowAnimationMixin from '@/mixins/throw-animation-mixin';

export default {
  mixins: [eventOpenOptionsMixin, ThrowAnimationMixin],

  props: {
    nameList: {
      type: Array,
      require: true,
    },
  },

  emits: ['open-options'],

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
</script>

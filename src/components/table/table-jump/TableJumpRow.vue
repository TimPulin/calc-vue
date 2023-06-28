<template>
  <tr class="tr">
    <td class="tr__section tr__section--options">
      <div class="tr__wrapper">
        <ButtonOptionsMinus @click="deleteJump" />
        <ButtonOptionsPlus @click="addJump" />
      </div>
    </td>
    <td class="tr__section">
      <button
        class="button options-element-caller"
        @click="callOptions($event, 'rotations')"
      >
        {{ name.rotations }}
      </button>
    </td>

    <td class="tr__section">
      <button
        class="button options-element-caller button--editing"
        @click="callOptions($event, 'jump-name')"
      >
        {{ name.name }}
      </button>
    </td>

    <td class="tr__section">
      <button
        class="button options-element-caller"
        @click="callOptions($event, 'underrotate')"
      >
        {{ name.underrotate }}
      </button>
    </td>

    <td class="tr__section">
      <button
        class="button options-element-caller"
        @click="callOptions($event, 'edge')"
      >
        {{ name.edge }}
      </button>
    </td>

    <td class="tr__section">1.99</td>
  </tr>
</template>

<script>
import ButtonOptionsMinus from '@/components/buttons/ButtonOptionsMinus.vue';
import ButtonOptionsPlus from '@/components/buttons/ButtonOptionsPlus.vue';
import eventOpenOptionsMixin from '@/mixins/event-open-options-mixin';
import ThrowAnimationMixin from '@/mixins/throw-animation-mixin';

export default {
  components: {
    ButtonOptionsMinus,
    ButtonOptionsPlus,
  },
  // TODO разобраться, почему не регистрируется событие 'open-options'
  mixins: [eventOpenOptionsMixin, ThrowAnimationMixin],

  props: {
    name: {
      type: Object,
      require: true,
    },
  },

  emits: ['add-jump', 'delete-jump'],

  data() {
    return {
      functionOnAnimationsEnd: this.createOpenOptionsEvent,
      delayCorrectionForNextAnimation: 100,
    };
  },

  methods: {
    addJump() {
      this.$emit('add-jump');
    },

    deleteJump() {
      this.$emit('delete-jump');
    },
  },
};
</script>

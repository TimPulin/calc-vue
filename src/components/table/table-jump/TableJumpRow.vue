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
        class="button options-element-caller button--freeze"
        @click="createOpenOptionsEvent('rotations')"
      >
        {{ name.rotations }}
      </button>
    </td>

    <td class="tr__section">
      <button
        class="button options-element-caller button--editing"
        @click="createOpenOptionsEvent('jump-name')"
      >
        {{ name.name }}
      </button>
    </td>

    <td class="tr__section">
      <button
        class="button options-element-caller"
        @click="createOpenOptionsEvent('underrotate')"
      >
        {{ name.underrotate }}
      </button>
    </td>

    <td class="tr__section">
      <button
        class="button options-element-caller"
        @click="createOpenOptionsEvent('edge')"
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

export default {
  components: {
    ButtonOptionsMinus,
    ButtonOptionsPlus,
  },
  // TODO разобраться, почему не регистрируется событие 'open-options'
  mixins: [eventOpenOptionsMixin],

  props: {
    name: {
      type: Object,
      require: true,
    },
  },

  emits: ['add-jump', 'delete-jump'],

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

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
import modalElementTableMixin from '@/mixins/modal-element-table-mixin';

export default {
  components: {
    ButtonOptionsMinus,
    ButtonOptionsPlus,
  },
  mixins: [modalElementTableMixin],

  props: {
    name: {
      type: Object,
      require: true,
    },
  },
  emits: ['open-optons', 'add-jump', 'delete-jump'],

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

<template>
  <tr class="tr">
    <td class="tr__section tr__section--options">
      <transition name="fade">
        <div class="tr__wrapper">
          <ButtonOptionsMinus
            @click="deleteJump"
            v-if="index === 1 || index == 2"
          />
          <ButtonOptionsPlus
            @click="addJump"
            v-if="index === 0 || index == 1"
          />
        </div>
      </transition>
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
    nameList: {
      type: Object,
      require: true,
    },
    index: Number,
  },

  emits: ['open-options', 'add-jump', 'delete-jump'],

  computed: {
    name() {
      return this.nameList;
    },
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

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

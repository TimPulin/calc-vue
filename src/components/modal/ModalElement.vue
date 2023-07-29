<template>
  <div
    class="modal"
    id="modal-element"
    tabindex="-1"
    aria-labelledby="modalLabel"
    data-bs-keyboard="false"
    aria-hidden="true"
    ref="overlayModal"
    @click="callToCloseModal($event)"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h2 class="modal-title fs-5">{{ element.type }}</h2>
          <button
            type="button"
            class="btn-close"
            aria-label="Close"
            @click="closeModal"
          ></button>
        </div>
        <div
          class="modal-body"
          id="benchmark-options-element"
          ref="benchmark-options-element"
        >
          <ModalDisplay :element="element" />

          <BlockOptionsPanel
            :element="element"
            :is-options-open="isOptionsOpen"
            :current-element-index="currentElementIndex"
            v-model:go-throw-down="goThrowDown"
          />

          <div class="modal__wrap-table">
            <TableJump
              v-if="isShow('jump')"
              :name-list="element.elementName"
              :benchmark="benchmarkOptionsElement"
              :go-throw-down="goThrowDown"
              @open-options="onOpenOptions"
              @add-jump="onAddJump"
              @delete-jump="onDeleteJump"
            />

            <TableSpin
              v-if="isShow('spin')"
              :name-list="element.elementName"
              :benchmark="benchmarkOptionsElement"
              @update:fly="updateEditingElementProperty($event, 'fly')"
              @update:change="updateEditingElementProperty($event, 'change')"
              @update:v="updateEditingElementProperty($event, 'v')"
              :go-throw-down="goThrowDown"
              @open-options="onOpenOptions"
            />

            <TableStep
              v-if="isShow('step')"
              :name-list="element.elementName"
              :benchmark="benchmarkOptionsElement"
              :go-throw-down="goThrowDown"
              @open-options="onOpenOptions"
            />
          </div>
          <!-- wrap-table -->
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="button button--reject"
            data-bs-dismiss="modal"
          >
            Закрыть
          </button>

          <button
            type="button"
            class="button button-fill"
            @click="handleSaveElement($event)"
          >
            Сохранить
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ModalDisplay from './ModalDisplay.vue';
import TableJump from '@/components/table/table-jump/TableJump.vue';
import TableSpin from '@/components/table/table-spin/TableSpin.vue';
import TableStep from '@/components/table/table-step/TableStep.vue';

import BlockOptionsPanel from '../options/BlockOptionsPanel.vue';

import clickListenerOnDocumentMixin from '@/mixins/click-listener-on-document-mixin';
import closeModalAnimationMixin from '@/mixins/open&close-modal-animation/close-modal-animation-mixin';
import updateEditingElementProperty from '@/mixins/update-editing-element-property-mixin';
import { mapState, mapMutations } from 'vuex';

export default {
  components: {
    ModalDisplay,
    TableJump,
    TableSpin,
    TableStep,
    BlockOptionsPanel,
  },

  mixins: [
    clickListenerOnDocumentMixin,
    closeModalAnimationMixin,
    updateEditingElementProperty,
  ],

  emits: ['update:overlayModal'],

  data() {
    return {
      currentOptionsName: '',
      currentOptionsCaller: null,
      currentElementIndex: 0,
      throwClassDuration: '--throw-up-animation-duration',
      goThrowDown: false,

      isOptionsOpen: {
        'jump-name': false,
        rotations: false,
        underrotate: false,
        edge: false,
        'spin-name': false,
        'step-name': false,
        level: false,
      },
    };
  },

  computed: {
    ...mapState({
      element: 'editingElement',
    }),

    localOverlayModal: {
      set(value) {
        this.$emit('update:overlayModal', value);
      },
    },

    benchmarkOptionsElement() {
      const benchmark = this.$refs['benchmark-options-element'];
      if (benchmark === undefined) {
        return null;
      } else {
        return benchmark;
      }
    },
  },

  mounted() {
    this.localOverlayModal = this.$refs.overlayModal;
  },

  methods: {
    ...mapMutations({
      updateElementPropert: 'updateEditingElementSingleProperty',
      saveElement: 'copyEditingElementToProgramElement',
    }),

    isShow(currentType) {
      return this.element.type === currentType;
    },

    onOpenOptions({ optionsName, currentOptionsCaller, elementIndex = 0 }) {
      this.currentOptionsName = optionsName;
      this.currentOptionsCaller = currentOptionsCaller;
      this.currentElementIndex = elementIndex;

      this.isOptionsOpen[optionsName] = true;
      this.goThrowDown = false;
    },

    onAddJump() {
      this.element.addNewJump();
    },

    onDeleteJump() {
      this.element.deleteJump();
    },

    handleSaveElement(event) {
      this.saveElement();
      this.callToCloseModal(event);
    },
  },
};
</script>

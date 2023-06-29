<template>
  <div
    class="modal"
    id="modal-element"
    tabindex="-1"
    aria-labelledby="modalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h2 class="modal-title fs-5">{{ element.type }}</h2>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div
          class="modal-body"
          id="benchmark-options-element"
          ref="benchmark-options-element"
        >
          <div class="modal__display">
            <div class="modal__element-name">3T+2a+2Lo></div>
            <div class="modal__scores">12.03</div>
          </div>

          <OptionsPanelBase
            v-if="isShow('jump')"
            class="options--element"
            :listRadio="[1, 2, 3, 4]"
            name="rotations"
            v-model="localRotations"
            options-class-animation="options-element"
            options-class-duration="--open-options-animation-duration"
            v-model:panel-options-open="isOptionsOpen['rotations']"
          />

          <OptionsPanelBase
            v-if="isShow('jump')"
            class="options--element"
            :listRadio="['A', 'T', 'S', 'Lo', 'F', 'Lz', 'Eu']"
            name="jump-name"
            v-model="localName"
            options-class-animation="options-element"
            options-class-duration="--open-options-animation-duration"
            v-model:panel-options-open="isOptionsOpen['jump-name']"
          />

          <OptionsPanelBase
            v-if="isShow('jump')"
            class="options--element space-evenly"
            :listRadio="['<<', '<', 'q']"
            name="underrotate"
            v-model="localUnderrotate"
            options-class-animation="options-element"
            options-class-duration="--open-options-animation-duration"
            v-model:panel-options-open="isOptionsOpen['underrotate']"
          >
            <!-- TODO приствоить local-value = null, сделать проверку на null в  class Jump-->
            <OptionRadioThombUp
              name="underrotate"
              :local-value="''"
              v-model="localUnderrotate"
            />
          </OptionsPanelBase>

          <OptionsPanelBase
            v-if="isShow('jump')"
            class="options--element space-evenly"
            :listRadio="['e', '!']"
            name="edge"
            v-model="localEdge"
            options-class-animation="options-element"
            options-class-duration="--open-options-animation-duration"
            v-model:panel-options-open="isOptionsOpen['edge']"
          >
            <!-- TODO приствоить local-value = null, сделать проверку на null в  class Jump-->
            <OptionRadioThombUp
              name="jump-edge"
              :local-value="''"
              v-model="localEdge"
            />
          </OptionsPanelBase>

          <OptionsPanelBase
            v-if="isShow('spin')"
            class="options--element"
            :listRadio="['USp', 'SSp', 'CSp', 'CoSp', 'LSp']"
            name="spin-name"
            v-model="localName"
            options-class-animation="options-element"
            options-class-duration="--open-options-animation-duration"
            v-model:panel-options-open="isOptionsOpen['spin-name']"
          />

          <OptionsPanelBase
            v-if="isShow('spin') || isShow('step')"
            class="options--element"
            :listRadio="['B', '1', '2', '3', '4']"
            name="level"
            v-model="localLevel"
            options-class-animation="options-element"
            options-class-duration="--open-options-animation-duration"
            v-model:panel-options-open="isOptionsOpen['level']"
          />

          <OptionsPanelBase
            v-if="isShow('step')"
            class="options--element space-evenly"
            :listRadio="['StSq', 'ChSq']"
            name="step-name"
            v-model="localName"
            options-class-animation="options-element"
            options-class-duration="--open-options-animation-duration"
            v-model:panel-options-open="isOptionsOpen['step-name']"
          />

          <div class="modal__wrap-table">
            <TableJump
              v-if="isShow('jump')"
              :name-list="element.name"
              :benchmark="benchmarkOptionsElement"
              @open-options="onOpenOptions"
              @add-jump="onAddJump"
              @delete-jump="onDeleteJump"
            />

            <TableSpin
              v-if="isShow('spin')"
              :name-list="element.name"
              :benchmark="benchmarkOptionsElement"
              @update:fly="updateEditingElementProperty($event, 'fly')"
              @update:change="updateEditingElementProperty($event, 'change')"
              @update:v="updateEditingElementProperty($event, 'v')"
              @open-options="onOpenOptions({ optionsName: $event })"
            />

            <TableStep
              v-if="isShow('step')"
              :name-list="element.name"
              :benchmark="benchmarkOptionsElement"
              @open-options="onOpenOptions({ optionsName: $event })"
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

          <button type="button" class="button button-fill">Сохранить</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TableJump from '@/components/table/table-jump/TableJump.vue';
import TableSpin from '@/components/table/table-spin/TableSpin.vue';
import TableStep from '@/components/table/table-step/TableStep.vue';
import OptionsPanelBase from '@/components/options/OptionsPanelBase.vue';
import OptionRadioThombUp from '@/components/options/OptionRadioThombUp.vue';
import { mapState, mapMutations } from 'vuex';

export default {
  components: {
    TableJump,
    TableSpin,
    TableStep,
    OptionsPanelBase,
    OptionRadioThombUp,
  },

  data() {
    return {
      currentOptionsName: '',
      currentElementIndex: 0,

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

    benchmarkOptionsElement() {
      const benchmark = this.$refs['benchmark-options-element'];
      if (benchmark === undefined) {
        return null;
      } else {
        return benchmark;
      }
    },

    localRotations: {
      get() {
        if (this.element.name.length > 0) {
          return this.element.name[this.currentElementIndex].rotations;
        } else {
          return '';
        }
      },
      set(value) {
        this.updateEditingElementProperty(value, 'rotations');
      },
    },

    localName: {
      get() {
        if (this.element.name.length > 0) {
          return this.element.name[this.currentElementIndex].name;
        } else {
          return '';
        }
      },
      set(value) {
        this.updateEditingElementProperty(value, 'name');
      },
    },

    localUnderrotate: {
      get() {
        if (this.element.name.length > 0) {
          return this.element.name[this.currentElementIndex].underrotate;
        } else {
          return '';
        }
      },
      set(value) {
        this.updateEditingElementProperty(value, 'underrotate');
      },
    },

    localEdge: {
      get() {
        if (this.element.name.length > 0) {
          return this.element.name[this.currentElementIndex].edge;
        } else {
          return '';
        }
      },
      set(value) {
        this.updateEditingElementProperty(value, 'edge');
      },
    },

    localLevel: {
      get() {
        if (this.element.name.length > 0) {
          return this.element.name[this.currentElementIndex].level;
        } else {
          return '';
        }
      },
      set(value) {
        this.updateEditingElementProperty(value, 'level');
      },
    },
  },

  methods: {
    ...mapMutations({
      updateElementPropert: 'updateEditingElementSingleProperty',
    }),

    isShow(currentType) {
      return this.element.type === currentType;
    },

    onOpenOptions({ optionsName, elementIndex = 0 }) {
      this.currentElementIndex = elementIndex;
      this.currentOptionsName = optionsName;
      this.isOptionsOpen[optionsName] = true;
    },

    onAddJump() {
      this.element.addNewJump();
    },

    onDeleteJump() {
      this.element.deleteJump();
    },

    updateEditingElementProperty(value, propertyName) {
      this.$store.commit('updateEditingElementSingleProperty', {
        index: this.currentElementIndex,
        programElement: {
          propertyName: propertyName,
          propertyValue: value,
        },
      });
    },
  },
};
</script>

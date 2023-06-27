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
        <div class="modal-body" id="benchmark-options-element">
          <div class="modal__display">
            <div class="modal__element-name">3T+2a+2Lo></div>
            <div class="modal__scores">12.03</div>
          </div>

          <OptionsPanelBase
            class="options--element"
            :listRadio="[1, 2, 3, 4]"
            name="rotations"
            v-model="localRotations"
            options-class-animation="options-element"
            options-class-duration="--open-options-animation-duration"
            v-model:panel-options-open="isOptionsRotationsOpen"
          />

          <OptionsPanelBase
            class="options--element"
            :listRadio="['A', 'T', 'S', 'Lo', 'F', 'Lz', 'Eu']"
            name="jump-name"
            v-model="localName"
            options-class-animation="options-element"
            options-class-duration="--open-options-animation-duration"
            v-model:panel-options-open="isOptionsJumpNameOpen"
          />

          <OptionsPanelBase
            class="options--element space-evenly"
            :listRadio="['<<', '<', 'q']"
            name="underrotate"
            v-model="localUnderrotate"
            options-class-animation="options-element"
            options-class-duration="--open-options-animation-duration"
            v-model:panel-options-open="isOptionsUnderrotateOpen"
          >
            <!-- TODO приствоить local-value = null, сделать проверку на null в  class Jump-->
            <OptionRadioThombUp
              name="underrotate"
              local-value="''"
              v-model="localUnderrotate"
            />
          </OptionsPanelBase>

          <OptionsPanelBase
            class="options--element space-evenly"
            :listRadio="['e', '!']"
            name="edge"
            v-model="localEdge"
            options-class-animation="options-element"
            options-class-duration="--open-options-animation-duration"
            v-model:panel-options-open="isOptionsEdgeOpen"
          >
            <!-- TODO приствоить local-value = null, сделать проверку на null в  class Jump-->
            <OptionRadioThombUp
              name="jump-edge"
              local-value="''"
              v-model="localEdge"
            />
          </OptionsPanelBase>

          <OptionsPanelBase
            class="options--element"
            :listRadio="['USp', 'SSp', 'CSp', 'CoSp', 'LSp']"
            name="spin-name"
            v-model="localSpinName"
            options-class-animation="options-element"
            options-class-duration="--open-options-animation-duration"
            v-model:panel-options-open="isOptionsSpinNameOpen"
          />

          <OptionsPanelBase
            class="options--element space-evenly"
            :listRadio="['StSq', 'ChSq']"
            name="step-name"
            v-model="localStepName"
            options-class-animation="options-element"
            options-class-duration="--open-options-animation-duration"
            v-model:panel-options-open="isOptionsStepNameOpen"
          />

          <div class="modal__wrap-table">
            <TableJump
              v-if="isTableShow('jump')"
              :name-list="element.name"
              @open-options="onOpenOptions"
              @add-jump="onAddJump"
              @delete-jump="onDeleteJump"
            />

            <table class="table table--element" v-if="isTableShow('spin')">
              <thead class="thead">
                <tr>
                  <th class="tr__section" colspan="2"></th>

                  <th class="tr__section">
                    <span class="tr__text">Элемент</span>
                  </th>
                  <th class="tr__section">
                    <span class="tr__text">уровень</span>
                  </th>
                  <th class="tr__section" colspan="2"></th>
                </tr>
              </thead>

              <tbody class="tbody">
                <tr class="tr">
                  <td class="tr__section">
                    <div class="tr__wrapper">
                      <label class="checkbox checkbox--option">
                        F
                        <input
                          value="a"
                          type="checkbox"
                          name="fly"
                          class="checkbox__input"
                        />
                      </label>
                    </div>
                  </td>

                  <td class="tr__section">
                    <div class="tr__wrapper">
                      <label class="checkbox checkbox--option">
                        C
                        <input
                          value="a"
                          type="checkbox"
                          name="change"
                          class="checkbox__input"
                        />
                      </label>
                    </div>
                  </td>

                  <td class="tr__section">
                    <div class="tr__wrapper">
                      <button
                        class="button button--editing options-element-caller"
                        data-options-id="spin-name"
                      >
                        CSp
                      </button>
                    </div>
                  </td>

                  <td class="tr__section">
                    <div class="tr__wrapper">
                      <button
                        class="button button--freeze"
                        data-options-id="numbers"
                      >
                        4
                      </button>
                    </div>
                  </td>

                  <td class="tr__section">
                    <div class="tr__wrapper">
                      <label class="checkbox checkbox--option">
                        V
                        <input
                          value="a"
                          type="checkbox"
                          name="v-error"
                          class="checkbox__input"
                        />
                      </label>
                    </div>
                  </td>

                  <td class="tr__section">1.99</td>
                </tr>
              </tbody>
            </table>

            <table class="table table--element" v-if="isTableShow('step')">
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
                      class="button button--editing options-element-caller"
                      data-options-id="spin-name"
                    >
                      StSq
                    </button>
                  </td>

                  <td class="tr__section">
                    <button
                      class="button button--freeze"
                      data-options-id="numbers"
                    >
                      4
                    </button>
                  </td>

                  <td class="tr__section">1.99</td>
                </tr>
              </tbody>
            </table>
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
import OptionsPanelBase from '@/components/options/OptionsPanelBase.vue';
import OptionRadioThombUp from '@/components/options/OptionRadioThombUp.vue';
import { mapState, mapMutations } from 'vuex';

export default {
  components: {
    TableJump,
    OptionsPanelBase,
    OptionRadioThombUp,
  },

  data() {
    return {
      currentOptionsName: '',
      currentElementIndex: 0,

      isOptionsJumpNameOpen: false,
      isOptionsRotationsOpen: false,
      isOptionsUnderrotateOpen: false,
      isOptionsEdgeOpen: false,

      isOptionsSpinNameOpen: false,
      isOptionsStepNameOpen: false,
    };
  },

  computed: {
    ...mapState({
      element: 'editingElement',
    }),

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
  },

  methods: {
    ...mapMutations({
      updateElementPropert: 'updateEditingElementSingleProperty',
    }),

    isTableShow(tableName) {
      return this.element.type === tableName;
    },

    onOpenOptions({ optionsName, elementIndex = 0 }) {
      this.currentElementIndex = elementIndex;
      this.currentOptionsName = optionsName;
      console.log(optionsName);
      switch (optionsName) {
        case 'jump-name':
          this.isOptionsJumpNameOpen = true;
          break;
        case 'rotations':
          this.isOptionsRotationsOpen = true;
          break;
        case 'underrotate':
          this.isOptionsUnderrotateOpen = true;
          break;
        case 'edge':
          this.isOptionsEdgeOpen = true;
          break;
      }
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

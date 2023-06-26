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
            name="number"
            v-model="localNumber"
            options-class-animation="options-element"
            options-class-duration="--open-options-animation-duration"
            v-model:panel-options-open="isOptionsNumberOpen"
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
            name="jump-underotation"
            v-model="localUnderotation"
            options-class-animation="options-element"
            options-class-duration="--open-options-animation-duration"
            v-model:panel-options-open="isOptionsUnderotationOpen"
          >
            <OptionRadioThombUp
              name="jump-underotation"
              local-value="''"
              v-model="localUnderotation"
            />
          </OptionsPanelBase>

          <OptionsPanelBase
            class="options--element space-evenly"
            :listRadio="['e', '!']"
            name="jump-edje"
            v-model="localEdje"
            options-class-animation="options-element"
            options-class-duration="--open-options-animation-duration"
            v-model:panel-options-open="isOptionsEdjeOpen"
          >
            <OptionRadioThombUp
              name="jump-edje"
              local-value="''"
              v-model="localEdje"
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
import { mapState } from 'vuex';

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
      isOptionsNumberOpen: false,
    };
  },

  computed: {
    ...mapState({
      element: 'editingElement',
    }),

    localName: {
      get() {
        if (this.element.name.length > 0) {
          return this.element.name[this.currentElementIndex].name;
        } else {
          return '';
        }
      },
      set(value) {
        this.element.name[this.currentElementIndex].name = value;
      },
    },

    localNumber: {
      get() {
        if (this.element.name.length > 0) {
          return this.element.name[this.currentElementIndex].rotations;
        } else {
          return '';
        }
      },
      set(value) {
        this.element.name[this.currentElementIndex].rotations = value;
      },
    },
  },

  methods: {
    isTableShow(tableName) {
      return this.element.type === tableName;
    },

    onOpenOptions({ optionsName, elementIndex = 0 }) {
      this.currentElementIndex = elementIndex;
      this.currentOptionsName = optionsName;

      switch (optionsName) {
        case 'jump-name':
          this.isOptionsJumpNameOpen = true;
          break;
        case 'number':
          this.isOptionsNumberOpen = true;
      }
    },

    onAddJump() {
      this.element.addNewJump();
    },

    onDeleteJump() {
      this.element.deleteJump();
    },
  },
};
</script>

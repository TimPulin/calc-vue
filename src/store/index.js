import { createStore } from 'vuex';
import createProgramElement from '@/utils/create-program-element';

export default createStore({
  state: {
    program: [],
    modalElementConfig: null,
    editingElement: {},
    editingElementIndex: null,
  },

  getters: {
    editingElementType(state) {
      if (state.editingElementIndex) {
        return state.program[state.editingElementIndex].type;
      } else {
        return '';
      }
    },
  },

  mutations: {
    cleanupProgram(state) {
      state.program.splice(0, state.program.length);
    },

    setProgramElement(state, { index, programElement }) {
      state.program[index] = programElement;
    },

    updateProgramElementProperties(state, { index, programElement }) {
      for (let key in programElement) {
        if (typeof programElement[key] === 'object') {
          state.program[index][key] = Object.assign({}, programElement[key]);
        } else {
          state.program[index][key] = programElement[key];
        }
      }
    },

    updateProgramElementSingleProperty(state, { index, programElement }) {
      const { propertyName, propertyValue } = programElement;
      state.program[index][propertyName] = propertyValue;
    },

    // MODAL OPERATIONS

    setModalElementConfig(state, modal) {
      state.modalElementConfig = modal;
    },

    // EDITING_ELEMENT OPERATIONS

    setEditingElement(state, element) {
      state.editingElement = element;
    },

    setEditingElementIndex(state, index) {
      state.editingElementIndex = index;
    },

    updateEditingElementSingleProperty(state, { index, programElement }) {
      const { propertyName, propertyValue } = programElement;
      state.program[index][propertyName] = propertyValue;
    },
  },

  actions: {
    createProgram(context, { elementAmount = 11 }) {
      context.commit('cleanupProgram');

      for (let i = 0; i < elementAmount; i++) {
        const programElement = createProgramElement();
        context.commit('setProgramElement', { index: i, programElement });
      }
    },

    createEditingElement(context) {
      const element = createProgramElement();
      context.commit('setEditingElement', element);
    },
  },

  modules: {},
});

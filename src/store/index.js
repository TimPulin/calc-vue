import { createStore } from 'vuex';
import createProgramElement from '@/utils/create-program-element';
import deepCopy from '@/utils/deep-copy';

export default createStore({
  state: {
    program: [],
    modalElement: null,
    editingElement: {},
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

    setModalElement(state, modal) {
      state.modalElement = modal;
    },

    // EDITING_ELEMENT OPERATIONS

    setEditingElement(state, element) {
      state.editingElement = element;
    },

    copyProgramElementForEditing(state, index) {
      state.editingElement.name = deepCopy(state.program[index].name);
      state.editingElement.type = state.program[index].type;
    },

    updateEditingElementSingleProperty(state, { index, programElement }) {
      const { propertyName, propertyValue } = programElement;
      state.editingElement.name[index][propertyName] = propertyValue;
    },
  },

  actions: {
    createProgram(context, { elementAmount = 11 }) {
      context.commit('cleanupProgram');

      for (let i = 0; i < elementAmount; i++) {
        const programElement = createProgramElement(i);
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

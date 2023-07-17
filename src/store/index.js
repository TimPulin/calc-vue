import { createStore } from 'vuex';
import createProgramElement from '@/utils/create-program-element/create-program-element';
import { cloneDeep } from 'lodash';

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
      state.editingElement = cloneDeep(state.program[index]);
    },

    updateEditingElementSingleProperty(state, { index, programElement }) {
      const { propertyName, propertyValue } = programElement;
      state.editingElement.elementName[index][propertyName] = propertyValue;
    },

    copyEditingElementToProgramElement(state) {
      const index = state.editingElement.index;
      state.program[index] = cloneDeep(state.editingElement);
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

    createEditingElement(context, { index, type }) {
      const element = createProgramElement(index, type);
      context.commit('setEditingElement', element);
    },
  },

  modules: {},
});

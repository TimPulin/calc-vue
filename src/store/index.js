import { createStore } from 'vuex';
import createProgramElement from '@/utils/create-program-element';

export default createStore({
  state: {
    program: [],
  },

  getters: {},

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
      console.log(propertyName, propertyValue);
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
  },

  modules: {},
});

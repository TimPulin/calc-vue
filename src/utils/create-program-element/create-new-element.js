import { elementsValueList } from '../elements-value-list';

function getName(element) {
  let name = '';

  element.forEach((item) => {
    if (item === '') {
      // console.log(item);
      name += '';
    } else {
      name += item;
    }
  });

  return name;
}

function createNewJump() {
  const element = {
    name: '',
    rotations: '',
    // TODO: проверку на null
    underrotate: '',
    edge: '',

    getFullName() {
      return getName([this.rotations, this.name, this.underrotate, this.edge]);
    },

    getScores() {
      const name = this.getFullName();
      const scores = elementsValueList[name.toLowerCase()];
      return scores;
    },
  };

  return element;
}

function createNewSpin() {
  return {
    fly: false,
    change: false,
    name: '',
    level: '',
    v: false,

    convertPropertyToString(property, value) {
      return property ? value : '';
    },

    getFullName() {
      return getName([
        this.convertPropertyToString(this.fly, 'F'),
        this.convertPropertyToString(this.change, 'C'),
        this.name,
        this.level,
        this.convertPropertyToString(this.v, 'V'),
      ]);
    },
  };
}

function createNewStep() {
  return {
    name: '',
    level: '',

    getFullName() {
      return getName([this.name, this.level]);
    },
  };
}

export { createNewJump, createNewSpin, createNewStep };

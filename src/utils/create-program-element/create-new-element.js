function getName(element) {
  let name = '';

  for (let i = 0; i < element.length; i++) {
    name += element[i];
  }

  return name;
}

function createNewJump() {
  return {
    name: '',
    rotations: '',
    // TODO: проверку на null
    underrotate: '',
    edge: '',

    getFullName() {
      return getName([this.rotations, this.name, this.underrotate, this.edge]);
    },
  };
}

function createNewSpin() {
  return {
    fly: false,
    change: false,
    name: '',
    level: '',
    v: false,

    convertPropertyToString(property, value) {
      property ? value : '';
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

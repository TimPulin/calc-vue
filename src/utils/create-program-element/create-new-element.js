import { elementsValueList } from '../elements-value-list';

class NewElement {
  getName(element) {
    let name = '';
    element.forEach((item) => {
      if (item === '') {
        name += '';
      } else {
        name += item;
      }
    });
    return name;
  }

  getScores() {
    const name = this.getFullName();
    const scores = elementsValueList[name.toLowerCase()];
    return scores;
  }
}

class NewElementJump extends NewElement {
  constructor() {
    super();
    this.name = '';
    this.rotations = '';
    // TODO = проверку на nul;
    this.underrotate = '';
    this.edge = '';
  }

  getFullName() {
    return this.getName([
      this.rotations,
      this.name,
      this.underrotate,
      this.edge,
    ]);
  }
}

class NewElementSpin extends NewElement {
  constructor() {
    super();
    this.fly = false;
    this.change = false;
    this.name = '';
    this.level = '';
    this.v = false;
  }

  convertPropertyToString(property, value) {
    return property ? value : '';
  }

  getFullName() {
    return this.getName([
      this.convertPropertyToString(this.fly, 'F'),
      this.convertPropertyToString(this.change, 'C'),
      this.name,
      this.level,
      this.convertPropertyToString(this.v, 'V'),
    ]);
  }
}

class NewElementStep extends NewElement {
  constructor() {
    super();
    this.name = '';
    this.level = '';
  }

  getFullName() {
    return this.getName([this.name, this.level]);
  }
}

function createNewJump() {
  return new NewElementJump();
}

function createNewSpin() {
  return new NewElementSpin();
}

function createNewStep() {
  return new NewElementStep();
}

export { createNewJump, createNewSpin, createNewStep };

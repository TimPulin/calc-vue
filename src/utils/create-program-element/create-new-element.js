import { elementsValueList } from '../elements-value-list';

class NewElement {
  constructor(name = '') {
    this.name = name;
  }

  get fullName() {
    return this._getFullName();
  }

  _getFullName() {
    return '';
  }

  _getName(element) {
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
    const name = this.fullName.toLowerCase();

    if (elementsValueList[name]) {
      return elementsValueList[name];
    } else {
      return 0;
    }
  }
}

export class NewElementJump extends NewElement {
  constructor(name = '') {
    super(name);
    this.rotations = '';
    // TODO = проверку на nul;
    this.underrotate = '';
    this.edge = '';
  }

  get lockEdge() {
    if (this.name.toLowerCase() === 'f' || this.name.toLowerCase() === 'lz') {
      return false;
    } else {
      return true;
    }
  }

  _getFullName() {
    return this._getName([
      this.rotations,
      this.name,
      this.underrotate,
      this.edge,
    ]);
  }
}

export class NewElementSpin extends NewElement {
  constructor(name = '') {
    super(name);
    this.fly = false;
    this.change = false;
    this.level = '';
    this.v = false;
  }

  convertPropertyToString(property, value) {
    return property ? value : '';
  }

  _getFullName() {
    return this._getName([
      this.convertPropertyToString(this.fly, 'F'),
      this.convertPropertyToString(this.change, 'C'),
      this.name,
      this.level,
      this.convertPropertyToString(this.v, 'V'),
    ]);
  }
}

export class NewElementStep extends NewElement {
  constructor(name = '') {
    super(name);
    this.level = '';
  }

  _getFullName() {
    return this._getName([this.name, this.level]);
  }
}

function createNewJump(name = '') {
  return new NewElementJump(name);
}

function createNewSpin(name = '') {
  return new NewElementSpin(name);
}

function createNewStep(name = '') {
  return new NewElementStep(name);
}

export { createNewJump, createNewSpin, createNewStep };

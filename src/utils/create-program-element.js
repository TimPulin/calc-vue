class ProgramElement {
  constructor(index) {
    this._index = index;
    this._type = '';
    this._name = [];
    this.scores = 0;
    this.goe = 0;
    this.secondPart = 'disabled';
  }

  get index() {
    return this._index;
  }

  get type() {
    return this._type;
  }
  set type(value) {
    const typeOld = this._type;
    this._type = value;
    this._setSecondPart(value);
    if (typeOld !== this._type) this._setNameConfig(value);
  }

  get name() {
    return this._name;
  }
  set name(value) {
    // TODO  проверить нужно ли это присваивание (сам set точно нужен)
    this._name = value;
  }

  _setSecondPart(value) {
    if (value !== 'jump') {
      this.secondPart = 'disabled';
    } else if (this.secondPart === 'disabled') {
      this.secondPart = false;
    }
  }

  _setNameConfig(value) {
    this._cleanUpName();
    switch (value) {
      case 'jump':
        this.addNewJump();
        break;
      case 'spin':
        this.addNewSpin();
        break;
      case 'step':
        this.addNewStep();
    }
  }

  _cleanUpName() {
    this._name.splice(0, this._name.length);
  }

  addNewJump() {
    const newJump = new Jump();
    if (this._name.length < 3) {
      this._name.push(newJump);
    } else {
      throw new WrongDataRange(
        'Превышена длина каскада. Допустимая длина - 3 прыжка'
      );
    }
  }

  deleteJump() {
    if (this._name.length > 1) {
      this._name.splice(this._name.length - 1, this._name.length);
    } else {
      throw new WrongDataRange(
        'Нельзя удалить единственный прыжок в прыжковом элементе'
      );
    }
  }

  addNewSpin() {
    const newSpin = new Spin();
    if (this._name.length < 1) {
      this._name.push(newSpin);
    } else {
      throw new WrongDataRange(
        'Превышена длина каскада. Допустимая длина - 1 вращение'
      );
    }
  }

  addNewStep() {
    const newStep = new Step();
    if (this._name.length < 1) {
      this._name.push(newStep);
    } else {
      throw new WrongDataRange(
        'Превышена длина каскада. Допустимая длина - 1 дорожка'
      );
    }
  }
}

class Jump {
  constructor() {
    this.name = '';
    this.rotations = '';
    // TODO проверку на null
    this.underrotate = '';
    this.edge = '';
  }
}

class Spin {
  constructor() {
    this.fly = '';
    this.change = '';
    this.name = '';
    this.level = '';
    this.v = '';
  }
}

class Step {
  constructor() {
    this.name = '';
    this.level = '';
  }
}

class WrongDataRange extends RangeError {
  constructor(message) {
    super(message);
    this.name = 'WrongDataRange';
  }
}

export default function createProgramElement(index) {
  return new ProgramElement(index);
}

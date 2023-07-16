import {
  createNewJump,
  createNewSpin,
  createNewStep,
} from './create-new-element';

class ProgramElement {
  constructor(index, type = 'empty') {
    this._index = index;
    this._type = type;

    this._elementName = [];
    this.scores = 0;
    this.goe = 0;
    this.secondPart = 'disabled';

    this._setElementNameConfig(type);
  }

  get index() {
    return this._index;
  }

  get type() {
    return this._type;
  }

  get elementName() {
    return this._elementName;
  }
  set elementName(value) {
    // TODO  проверить нужно ли это присваивание (сам set точно нужен)
    this._elementName = value;
  }

  _setSecondPart(value) {
    if (value !== 'jump') {
      this.secondPart = 'disabled';
    } else if (this.secondPart === 'disabled') {
      this.secondPart = false;
    }
  }

  _setElementNameConfig(value) {
    console.log(value);
    this._cleanUpElementName();
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

  _cleanUpElementName() {
    this._elementName.splice(0, this._elementName.length);
  }

  addNewJump() {
    const newJump = createNewJump();
    if (this._elementName.length < 3) {
      this._elementName.push(newJump);
    } else {
      throw new WrongDataRange(
        'Превышена длина каскада. Допустимая длина - 3 прыжка'
      );
    }
  }

  deleteJump() {
    if (this._elementName.length > 1) {
      this._elementName.splice(
        this._elementName.length - 1,
        this._elementName.length
      );
    } else {
      throw new WrongDataRange(
        'Нельзя удалить единственный прыжок в прыжковом элементе'
      );
    }
  }

  addNewSpin() {
    const newSpin = createNewSpin();
    if (this._elementName.length < 1) {
      this._elementName.push(newSpin);
    } else {
      throw new WrongDataRange(
        'Превышена длина. Допустимая длина - 1 вращение'
      );
    }
  }

  addNewStep() {
    const newStep = createNewStep();
    if (this._elementName.length < 1) {
      this._elementName.push(newStep);
    } else {
      throw new WrongDataRange('Превышена длина. Допустимая длина - 1 дорожка');
    }
  }
}

class WrongDataRange extends RangeError {
  constructor(message) {
    super(message);
    this.name = 'WrongDataRange';
  }
}

export default function createProgramElement(index, type) {
  return new ProgramElement(index, type);
}

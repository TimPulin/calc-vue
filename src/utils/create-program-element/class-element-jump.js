import { ProgramElement } from './class-program-element';
import { createNewJump } from './create-new-element';

export class ElementJump extends ProgramElement {
  constructor(index, name = '') {
    super(index);
    this._type = 'jump';
    this.addNewJump(name);

    this.secondPart = false;

    this.lockEu = true;
  }

  addNewJump(name = '') {
    const newJump = createNewJump(name);
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
}

class WrongDataRange extends RangeError {
  constructor(message) {
    super(message);
    this.name = 'WrongDataRange';
  }
}

import { ProgramElement } from './class-program-element';
import { createNewJump } from './create-new-element';

export class ElementJump extends ProgramElement {
  constructor(index) {
    super(index);
    this._type = 'jump';
    this._elementName.push(createNewJump());
    // this.elementName.push(createNewJump());

    this.secondPart = false;
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
}

class WrongDataRange extends RangeError {
  constructor(message) {
    super(message);
    this.name = 'WrongDataRange';
  }
}

import { ProgramElement } from './class-program-element';
import { createNewSpin } from './create-new-element';

export class ElementSpin extends ProgramElement {
  constructor(index) {
    super(index);
    this._type = 'spin';
    this._elementName.push(createNewSpin());
  }
}

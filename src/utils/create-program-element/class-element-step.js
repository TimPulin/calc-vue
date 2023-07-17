import { ProgramElement } from './class-program-element';
import { createNewStep } from './create-new-element';

export class ElementStep extends ProgramElement {
  constructor(index) {
    super(index);
    this._type = 'step';
    this._elementName.push(createNewStep());
  }
}

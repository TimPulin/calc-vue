import { ElementJump } from './class-element-jump';
import { ElementSpin } from './class-element-spin';
import { ElementStep } from './class-element-step';
import { ProgramElement } from './class-program-element';

export default function createProgramElement(index, type, name = '') {
  return setElementNameConfig(index, type, name);
}

function setElementNameConfig(index, type, name) {
  switch (type) {
    case 'jump':
      return new ElementJump(index, name);
    case 'spin':
      return new ElementSpin(index, name);
    case 'step':
      return new ElementStep(index, name);
    default:
      return new ProgramElement(index);
  }
}

import { ElementJump } from './class-element-jump';
import { ElementSpin } from './class-element-spin';
import { ElementStep } from './class-element-step';
import { ProgramElement } from './class-program-element';

export default function createProgramElement(index, type) {
  return setElementNameConfig(index, type);
}

function setElementNameConfig(index, type) {
  switch (type) {
    case 'jump':
      return new ElementJump(index);
    case 'spin':
      return new ElementSpin(index);
    case 'step':
      return new ElementStep(index);
    default:
      return new ProgramElement(index);
  }
}

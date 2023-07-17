export class ProgramElement {
  constructor(index) {
    this._index = index;
    this._type = 'empty';

    // this._elementName = [];
    this.elementName = [];

    this.scores = 0;
    this.goe = 0;
    this.secondPart = 'disabled';
    // this.fullElementName = '';

    // this._setElementNameConfig(type);
    // this._setSecondPart(type);
  }

  get index() {
    return this._index;
  }

  get type() {
    return this._type;
  }

  // get elementName() {
  //   return this._elementName;
  // }

  // set elementName(value) {
  //   // TODO  проверить нужно ли это присваивание (сам set точно нужен)
  //   this._elementName = value;
  // }

  getFullElementName() {
    let fullName = '';

    this.elementName.forEach((item) => {
      fullName += item.getFullName();
    });

    return fullName;
  }

  _setSecondPart(value) {
    if (value !== 'jump') {
      this.secondPart = 'disabled';
    } else if (this.secondPart === 'disabled') {
      this.secondPart = false;
    }
  }
}

export class ProgramElement {
  constructor(index) {
    this._index = index;
    this._type = 'empty';
    this._elementName = [];
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

  get elementName() {
    return this._elementName;
  }

  getFullElementName() {
    let fullName = '';
    // TODO сделать проверку на наличие содержания в _elementName в случае отсутствия возвращать ''

    for (let i = 0; i < this._elementName.length; i++) {
      if (i > 0) {
        fullName += `+${this._elementName[i].getFullName()}`;
      } else {
        fullName += `${this._elementName[i].getFullName()}`;
      }
    }
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

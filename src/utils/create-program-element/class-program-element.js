export class ProgramElement {
  constructor(index) {
    this._index = index;
    this._type = 'empty';
    this._elementName = [];
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

  get fullElementName() {
    return this._getFullElementName();
  }

  get fullElementScores() {
    return this._getFullElementScores();
  }

  get fullElementBaseScores() {
    return this._getBaseScores();
  }

  _getFullElementName() {
    let fullName = '';

    for (let i = 0; i < this._elementName.length; i++) {
      if (i > 0 && this._elementName[i].fullName.length > 0) {
        fullName += `+${this._elementName[i].fullName}`;
      } else {
        fullName += `${this._elementName[i].fullName}`;
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

  _getFullElementScores() {
    if (this._elementName.length > 0) {
      const baseScores = this._getBaseScores();
      const goeBonus = this._getGoeBonus();
      const secondPartRatio = this._getSecondPartRatio();

      return baseScores * secondPartRatio + goeBonus;
    } else {
      return 0;
    }
  }

  _getBaseScores() {
    return this._elementName.reduce((sumScores, element) => {
      return sumScores + element.getScores();
    }, 0);
  }

  _getSecondPartRatio() {
    return this.secondPart ? 1.1 : 1;
  }

  _getGoeBonus() {
    Array.prototype.max = function () {
      return Math.max.apply(null, this);
    };

    if (this._getFullElementName() === 'ChSq1') {
      return 0.5 * this.goe;
    } else {
      const arrScores = this._elementName.map((element) => element.getScores());
      const maxScores = arrScores.max();
      return maxScores * 0.1 * this.goe;
    }
  }
}

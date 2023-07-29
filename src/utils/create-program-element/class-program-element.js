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

    for (let i = 0; i < this._elementName.length; i++) {
      if (i > 0 && this._elementName[i].getFullName().length > 0) {
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

  getFullElementScores() {
    if (this._elementName.length > 0) {
      const baseScores = this.getBaseScores();
      const goeBonus = this.getGoeBonus();
      const secondPartRatio = this.getSecondPartRatio();

      return baseScores * secondPartRatio + goeBonus;
    } else {
      return 0;
    }
  }

  getBaseScores() {
    return this._elementName.reduce((sumScores, element) => {
      return sumScores + element.getScores();
    }, 0);
  }

  getSecondPartRatio() {
    return this.secondPart ? 1.1 : 1;
  }

  getGoeBonus() {
    Array.prototype.max = function () {
      return Math.max.apply(null, this);
    };

    if (this.getFullElementName() === 'ChSq1') {
      return 0.5 * this.goe;
    } else {
      const arrScores = this._elementName.map((element) => element.getScores());
      const maxScores = arrScores.max();
      return maxScores * 0.1 * this.goe;
    }
  }
}

export default function createProgramElement() {
  return {
    name: [],
    scores: 0,
    secondPart: 'disabled',
    _type: '',

    get type() {
      return this._type;
    },
    set type(value) {
      this._type = value;

      if (value !== 'jump') {
        this.secondPart = 'disabled';
      } else if (this.secondPart === 'disabled') {
        this.secondPart = false;
      }
    },
  };
}

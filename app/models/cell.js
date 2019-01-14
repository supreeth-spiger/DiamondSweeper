const UNKNOWN = 'unknown';
const EMPTY = '';
const DIAMOND = 'diamond';


class Cell {
  constructor(id) {
    this.id = id;
    this.image = UNKNOWN;
    this.value = '';
  }

  addDiamond() {
    if (this.value === '') {
      this.value = DIAMOND;
      return true;
    }
    return false;
  }


  reveal() {
    if (this.value === DIAMOND) {
      this.image = DIAMOND;
      return true;
    }

    this.image = EMPTY;
    return false;
  }
}

module.exports = Cell;

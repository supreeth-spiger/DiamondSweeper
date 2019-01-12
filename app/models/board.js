const Cell = require('./cell');

class Board {
  constructor() {
    this.cells = this._initialiseCells();
}

  _initialiseCells() {
    const cells = [];
    let cellId = 0;
    for (let i = 0; i < 8; i += 1) {
      cells[i] = [];
      for (let j = 0; j < 8; j += 1) {
        cells[i].push(new Cell(cellId));
        cellId += 1;
      }
    }
    return cells;
  }
}
module.exports = Board;

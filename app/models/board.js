const Cell = require('./cell');

class Board {
  constructor() {
    this.cells = this.initialiseCells();
    this.diamondCells = [];
    this.revealedDiamonds = 0;

    this.unopenedCells = 64;
    this.gameOver = false;

    this.addDiamonds();
}

  initialiseCells() {
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




  getCell(xIndex, yIndex) {
    return this.cells[xIndex][yIndex];
  }

  revealDiamond(id) {
    const cell = this.findCell(id);
    const diamondFound = cell.reveal();

    if (diamondFound) {
      this.revealedDiamonds += 1;
    } 

    if (this.revealedDiamonds === 8) {
      this.gameOver = true;
    }
  }

  findCoordinatesForId(id) {
    return { xIndex: parseInt(id / 8, 10), yIndex: id % 8 };
  }

  findCell(id) {
    const { xIndex, yIndex } = this.findCoordinatesForId(id);

    this.unopenedCells -= 1;
    return this.getCell(xIndex, yIndex);
  }

  getRandomCoordinates() {
    return ({
      xIndex: Math.floor(Math.random() * 8),
      yIndex: Math.floor(Math.random() * 8),
    });
  }

  addDiamonds() {
    let diamondCount = 0;
    while (diamondCount < 8) {
      const { xIndex, yIndex } = this.getRandomCoordinates();

      const status = this.getCell(xIndex, yIndex).addDiamond();

      if (status) {
        this.diamondCells.push([xIndex, yIndex]);
        diamondCount += 1;
      }
    }
  }

}
module.exports = Board;

import React, { Component } from 'react';

import Cell from './cell'
import Board from '../models/board'
const board = new Board();

class gameBoard extends React.Component {
  state = {
    cells: []
  }



  handleClickedCell = (event) => {
    alert('working on hiding diamonds in these cells')
    console.log("clicked individual cell", event);
  }

  render() {
    // const cells = this.state;


    const sweeperCells = board.cells.map(innerCells =>
      innerCells.map(cell =>
        (<Cell key={cell.id} id={cell.id} handleClickedCell={this.handleClickedCell} />)));


    return (
      <div className="wrapper">
        <div className="boardWrapper">
          {sweeperCells}
        </div>
      </div>
    );
  }
}


export default gameBoard;

import React, { Component } from 'react';
import {getGameData, revealCell } from './API';
import Cell from './cell';

class gameBoard extends React.Component {
  state = {
    cells: [],
    gameOver: false,
    score: 0,
  }

  componentDidMount() {
    const gameData = localStorage.getItem('gameData');

    if (!this.state.gameOver && gameData) { // fetch from localStorage
      this.setState({ ...JSON.parse(gameData) });
    } else {
      getGameData().then((response) => {
        localStorage.setItem('gameData', JSON.stringify(response));
        this.setState({ ...response });
      });
    }
  }

  handleClickedCell = (event) => {
    console.log('handle click full event', event);
    if (this.state.gameOver) return;
    console.log('handle click target event', event.target);

    const { id } = event.target;
    revealCell(id).then((response) => {
      localStorage.setItem('gameData', JSON.stringify(response));

      this.setState({ ...response }, () => {
        if (this.state.gameOver) {
          localStorage.removeItem('gameData');
        }
      });
    });
  }

  render() {
    const { cells, gameOver, score } = this.state;
    const styles = {
      textAlign: 'center',
      color: 'red',
      fontWeight: 'bold',
    };

    const sweeperCells = cells.map(innerCells =>
      innerCells.map(cell =>
        (<Cell key={cell.id} id={cell.id} handleClickedCell={this.handleClickedCell} className={`cell ${cell.image}`} />)));


    const gameOverMessage = gameOver ? (<p style={styles}> Game over!! Your score is: {score} </p>) : '';

    return (
      <div className="wrapper">
        {gameOverMessage}

        <div className="boardWrapper">
          {sweeperCells}
        </div>
      </div>
    );
  }
}


export default gameBoard;

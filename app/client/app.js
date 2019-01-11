import React from 'react';
import ReactDOM from 'react-dom';

import Board from './gameBoard';

// const App = () => (<Board />);

global.startApp = (container) => {
  console.log('Here is the container:', container); /* eslint-disable-line no-console */

  ReactDOM.render(
    <Board />,
    container
  );
};

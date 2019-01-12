import React from 'react';
import PropTypes from 'prop-types';

const Cell = ({ id, handleClickedCell }) => (
  <div className="cellWrapper">
    <div id={id} onClick={handleClickedCell} className="cell" />
  </div>
);

Cell.propTypes = {
  id: PropTypes.number.isRequired,
  handleClickedCell: PropTypes.func.isRequired,
};

export default Cell;
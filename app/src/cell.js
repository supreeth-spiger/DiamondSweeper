import React from 'react';
import PropTypes from 'prop-types';

const Cell = ({ id,className, handleClickedCell }) => (
  <div className="cellWrapper">
    <div id={id} onClick={handleClickedCell} className={className} />
  </div>
);

Cell.propTypes = {
  id: PropTypes.number.isRequired,
  className: PropTypes.string.isRequired,
  handleClickedCell: PropTypes.func.isRequired,
};

export default Cell;
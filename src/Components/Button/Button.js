import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onBtn }) => (
  <button className="Button" type="button" onClick={onBtn}>
    Load more
  </button>
);

Button.propTypes = {
  onBtn: PropTypes.func.isRequired,
};

export default Button;
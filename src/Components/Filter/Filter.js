import React from 'react';
import styles from './Filter.module.css'
import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => (
  <label>
    Filter by name
    <input className={styles.FilterInput} type="text" value={value} onChange={onChange} />
  </label>
);

Filter.propTypes  = {
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
}

export default Filter;
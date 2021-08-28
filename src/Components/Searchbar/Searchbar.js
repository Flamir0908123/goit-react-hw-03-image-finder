import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Searchbar extends Component {
  state = { query: '' };

  static propTypes = {
    onFormSubmit: PropTypes.func.isRequired,
  };
  handleInput = event => {
    this.setState({ query: event.target.value });
  };
  handleFormSubmit = event => {
    const { query } = this.state;
    event.preventDefault();

    this.props.onFormSubmit(query);

    this.setState({ query: '' });
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleFormSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleInput}
            value={this.state.query}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
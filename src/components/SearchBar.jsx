import { useState } from 'react';
import PropTypes from 'prop-types';
const SearchBar = ({ onFormSubmit }) => {
  const [value, setValue] = useState('');

  const handleSabmit = e => {
    e.preventDefault();

    onFormSubmit(value);
    setValue('');
  };

  const handleInputChange = e => {
    setValue(e.target.value);
  };

  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={handleSabmit}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          value={value}
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleInputChange}
        />
      </form>
    </header>
  );
};

export default SearchBar;

// SearchBar.propTypes = {
//   onFormSubmit: PropTypes.func.isRequired,
// };

import { useState } from 'react';

const SearchBar = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const handleSabmit = e => {
    e.preventDefault();

    onSubmit(value);
    setValue('');
  };

  const handleInputChange = e => {
    setValue(e.target.value);
  };

  return (
    <header>
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

// components/SearchBar.js
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <TextField
      label="Search Items"
      value={query}
      onChange={handleChange}
      fullWidth
      margin="normal"
    />
  );
};

export default SearchBar;

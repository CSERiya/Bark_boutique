import React from 'react';
import { TextField, Box } from '@mui/material';

const SearchBar = ({ onSearch }) => {
  const handleInputChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    <Box mb={2} display="flex" justifyContent="center" alignItems="center">
      <TextField
        label="Search Dog Breeds"
        variant="outlined"
        fullWidth
        onChange={handleInputChange}
        sx={{ margin: '12px', width: '80%', textAlign: 'center',
          }}
      />
    </Box>
  );
};

export default SearchBar;

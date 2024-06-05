import React from 'react';
import { TextField, Box } from '@mui/material';

const SearchBar = ({ onSearch }) => {
    
    // Function to handle input change and pass the search term to the parent component
  const handleInputChange = (event) => {
    onSearch(event.target.value);
  };

  return (
     // Container Box to center the search bar
    <Box mb={2} display="flex" justifyContent="center" alignItems="center">

    {/* TextField for the search input */}
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

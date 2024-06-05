import React, { useState } from 'react';
import { Container, Typography, Box } from '@mui/material';
import UserList from './components/UserList';
import SearchAppBar from './components/Navbar';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (term) => {
    setSearchQuery(term);
  };

  return (
    <>
      <SearchAppBar onSearch={handleSearch} />
      <Container>
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom textAlign='center' color='#C70039' fontWeight='800'
          fontSize='4vmax'> 
           Bark Boutique
          </Typography>
          <Typography variant="p" component="p" gutterBottom textAlign='center' fontWeight='400' fontFamily='cursive'>
          Search for your favourite Dog
          </Typography>
          <UserList searchQuery={searchQuery} />
        </Box>
      </Container>
    </>
  );
};

export default App;

import React, { useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import SearchBar from './SearchBar';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
    cursor: 'pointer',
  },
  marginLeft: 0,
  width: 'auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  marginTop: '5px',
  height: '100%',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '50%',
  textAlign: 'center',
  cursor: 'pointer',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: '10px',
    transition: theme.transitions.create('width'),
    width: '100%',
    marginTop: '-5px',
    textAlign: 'center',
    cursor: 'pointer',
  },
}));

const NavBar = ({ onSearch }) => {
  const [showSearchBar, setShowSearchBar] = useState(false);

  const handleSearchIconClick = () => {
    setShowSearchBar((prev) => !prev);
  };

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit">
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Dog Gallery
          </Typography>
          <Search onClick={handleSearchIconClick}>
            <SearchIconWrapper>
              <SearchIcon />
              <StyledInputBase value="Breeds" readOnly />
            </SearchIconWrapper>
          </Search>
        </Toolbar>
      </AppBar>
      {showSearchBar && <SearchBar onSearch={onSearch} />}
    </Box>
  );
};

export default NavBar;

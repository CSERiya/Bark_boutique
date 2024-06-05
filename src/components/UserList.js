import React, { useEffect, useState } from 'react';
import { List, ListItem, CircularProgress, Card, CardMedia, Typography, Pagination, Box, useMediaQuery } from '@mui/material';
import axios from 'axios';

const UserList = ({ searchQuery }) => {
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const dogsPerPage = 9;

  useEffect(() => {
    const fetchDogs = async () => {
      const headers = {
        "Content-Type": "application/json",
        "x-api-key": "DEMO-API-KEY"
      };

      try {
        const response = await axios.get(
          "https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=100",
          { headers }
        );
        setDogs(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching the dogs:', error);
      }
    };

    fetchDogs();
  }, []);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const filteredDogs = dogs.filter(dog =>
    dog.breeds[0]?.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const indexOfLastDog = currentPage * dogsPerPage;
  const indexOfFirstDog = indexOfLastDog - dogsPerPage;
  const currentDogs = filteredDogs.slice(indexOfFirstDog, indexOfLastDog);
  const totalPages = Math.ceil(filteredDogs.length / dogsPerPage);

  const isMobile = useMediaQuery('(max-width: 600px)');

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <>
      <List>
        <Box 
          display="flex" 
          flexWrap="wrap" 
          justifyContent="center" 
          sx={{ 
            '@media (max-width: 400px)': { flexDirection: 'column', alignItems: 'center' } 
          }}
        >
          {currentDogs.map(dog => (
            <ListItem 
              key={dog.id} 
              sx={{ 
                width: '30%', 
                m: 1, 
                '@media (max-width: 960px)': { width: '45%' },
                '@media (max-width: 320px)': { width: '100%', height:'100%'} 
              }}
            >
              <Card sx={{ height: 320, width: '100%', borderRadius: '0.2cm' }}>
                <CardMedia
                  component="img"
                  sx={{ height: '80%', objectFit: 'cover' }}
                  image={dog.url}
                  alt="Dog Image"
                />
                <Box sx={{ padding: 1 }}>
                  <Typography variant="body2" color="black" fontWeight='500' component="p">
                    Breed: {dog.breeds[0]?.name || 'Unknown'}
                  </Typography>
                </Box>
              </Card>
            </ListItem>
          ))}
        </Box>
      </List>
      <Box display="flex" justifyContent="center">
        <Pagination 
          count={totalPages} 
          page={currentPage} 
          onChange={handlePageChange} 
          siblingCount={isMobile ? 0 : 1} 
          boundaryCount={isMobile ? 1 : 2} 
        />
      </Box>
    </>
  );
};

export default UserList;


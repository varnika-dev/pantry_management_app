// pages/index.js
import React from 'react';
import PantryForm from '../components/PantryForm';
import PantryList from '../components/PantryList';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const Home = () => {
  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Pantry Management
      </Typography>
      <PantryForm />
      <PantryList />
    </Container>
  );
};

export default Home;

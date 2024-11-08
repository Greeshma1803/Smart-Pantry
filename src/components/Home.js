import React from 'react';
import { Container, Typography } from '@mui/material';
import './Home.css'; // Import the CSS file for styles

const Home = () => {
  return (
    <Container className="home-container">
      <div className="overlay">
        <Typography variant="h3" color="white" gutterBottom>
          Welcome to Zero Waste Grocery Management
        </Typography>
        <Typography variant="h5" color="white">
          Our goal is to help you minimize waste and make informed decisions while shopping.
          Track your grocery items, get personalized recipe suggestions, and maintain a smart shopping list!
        </Typography>
      </div>
    </Container>
  );
};

export default Home;

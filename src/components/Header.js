// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Typography } from '@mui/material';
import { styled } from '@mui/system';
import './Header.css';

const StyledAppBar = styled(AppBar)({
  backgroundColor: '#4CAF50', // Green color for the header
  boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
});

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  minHeight: '80px', // Adjust height as needed
});

const LogoText = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  color: 'white',
});

const NavButton = styled(Button)({
  color: 'white',
  marginLeft: '10px',
  '&:hover': {
    backgroundColor: 'rgba(255,255,255,0.1)',
  },
});

const Header = () => {
  return (
    <StyledAppBar position="static">
      <StyledToolbar>
        <LogoText>
          <Typography variant="h5">SmartPantry</Typography>
          <Typography style={{ fontSize: '14px', fontStyle: 'italic' }}>Organize smart, waste less</Typography>
        </LogoText>
        <div>
          <NavButton component={Link} to="/">Home</NavButton>
          <NavButton component={Link} to="/add-items">Add Items</NavButton>
          <NavButton component={Link} to="/view-items">View Items</NavButton>
          <NavButton component={Link} to="/recipe-suggestions">Recipe Suggestions</NavButton>
          <NavButton component={Link} to="/notifications">Notifications</NavButton>
          <NavButton component={Link} to="/PersonalizedRecommendations">Personalized</NavButton>
        </div>
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default Header;

import React, { useState } from 'react';
import { TextField, Button, Container, Box, Typography } from '@mui/material';
import './AddItems.css'; // Import the CSS file

const AddItems = ({ addItem }) => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [expirationDate, setExpirationDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = { name, quantity, expirationDate };
    addItem(newItem); // Call the addItem function passed as prop
    setName('');
    setQuantity('');
    setExpirationDate('');
  };

  return (
    <Container className="container">
      <Typography className="title">Add Grocery Item</Typography>
      <Box component="form" className="form" onSubmit={handleSubmit}>
        <TextField
          className="text-field"
          label="Item Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <TextField
          className="text-field"
          label="Quantity"
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
        />
        <TextField
          className="text-field"
          label="Expiration Date"
          type="date"
          value={expirationDate}
          onChange={(e) => setExpirationDate(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
          required
        />
        <Button type="submit" variant="contained" className="add-button">Add Item</Button>
      </Box>
    </Container>
  );
};

export default AddItems;

import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import './ItemInputForm.css';

function ItemInputForm({ addItem }) {
  const [itemName, setItemName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [expirationDate, setExpirationDate] = useState('');

  const handleAddItem = () => {
    addItem({
      name: itemName,
      quantity,
      expirationDate,
    });
    setItemName('');
    setQuantity(1);
    setExpirationDate('');
  };

  return (
    <Container className="item-input-form" maxWidth="sm">
      <Typography variant="h4" gutterBottom>Grocery Item Entry</Typography>
      
      <TextField
        label="Item Name"
        variant="outlined"
        fullWidth
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
        margin="normal"
      />

      <TextField
        label="Quantity"
        type="number"
        variant="outlined"
        fullWidth
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        margin="normal"
      />

      <TextField
        label="Expiration Date"
        type="date"
        variant="outlined"
        fullWidth
        value={expirationDate}
        onChange={(e) => setExpirationDate(e.target.value)}
        InputLabelProps={{ shrink: true }}
        margin="normal"
      />

      <Button
        variant="contained"
        color="primary"
        onClick={handleAddItem}
        fullWidth
        style={{ marginTop: '16px' }}
      >
        Add Item
      </Button>
    </Container>
  );
}

export default ItemInputForm;

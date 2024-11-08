import React from 'react';
import { Card, CardContent, Typography, Grid, List, ListItem, ListItemText } from '@mui/material';
import './Dashboard.css';

function Dashboard({ items }) {
  const perishableItems = items.filter(item => item.isPerishable);
  const nonPerishableItems = items.filter(item => !item.isPerishable);

  const renderItemList = (items, category) => (
    <Card className="dashboard-card">
      <CardContent>
        <Typography variant="h5" component="div">
          {category}
        </Typography>
        <List>
          {items.map((item, index) => (
            <ListItem key={index}>
              <ListItemText
                primary={`${item.name} - Quantity: ${item.quantity}`}
                secondary={item.expirationDate ? `Expires on: ${item.expirationDate}` : 'No expiration date'}
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );

  return (
    <Grid container spacing={4} className="dashboard-grid">
      <Grid item xs={12} sm={6}>
        {renderItemList(perishableItems, 'Perishable Items')}
      </Grid>
      <Grid item xs={12} sm={6}>
        {renderItemList(nonPerishableItems, 'Non-Perishable Items')}
      </Grid>
    </Grid>
  );
}

export default Dashboard;

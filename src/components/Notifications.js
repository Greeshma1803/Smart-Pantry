import React from 'react';
import { Container, Typography, List, ListItem, ListItemText, Badge, Divider } from '@mui/material';

const Notifications = ({ items }) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Set time to midnight for accurate day comparison

  // Filter items expiring within 7 days
  const expiringItems = items.filter(item => {
    const expDate = new Date(item.expirationDate);
    expDate.setHours(0, 0, 0, 0); // Set time to midnight for accurate day comparison
    const dayDiff = (expDate - today) / (1000 * 3600 * 24);
    return dayDiff <= 7 && dayDiff >= 0; // Items expiring in 7 days or less
  });

  return (
    <Container>
      <Typography variant="h5" gutterBottom>
        Notifications
      </Typography>
      {expiringItems.length === 0 ? (
        <Typography variant="body1">No items nearing expiration.</Typography>
      ) : (
        <List>
          {expiringItems.map((item, index) => {
            const expDate = new Date(item.expirationDate);
            expDate.setHours(0, 0, 0, 0); // Reset time for accurate day difference calculation
            const dayDiff = Math.ceil((expDate - today) / (1000 * 3600 * 24));

            // Determine the badge color based on expiration status
            let badgeColor;
            if (dayDiff === 0) {
              badgeColor = "error"; // Expiring today
            } else if (dayDiff <= 7) {
              badgeColor = "warning"; // Expiring within the week
            }

            return (
              <div key={index}>
                <ListItem>
                  <Badge color={badgeColor} variant="dot">
                    <ListItemText 
                      primary={`${item.name} - ${dayDiff} days left`}
                      secondary={`Quantity: ${item.quantity} | Expiry Date: ${item.expirationDate}`} 
                    />
                  </Badge>
                </ListItem>
                <Divider />
              </div>
            );
          })}
        </List>
      )}
    </Container>
  );
};

export default Notifications;

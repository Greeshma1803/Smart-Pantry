import React, { useEffect } from 'react';
import {
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  Badge,
  Paper,
  Button,
} from '@mui/material';
import './ViewItems.css';

const ViewItems = ({ items, deleteItem }) => {
  const today = new Date();

  useEffect(() => {
    const expiringItems = items.filter(item => {
      const expDate = new Date(item.expirationDate);
      const timeDiff = expDate - today;
      return timeDiff <= 3 * 24 * 60 * 60 * 1000 && timeDiff > 0; // Items expiring in 3 days or less
    });

    if (expiringItems.length > 0) {
      alert(`Attention: You have ${expiringItems.length} items nearing expiration!`);
    }
  }, [items, today]);

  return (
    <Container>
      <Typography variant="h5" gutterBottom>
        View Items
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Item Name</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Expiration Date</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell> {/* New column for actions */}
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((item, index) => {
              const expDate = new Date(item.expirationDate);
              const timeDiff = expDate - today;
              const dayDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));

              // Determine the badge color based on expiration status
              let badgeColor;
              if (dayDiff <= 0) {
                badgeColor = "error"; // Expired
              } else if (dayDiff <= 3) {
                badgeColor = "warning"; // Expiring soon
              } else {
                badgeColor = "success"; // Fresh
              }

              return (
                <TableRow key={index}>
                  <TableCell>
                    <Badge color={badgeColor} variant="dot">
                      {item.name}
                    </Badge>
                  </TableCell>
                  <TableCell>{item.quantity}</TableCell>
                  <TableCell>{item.expirationDate}</TableCell>
                  <TableCell>
                    {dayDiff <= 0 ? "Expired" : dayDiff <= 3 ? "Expiring Soon" : "Fresh"}
                  </TableCell>
                  <TableCell>
                    <Button 
                      variant="contained" 
                      color="secondary" 
                      onClick={() => deleteItem(index)} // Call deleteItem on click
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default ViewItems;

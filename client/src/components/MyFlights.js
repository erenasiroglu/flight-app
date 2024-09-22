import React from "react";
import { Typography, List, ListItem, ListItemText } from "@mui/material";

export const MyFlights = ({ flights }) => {
  return (
    <div>
      <Typography variant="h5">Rezervasyonlarım</Typography>
      <List>
        {flights.map((flight) => (
          <ListItem key={flight.id}>
            <ListItemText primary={flight.number} secondary={flight.time} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default MyFlights;

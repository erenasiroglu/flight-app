import React from "react";
import FlightItem from "./FlightItem";
import { Grid } from "@mui/material";

export const FlightList = ({ flights }) => {
  return (
    <Grid container spacing={2}>
      {flights.map((flight) => (
        <Grid item xs={12} sm={6} md={4} key={flight.id}>
          <FlightItem flight={flight} />
        </Grid>
      ))}
    </Grid>
  );
};

export default FlightList;

import React from "react";
import { Button } from "@mui/material";

export const FlightBooking = ({ onBook }) => {
  return (
    <div>
      <Button variant="contained" color="primary" onClick={onBook}>
        Uçuşu Rezervasyon Yap
      </Button>
    </div>
  );
};

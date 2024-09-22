import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

export const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">Uçuş Rezervasyon Sistemi</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

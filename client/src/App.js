import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import FlightList from "./components/FlightList";
import MyFlights from "./components/MyFlights";
import { Container } from "@mui/material";

const App = () => {
  const [flights, setFlights] = useState([]);
  const [myFlights, setMyFlights] = useState([]);

  useEffect(() => {
    const dummyFlights = [
      { id: 1, number: "TK101", time: "10:00" },
      { id: 2, number: "TK102", time: "12:00" },
      { id: 3, number: "TK103", time: "14:00" },
    ];
    setFlights(dummyFlights);
  }, []);

  const bookFlight = (flight) => {
    setMyFlights([...myFlights, flight]);
  };

  return (
    <Container>
      <Header />
      <FlightList flights={flights} onBook={bookFlight} />
      <MyFlights flights={myFlights} />
    </Container>
  );
};

export default App;

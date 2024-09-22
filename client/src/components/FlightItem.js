export const FlightItem = ({ flight }) => {
  return (
    <div>
      <h2>{flight.number}</h2>
      <p>{flight.time}</p>
    </div>
  );
};

export default FlightItem;

const axios = require("axios");
require("dotenv").config();

const getFlights = async (req, res) => {
  try {
    const response = await axios.get(
      "https://api.schiphol.nl/public-flights/flights",
      {
        headers: {
          ResourceVersion: "v4",
          app_id: process.env.SCHIPHOL_APP_ID,
          app_key: process.env.SCHIPHOL_APP_KEY,
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching flights");
  }
};

module.exports = { getFlights };

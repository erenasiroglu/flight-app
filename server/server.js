// server.js

const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config(); // .env dosyasını okuyabilmek için dotenv modülünü çağırıyoruz

const app = express();
app.use(express.json());

// MongoDB'ye Bağlantı
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.log("MongoDB connection error: ", err));

// Sunucu Dinleme
const PORT = process.env.PORT || 5001; // 5000 yerine 5001 kullanıyoruz

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const flightRoutes = require("./routes/flightRoutes");
app.use("/api", flightRoutes);

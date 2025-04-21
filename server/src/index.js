require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const silexRoutes = require("./routes/silex.routes");
const usersRoutes = require("./routes/users.routes");
const ordersRoutes = require("./routes/orders.routes");

const corsOptions = {
  origin: "http://localhost:5174", // Especificamos el origen exacto
  methods: ["GET", "POST", "PATCH", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true, // <- Esto es clave si usas cookies o headers especiales
};

app.use(cors(corsOptions));
app.use(express.json());
app.use("/api/silex", silexRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/orders", ordersRoutes);

const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Database Connected");
  } catch (error) {
    console.log("Connection Error", error);
  }
  app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  });
};

startServer();

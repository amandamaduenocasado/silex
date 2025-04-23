require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const silexRoutes = require("./src/routes/silex.routes");
const usersRoutes = require("./src/routes/users.routes");
const ordersRoutes = require("./src/routes/orders.routes");

// Model y datos
const ProductModel = require("./src/models/Product.model");
const silexData = require("./src/data/silexs.json");

// CORS
const corsOptions = {
  origin: process.env.CORS_ORIGIN,
  methods: ["GET", "POST", "PATCH", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

console.log("CORS_ORIGIN:", process.env.CORS_ORIGIN);
app.use(cors(corsOptions));
app.use(express.json());
app.use("/api/silex", silexRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/orders", ordersRoutes);

// Función para insertar productos si la DB está vacía
const seedDatabase = async () => {
  try {
    const existingProducts = await ProductModel.find();
    if (existingProducts.length === 0) {
      await ProductModel.insertMany(silexData);
      console.log("✅ Productos de Silex insertados");
    } else {
      console.log("📦 Ya hay productos en la base de datos");
    }
  } catch (error) {
    console.log("❌ Error insertando productos", error);
  }
};

// Conexión y servidor
const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("✅ Database Connected");

    await seedDatabase();

    app.listen(process.env.PORT, () => {
      console.log(`🚀 Server is running on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.log("❌ Connection Error", error);
  }
};

startServer();

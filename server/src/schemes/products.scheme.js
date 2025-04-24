const mongoose = require("mongoose");

const ProductScheme = mongoose.Schema(
  {
    name: String,
    category: String,
    price: Number,
    description: String,
    fav: Number,
    ordered: Number,
    vendor: String,
  },
  { collection: "products" }
);

module.exports = ProductScheme;

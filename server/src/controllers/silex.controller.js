const ProductModel = require("../models/Product.model");

const silexController = {};

silexController.getAllProducts = async (req, res) => {
  try {
    const allSilex = await ProductModel.find();
    return res.status(200).json(allSilex);
  } catch (error) {
    return res.status(500).json({ error: "Error reading database" + error });
  }
};

silexController.getProductsById = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await ProductModel.findById(id);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).json({ error: "Error reading database" + error });
  }
};

silexController.getProductsBySize = async (req, res) => {
  const { size } = req.params;
  try {
    const product = await ProductModel.find({ size: { $eq: size } });
    if (!product) {
      return res.status(200).json([]);
    }
    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).json({ error: "Error reading database" + error });
  }
};

silexController.getProductsByDiet = async (req, res) => {
  const { diet } = req.params;
  try {
    const product = await ProductModel.find({ diet: { $eq: diet } });
    if (!product) {
      return res.status(200).json([]);
    }
    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).json({ error: "Error reading database" + error });
  }
};

silexController.getProductsByCategory = async (req, res) => {
  const { category } = req.params;
  try {
    const product = await ProductModel.find({ category: { $eq: category } });
    if (!product) {
      return res.status(200).json([]);
    }
    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).json({ error: "Error reading database" + error });
  }
};

silexController.getProductsByVendor = async (req, res) => {
  const { vendor } = req.params;
  try {
    const product = await ProductModel.find({ vendor: { $eq: vendor } });
    if (!product) {
      return res.status(200).json([]);
    }
    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).json({ error: "Error reading database" + error });
  }
};

silexController.getProductsByPrice = async (req, res) => {
  const { end } = req.params;
  try {
    const product = await ProductModel.find({
      price: { $lte: end },
    });
    if (!product) {
      return res.status(200).json([]);
    }
    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).json({ error: "Error reading database" + error });
  }
};

silexController.createProduct = async (req, res) => {
  const productInfo = req.body;
  const newProduct = new ProductModel({ ...productInfo });
  try {
    await newProduct.save();
    const allProducts = await ProductModel.find();
    return res.status(200).json(allProducts);
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Error reading/writing database" + error });
  }
};

silexController.createManyProducts = async (req, res) => {
  const productInfo = req.body;
  try {
    await ProductModel.insertMany(productInfo);
    const allProducts = await ProductModel.find();
    return res.status(200).json(allProducts);
  } catch (error) {
    return res.status(500).json({ error: "Error writing database" + error });
  }
};

silexController.updateProduct = async (req, res) => {
  const { id } = req.params;
  const newInfo = req.body;
  try {
    const productToUpdate = await ProductModel.findById(id);
    if (!productToUpdate) {
      return res.status(404).json({ error: "Product not found" });
    }
    await ProductModel.updateOne({ _id: id }, { $set: { ...newInfo } });
    const allProducts = await ProductModel.find();
    return res.status(200).json(allProducts);
  } catch (error) {
    return res.status(500).json({ error: "Error writing database" + error });
  }
};

silexController.deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const productToDelete = ProductModel.findById(id);
    if (!productToDelete) {
      return res.status(404).json({ error: "Product not found" });
    }
    await ProductModel.deleteOne({ _id: id });
    const allProducts = await ProductModel.find();
    return res.status(200).json(allProducts);
  } catch (error) {
    return res.status(500).json({ error: "Error writing database" + error });
  }
};

silexController.deleteManyProducts = async (req, res) => {
  const { price } = req.params;
  try {
    const toDelete = ProductModel.find({ price: { $lt: price } });
    if (!toDelete) {
      return res.status(404).json({ error: "Products not found" });
    }
    await ProductModel.deleteMany({ price: { $lt: price } });
    const allProducts = await ProductModel.find();
    return res.status(200).json(allProducts);
  } catch (error) {
    return res.status(500).json({ error: "Error writing database" + error });
  }
};

module.exports = silexController;

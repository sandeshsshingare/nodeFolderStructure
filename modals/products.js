const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: String,
  price: Number,
});

const productModal = mongoose.model("products", productSchema);

module.exports = productModal;

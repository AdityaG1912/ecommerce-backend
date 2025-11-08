const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  image: { type: String, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  discount: { type: Number, default: 0 },
  bgColor: { type: String, default: "#ffffff" },
  panelColor: { type: String, default: "#ffffff" },
  textColor: { type: String },
});

module.exports = mongoose.model("Product", ProductSchema);

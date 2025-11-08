const mongoose = require("mongoose");

const OwnerSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  contact: { type: Number, required: true },
  products: {
    type: Array,
    default: [],
  },
  picture: {
    type: String,
    default:
      "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
  },
});

module.exports = mongoose.model("Owner", OwnerSchema);

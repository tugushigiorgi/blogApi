const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    name: { type: String, unique: true, minlength: 1, required: true },
    status: { type: Boolean, default: true },
  },
  { versionKey: false }
);

const category = mongoose.model("category", categorySchema);
module.exports = { category, categorySchema };
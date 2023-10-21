const mongoose = require("mongoose");
const category=require('./Category');

const postSchema = new mongoose.Schema(
  {
    title: { type: String, minlength: 6, required: true },
    description: { type: String, required: true, minlength: 6 },
      category: { type: mongoose.Schema.Types.ObjectId, ref: 'category', required: true },
    DatePosted : { type: Number, default: () => Math.floor(Date.now() / 1000) },
    
  },
  { versionKey: false }
);

const post = mongoose.model("Post", postSchema);
module.exports = { post, postSchema };
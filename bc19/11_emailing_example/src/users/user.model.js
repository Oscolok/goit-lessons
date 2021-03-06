const mongoose = require("mongoose");
const { Schema } = mongoose;

const usersSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  verificationToken: { type: String, required: false },
});

// collection name -> users
exports.User = mongoose.model("User", usersSchema);

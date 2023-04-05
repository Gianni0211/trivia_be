import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: [true, "Inserire il nome utente"],
  },
  password: {
    type: String,
    required: [true, "Inserire la password"],
  },
  questions: {
    type: Object,
    required: [false],
    default: {},
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;

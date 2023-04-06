import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Inserire il titolo"],
  },
  category: {
    type: String,
    required: [true, "Inserire la categoria"],
  },
  user: {
    type: Object,
    required: [false],
    default: {},
  },
  answers: {
    type: Object,
    required: [true, "Inserire le domande"],
    default: [],
  },
  level: {
    type: String,
    required: [false],
    default: "",
  },
  isPublic: {
    type: Boolean,
    required: [true],
  },
});

const Question = mongoose.model("User", userSchema);

export default Question;

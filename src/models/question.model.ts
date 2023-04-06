import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
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
});

const Question = mongoose.model("Question", questionSchema);

export default Question;

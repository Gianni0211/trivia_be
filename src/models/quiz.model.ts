import mongoose from "mongoose";

const quizSchema = new mongoose.Schema({
  questions: {
    type: Object,
    required: [true, "Inserire le domande"],
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
  maxQuestions: {
    type: Number,
    required: [false, "Inserire il numero massimo di domande"],
    default: 3,
  },
  level: {
    type: String,
    required: [false],
    default: "",
  },
  isPublic: {
    type: Boolean,
    required: [false],
  },
});

const Quiz = mongoose.model("Quiz", quizSchema);

export default Quiz;

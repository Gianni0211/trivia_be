import QuizType from "../types/Quiz";
import Quiz from "../models/quiz.model";

import * as express from "express";

const get = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.params;
    const quiz: QuizType = await Quiz.findById(id);
    res.status(200).json(quiz);
  } catch (error) {
    // tslint:disable-next-line:no-console
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

const post = async (req: express.Request, res: express.Response) => {
  try {
    const quiz: QuizType = await Quiz.create(req.body);
    res.status(200).json(quiz);
  } catch (error) {
    // tslint:disable-next-line:no-console
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

const put = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.params;
    const quiz: QuizType = await Quiz.findByIdAndUpdate(id, req.body);
    if (!quiz) {
      res.status(404).json({ message: "Couldn't find Quiz with id: " + id });
    }
    const updatedQuiz = await Quiz.findById(id);
    res.status(200).json(updatedQuiz);
  } catch (error) {
    // tslint:disable-next-line:no-console
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

const deleteQuiz = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.params;
    const quiz: QuizType = await Quiz.findByIdAndDelete(id);
    if (!quiz) {
      res.status(404).json({ message: "Couldn't find Quiz with id: " + id });
    }

    res.status(200).json(quiz);
  } catch (error) {
    // tslint:disable-next-line:no-console
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
export default {
  get,
  post,
  put,
  deleteQuiz,
};

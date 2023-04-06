import express from "express";
import quizController from "../controllers/quiz.controller";

const router = express.Router();

/* GET User */
router.get("/get", quizController.get);

/* POST User */
router.post("/add", quizController.post);

/* PUT User */
router.put("/update/:id", quizController.put);

/* DELETE User */
router.delete("/delete/:id", quizController.deleteQuiz);

export default router;

import express from "express";
import mongoose from "mongoose";
import User from "./models/user.model";
import userRouter from "./routes/user.route";
import quizRouter from "./routes/quiz.route";

const app = express();
const port = 3000;
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/?directConnection=true")
  .then(() => {
    app.use("/user", userRouter);
    app.use("/quiz", quizRouter);
    app.listen(port, () => {
      // tslint:disable-next-line:no-console
      console.log(`Example app listening on port ${port}`);
    });
  })
  .catch((err) => {
    // tslint:disable-next-line:no-console
    console.log(err);
  });

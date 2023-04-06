import express from "express";
import mongoose from "mongoose";
import User from "./models/user.model";
import userRouter from "./routes/user.route";

const app = express();
const port = 3000;
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

mongoose
  .connect("mongodb://localhost:27017/?directConnection=true")
  .then(() => {
    app.use("/user", userRouter);
    app.listen(port, () => {
      // tslint:disable-next-line:no-console
      console.log(`Example app listening on port ${port}`);
    });
  })
  .catch((err) => {
    // tslint:disable-next-line:no-console
    console.log(err);
  });

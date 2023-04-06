import express from "express";
import userController from "../controllers/user.controller";

const router = express.Router();

/* GET User */
router.get("/get", userController.get);

/* POST User */
router.post("/add", userController.post);

/* PUT User */
router.put("/update/:id", userController.put);

/* DELETE User */
router.delete("/delete/:id", userController.deleteUser);

export default router;

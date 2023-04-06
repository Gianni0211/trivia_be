import User from "../models/user.model";

import * as express from "express";

const get = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (error) {
    // tslint:disable-next-line:no-console
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

const post = async (req: express.Request, res: express.Response) => {
  try {
    const user = await User.create(req.body);
    res.status(200).json(user);
  } catch (error) {
    // tslint:disable-next-line:no-console
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

const put = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndUpdate(id, req.body);
    if (!user) {
      res.status(404).json({ message: "Couldn't find User with id: " + id });
    }
    const updatedUser = await User.findById(id);
    res.status(200).json(updatedUser);
  } catch (error) {
    // tslint:disable-next-line:no-console
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

const deleteUser = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      res.status(404).json({ message: "Couldn't find User with id: " + id });
    }

    res.status(200).json(user);
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
  deleteUser,
};

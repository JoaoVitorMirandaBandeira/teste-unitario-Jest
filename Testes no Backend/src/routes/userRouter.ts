import express from "express";
import { UserBusiness } from "../business/UserBusiness";
import { UserController } from "../controller/UserController";
import { UserData } from "../data/UserData";


export const userRouter = express.Router();
const userBusiness = new UserBusiness(
    new UserData(),

);
const userController = new UserController(userBusiness);

userRouter.get("/users/profile/:id", userController.index);
userRouter.get("/users/all", userController.all);
userRouter.get("/users/profile", userController.profile);

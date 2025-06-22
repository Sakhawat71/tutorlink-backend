import { Router } from "express";
import { userController } from "./user.controller";

const route = Router();

route.get(
    "/",
    userController.getAllUser
);

route.get(
    "/:id",
    userController.getUserById
)

export const userRoute = route;
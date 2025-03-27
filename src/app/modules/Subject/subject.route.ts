import { Router } from "express";
import { subjectController } from "./subject.controller";


const route = Router();

route.get(
    "/",
    subjectController.getSubjects
);


export const subjectRoute = route;
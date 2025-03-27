import { Router } from "express";
import { subjectController } from "./subject.controller";


const route = Router();

route.get(
    "/",
    subjectController.getSubjects
);

route.get(
    "/:id",
    subjectController.getSubjectById
);

route.post(
    "/create-subject",
    subjectController.createSubject
);

export const subjectRoute = route;
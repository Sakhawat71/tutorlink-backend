import { Router } from "express";
import { authRoute } from "../modules/Auth/auth.route";
import { subjectRoute } from "../modules/Subject/subject.route";


const route = Router();

const routersModule = [
    {
        path: '/auth',
        router: authRoute,
    },
    {
        path : "/subject",
        router : subjectRoute,
    }
];


routersModule.forEach((r) => {
    route.use(r.path, r.router);
});

export default route;
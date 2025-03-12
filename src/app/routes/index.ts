import { Router } from "express";
import { authRoute } from "../modules/Auth/auth.route";


const route = Router();

const routersModule = [
    {
        path: '/auth',
        router: authRoute,
    }
];


routersModule.forEach((r) => {
    route.use(r.path, r.router);
});

export default route;
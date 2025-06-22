import { Router } from "express";
import { authRoute } from "../modules/Auth/auth.route";
import { subjectRoute } from "../modules/Subject/subject.route";
import { bookingRoute } from "../modules/Booking/booking.route";
import { userRoute } from "../modules/User/user.route";


const route = Router();

const routersModule = [
    {
        path: '/auth',
        router: authRoute,
    },
    {
        path : "/subjects",
        router : subjectRoute,
    },
    {
        path :"/booking",
        router : bookingRoute,
    },
    {
        path: "/users",
        router: userRoute,
    }
];


routersModule.forEach((r) => {
    route.use(r.path, r.router);
});

export default route;
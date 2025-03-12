import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';


const app: Application = express();


const corsOptions = {
    origin: ["http://localhost:3000"],
    credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

app.get('/', (req: Request, res: Response) => {
    res.send({
        status: 200,
        message: "TutorLink server is running..... .... ... .. ."
    })
})


export default app;
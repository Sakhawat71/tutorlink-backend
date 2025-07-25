import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import route from './app/routes';
import globalErrorHandler from './app/middlewares/globalErrorHandelar';

const app: Application = express();

// CORS configuration
const corsOptions = {
    origin: [
        "http://localhost:3000",
        "https://tutorlink-frontend-s3h.vercel.app",
        "https://tutorlink-s3h.vercel.app"
    ],
    credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// API Routes
app.use("/api/v1", route);

// Health check route
app.get('/api/v1/health', (req: Request, res: Response) => {
    res.status(200).json({
        success: true,
        message: 'TutorLink API is healthy '
    });
});

// Root route
app.get('/', (req: Request, res: Response) => {
    res.send({
        status: 200,
        message: "TutorLink server is running..... .... ... .. ."
    });
});

// Global error handler
app.use(globalErrorHandler);

export default app;
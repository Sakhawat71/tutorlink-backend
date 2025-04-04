import { ErrorRequestHandler } from "express";
import { ZodError } from "zod";
import config from "../config";
import { handelZodError } from "../errors/handelZodError";
import handelValidationError from "../errors/handelValidationError";
import handelCastErrro from "../errors/handelCastError";
import handelDuplicateError from "../errors/handleDuplicateError";
import { TErrorSource } from "../errors/error.interface";
import AppError from "../errors/appError";


const globalErrorHandler: ErrorRequestHandler = async (err, req, res, next): Promise<any> => {
    //setting default values
    let statusCode = err.statusCodes || 500;
    let message = err.message || "Something went wrong !";
    let error: TErrorSource = [
        {
            path: '',
            message: 'Something went wrong'
        },
    ];

    // instance of -> All kind of error
    if (err instanceof ZodError) {
        const simplifiedError = handelZodError(err);
        statusCode = simplifiedError?.statusCode;
        message = simplifiedError?.message;
        error = simplifiedError?.error;
    } else if (err?.name === "ValidationError") {
        const simplifiedError = handelValidationError(err);
        statusCode = simplifiedError?.statusCode;
        message = simplifiedError?.message;
        error = simplifiedError?.error;
    } else if (err?.name === 'CastError') {
        const simplifiedError = handelCastErrro(err);
        statusCode = simplifiedError?.statusCode;
        message = simplifiedError?.message;
        error = simplifiedError?.error;
    } else if (err?.code === 11000) {
        const simplifiedError = handelDuplicateError(err);
        statusCode = simplifiedError?.statusCode;
        message = simplifiedError?.message;
        error = simplifiedError?.error;
    } else if (err instanceof AppError) {
        statusCode = err?.statusCodes;
        message = err.message;
        error = [
            {
                path: '',
                message: err?.message,
            },
        ];
    } else if (err instanceof Error) {
        message = err?.message;
        error = [
            {
                path: '',
                message: err?.message,
            },
        ];
    }

    // Ultimate return
    return res.status(statusCode).json({
        success: false,
        message,
        statusCode,
        error,
        stack: config.NODE_ENV === 'development' ? err?.stack : null,
        // mainError: err,
    })
}
export default globalErrorHandler;
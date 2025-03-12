import { ZodError, ZodIssue } from "zod";
import { TErrorSource, TGenericErrorResponse } from "./error.interface";

// zod error Management
export const handelZodError = (errorData: ZodError): TGenericErrorResponse => {
    const error: TErrorSource = errorData.issues.map((issue: ZodIssue) => {
        return {
            path: issue?.path[issue.path.length - 1],
            message: issue.message,
        }
    })
    const statusCode = 400;
    return {
        statusCode,
        message: 'Validation Error',
        error,
    }
};
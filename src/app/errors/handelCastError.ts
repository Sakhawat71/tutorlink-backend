import mongoose from "mongoose";
import { TErrorSource, TGenericErrorResponse } from "./error.interface";

const handelCastErrro = (err: mongoose.Error.CastError): TGenericErrorResponse => {
    const error: TErrorSource = [{
        path: err.path,
        message: err.message,
    }];

    const statusCode = 400;

    return {
        statusCode,
        message: 'Cast Error',
        error,
    }
}


export default handelCastErrro;

import {TErrorSource,TGenericErrorResponse} from './error.interface';

const handelDuplicateError = (err: any): TGenericErrorResponse => {

    const match = err.message.match(/"([^"]*)"/);
    const extractedMessage = match && match[1];

    const error: TErrorSource = [{
        path: err.path || '',
        message: `${extractedMessage} is already exists`
    }]

    const statusCode = 400;
    return {
        statusCode,
        message: 'Duplicate Key Error',
        error
    }
};

export default handelDuplicateError;
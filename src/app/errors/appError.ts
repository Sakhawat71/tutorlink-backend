class AppError extends Error {
    public statusCodes: number;
    constructor(
        statusCodes?: number,
        message?: string,
        stack?: ''
    ) {
        super(message)
        this.statusCodes = statusCodes ?? 500; // Default to 500 if undefined
        if (stack) {
            this.stack = stack
        } else {
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

export default AppError;
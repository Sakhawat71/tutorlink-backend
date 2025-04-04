import { NextFunction, Request, Response } from "express"

// eslint-disable-next-line no-unused-vars
const notFound = (req: Request, res: Response, next: NextFunction): void => {
    res.status(404).json({
        success: false,
        message: "Api Route Not Found !!",
        error: ''
    })
}

export default notFound;
import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponce";
import { StatusCodes } from "http-status-codes";
import { subjectService } from "./subject.service";

const getSubjects = catchAsync(async (req: Request, res: Response) => {
    const result = await subjectService.getSubjectsFormDB();

    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: "Product created successfully",
        data: result,
    });
});



export const subjectController = {
    getSubjects,
};
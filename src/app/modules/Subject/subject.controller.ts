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
        message: "Subjects retrieved successfully",
        data: result,
    });
});

const getSubjectById = catchAsync(async (req: Request, res: Response) => {
    const {id} = req.params;
    const result = await subjectService.getSubjectsByIdFormDB(id);

    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: "Subjects retrieved successfully",
        data: result,
    });
});


const createSubject = catchAsync(async (req : Request, res : Response) => {
    const data = req.body;
    const result = await subjectService.createSubjectInDB(data);
    sendResponse(res, {
        statusCode: StatusCodes.CREATED,
        success: true,
        message: "Subject Created Successfully",
        data: result,
    });

});


export const subjectController = {
    getSubjects,
    getSubjectById,
    createSubject,

};
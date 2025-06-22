import { StatusCodes } from "http-status-codes";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponce";
import { userServices } from "./user.service";
import { Request, Response } from "express";

const getAllUser = catchAsync(async (req, res) => {
    const users = await userServices.getAllUsersFromDB();
    sendResponse(res,{
        statusCode: StatusCodes.OK,
        success: true,
        message: 'All users fetched successfully',
        data: users
    })
});

const getUserById = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await userServices.getSingleUserFromDB(id);
    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: "user retrieved successfully",
        data: result,
    });
});

export const userController ={
    getAllUser,
    getUserById,
}
import { StatusCodes } from "http-status-codes";
import { IUser } from "../User/user.interface";
import { UserModel } from "../User/user.model";
import { ILoginUser } from "./auth.interface";
import bcrypt from 'bcrypt';
import config from "../../config";
import jwt from 'jsonwebtoken';
import AppError from "../../errors/appError";


// register
const registerUser = async (payLoad: IUser) => {

    const { email } = payLoad;
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
        throw new AppError(StatusCodes.CONFLICT, "User with this email already exists");
    };
    return await UserModel.create(payLoad);
};

// login
const loginUser = async (payLoad: ILoginUser) => {

    const { email, password } = payLoad;

    const user = await UserModel.findOne({ email });
    if (!user) {
        throw new AppError(
            StatusCodes.NOT_FOUND,
            "Invalid credentials"
        );
    };

    // Check -> if user is Blocked
    if (user.isBlocked) {
        throw new AppError(
            StatusCodes.BAD_REQUEST,
            "User is Blocked"
        );
    };

    // Check if password match
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
        throw new AppError(
            StatusCodes.UNAUTHORIZED,
            "Invalid credentials"
        );
    };

    const JwtPayload = {
        email: user.email,
        name : user.name,
        role: user.role,
        id: user._id,
    };

    // Create jwt access token
    const accessToken = jwt.sign(
        JwtPayload,
        config.accessTokenSecret as string,
        {
            expiresIn: config.accessTokenExpiry as any,
        }
    );

    return {
        token: accessToken
    }
};

export const authService = {
    registerUser,
    loginUser
};
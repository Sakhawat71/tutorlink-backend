export interface IUser {
    _id: string;
    name: string;
    email: string;
    password: string;
    role: 'admin' | 'student' | 'tutor';
    isBlocked: boolean;
    availability : boolean;
    createdAt?: Date;
    updatedAt?: Date;
};
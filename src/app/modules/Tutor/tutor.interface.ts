export interface Tutor {
    _id: string;
    name: string;
    email: string;
    profileImage: string;
    bio: string;
    subjectList: string[];
    availability?: string[];
    experience?: number;
    createdAt?: Date;
    updatedAt?: Date;
}
import { ITutorProfile } from "./subject.interface";
import { TutorSubjectModel } from "./subject.model";

const getSubjectsFormDB = async () => {
    return await TutorSubjectModel
        .find()
        .populate({
            path: "tutor",
            select : "-password",
        })
        .lean();
};

const getSubjectsByIdFormDB = async (id: string) => {
    return await TutorSubjectModel
        .findById(id)
        .populate({
            path: "tutor",
            select: "-password",
        });

};

const createSubjectInDB = async (data: ITutorProfile) => {
    return await TutorSubjectModel.create(data);
};


export const subjectService = {
    getSubjectsFormDB,
    getSubjectsByIdFormDB,
    createSubjectInDB,
};
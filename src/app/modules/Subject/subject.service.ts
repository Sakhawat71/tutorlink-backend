import { ITutorSubject } from "./subject.interface";
import { TutorSubjectModel } from "./subject.model";

const getSubjectsFormDB = async () => {
    return await TutorSubjectModel
    .find()
    .populate("tutor");
};

const getSubjectsByIdFormDB = async (id: string) => {
    return await TutorSubjectModel
    .findById(id)
    .populate("tutor");
};

const createSubjectInDB = async (data : ITutorSubject) => {
    return await TutorSubjectModel.create(data);
};


export const subjectService = {
    getSubjectsFormDB,
    getSubjectsByIdFormDB,
    createSubjectInDB,
};
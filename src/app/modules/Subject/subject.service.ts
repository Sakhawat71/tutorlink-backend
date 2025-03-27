import { TutorSubjectModel } from "./subject.model";

const getSubjectsFormDB = async () => {
    return await TutorSubjectModel.find();
};



export const subjectService = {
    getSubjectsFormDB,
};
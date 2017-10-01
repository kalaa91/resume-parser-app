import { MainInfo } from "./mainInfo";
import { BasicSkills } from "./basicSkills";
import { Experince } from "./experince";
import { Education } from "./education";
import { ExtraActivity } from "./extraActivity";
import { ContactInfo } from "./contactInfo";

export interface ResumeObject {
    mainInfo: MainInfo;
    summary: string;
    basicSkills: BasicSkills;
    experince: Experince[];
    education: Education;
    extraActivities: ExtraActivity[];
    contactInfo: ContactInfo[];
}
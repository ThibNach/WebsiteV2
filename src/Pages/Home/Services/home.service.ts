import SkillsData from '../data/Skills.json';
import {
    Skill,
    SkillSchema,
} from "../Schemas/Home.schema";
import { z }      from "zod";

const SkillsListSchema = z.array( SkillSchema );

export const fetchSkillsData = async():Promise<Skill[]> => {
    return new Promise((resolve, reject) => {
        try {
            const validatedData = SkillsListSchema.parse(SkillsData);
            resolve(validatedData);
        }catch(err) {
            reject(err);
        }
    })
}

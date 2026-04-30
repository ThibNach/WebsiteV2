import { z } from 'zod';

// -- Resume parts

export const EducationSchema = z.object({
                                            period: z.string(),
                                            title: z.string(),
                                            institution: z.string(),
                                            description: z.string().optional(),
                                        }).transform(db => ({
    period: db.period,
    title: db.title,
    institution: db.institution,
    description: db.description ?? ""
}));

export type Education = z.infer<typeof EducationSchema>;

export const CVExperienceSchema = z.object({
                                               company: z.string(),
                                               role: z.string(),
                                               period: z.string(),
                                               tasks: z.array(z.string())
                                           });

export type WorkExperience = z.infer<typeof CVExperienceSchema>;

export const AboutDataSchema = z.object({
                                            fullName: z.string(),
                                            jobTitle: z.string(),
                                            address: z.string(),
                                            phone: z.string(),
                                            email: z.string(),
                                            website: z.string(),
                                            linkedin: z.string(),
                                            github: z.string(),
                                            strengths: z.array(z.string()),
                                            tools: z.array(z.string()),
                                            languages: z.array(z.string()),
                                            hobbies: z.array(z.string()),
                                            quote: z.string(),
                                        });

export type AboutData = z.infer<typeof AboutDataSchema>;

export const FullCVSchema = z.object({
                                         personalInfo: AboutDataSchema,
                                         workExperience: z.array(CVExperienceSchema),
                                         education: z.array(EducationSchema)
                                     });

export type FullCV = z.infer<typeof FullCVSchema>;
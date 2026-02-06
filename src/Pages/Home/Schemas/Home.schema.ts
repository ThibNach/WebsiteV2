import { z } from 'zod'

// -- SkillTiles

// -- types

export const SkillSchema = z.object( { 
    icon: z.string(),
    title: z.string(),
    description: z.string(),
    color: z.string().optional(),
    } ).transform( ( data ) => ( {
    icon: data.icon,
    title: data.title,
    description: data.description,
    color: data.color,
} ) );

export type Skill = z.infer<typeof SkillSchema>;

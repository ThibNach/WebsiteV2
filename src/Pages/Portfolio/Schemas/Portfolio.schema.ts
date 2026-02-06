import {z} from 'zod';

// -- TimeLine

// -- DATA 

export const TargetDataSchema = z.object({
    display_name: z.string(),
    icon_source: z.string(),
}).transform(db => ({
    displayName: db.display_name,
    iconSource: db.icon_source,
}));

export type TargetData = z.infer<typeof TargetDataSchema>;

export const EngineSchema = z.enum(["Unity", "Unreal Engine"]);

export type Engine = z.infer<typeof EngineSchema>;
export const TimeLineItemSchema = z.object({
    id: z.number(),
    start_date: z.string().nullable().default(""),
    end_date: z.string().nullable().default(""),
    display_name: z.string(),
    image: z.string().nullable().transform(val => val ?? ""),
    engine: EngineSchema,
    targets: z.array(TargetDataSchema).default([]),
    game_descriptions: z.array(z.string()).nullable().default([]),
    work_descriptions: z.array(z.string()).nullable().default([]),
}).transform(db => ({
    id: db.id,
    startDate: db.start_date ?? "",
    endDate: db.end_date ?? "",
    displayName: db.display_name,
    image: db.image ?? "", //:TODO: get a default image in case the path is broken or something
    engineName: db.engine,
    targets: db.targets,
    gameDescriptions: db.game_descriptions ?? [],
    workDescriptions: db.work_descriptions ?? [],
}));

export type TimelineItem = z.infer<typeof TimeLineItemSchema>;

// -- PROPS

export interface TimelineItemProps{
    item: TimelineItem;
    isOpen:boolean;
    onClick:() => void;
}

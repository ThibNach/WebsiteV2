import {z} from 'zod';
import {ReactNode} from "react";

// -- Shared

export type WithChildren<T = {}> = T & { children?: ReactNode };

// -- PageTitle props

export const PageTitlePropsSchema = z.object({
    title: z.string(),
});

export type PageTitleProps = z.infer<typeof PageTitlePropsSchema>;


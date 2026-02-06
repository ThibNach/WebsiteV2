import {z} from 'zod';

// -- NavBar

// -- DATA

export const NavBarItemSchema = z.object({
    title: z.string(),
    link: z.string().refine(value => value.startsWith('/')),
}).transform( ( data) =>({
    title:data.title,
    link:data.link,
}));

export type NavBarItem = z.infer<typeof NavBarItemSchema>;

// -- PROPS

export interface NavBarItemProps {
    navBarItem: NavBarItem;
    onClick: () => void;
}

export interface NavBarItemsProps {
  Items: NavBarItem[];
  isExpanded: boolean;
  onClick: () => void;
}

export interface NavBarBurgerProps {
    title:string;
    onClick: () => void;
}

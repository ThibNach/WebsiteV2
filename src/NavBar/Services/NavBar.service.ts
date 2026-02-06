import NavBarItems from '../Data/NavBarItems.json';
import {
    NavBarItem,
    NavBarItemSchema,
}                  from "../Schemas/NavBar.schema";
import { z }       from "zod";

const NavBarListItemsSchema = z.array( NavBarItemSchema );

export const fetchNavBarItems = async(): Promise<NavBarItem[]> => {
    return new Promise( (
                            resolve,
                            reject,
                        ) => {
        try {
            const validatedData = NavBarListItemsSchema.parse( NavBarItems );
            resolve( validatedData );
        }
        catch( err ) {
            reject( err );
        }
    } )
}
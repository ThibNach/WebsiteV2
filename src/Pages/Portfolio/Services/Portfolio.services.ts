import {supabase} from "../../../_Shared/Services/supabaseClient";
import {TimeLineItemSchema, type TimelineItem} from "../Schemas/Portfolio.schema";
import {z} from "zod";

export const fetchTimelineData = async (): Promise<TimelineItem[]> => {
    const {data, error} = await supabase
        .from('Game')
        .select('*')
        .order('start_date', {ascending: false})
        .order('end_date', {ascending: false});

    if (error) throw error;

    return z.array(TimeLineItemSchema).parse(data || []);
};

import { NextResponse, NextRequest } from "next/server";
import { createClient } from "@supabase/supabase-js";

type RouteParams = {
    params: {
        id: string;
    };
};

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
);

export const GET = async (req: NextRequest, route: RouteParams) => {

    const ID: string = route.params.id;
 
    let { data: data, error } = await supabase
        .from('all')
        .select("*")
        .eq('id', ID)

    if (error) {
        return NextResponse.json({ error: 'Error fetching data' });
    }

    if (!data) {
        return NextResponse.json({ error: 'ID not found' });
    }

    return NextResponse.json({ data: data });
};
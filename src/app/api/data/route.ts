import { NextResponse, NextRequest } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export const GET = async (req: NextRequest) => {
  const { data, error } = await supabase
    .from("all_tables")
    .select("*, page3(*, email(_id, src, email))");

  if (error) {
    return NextResponse.json({ error: "Error fetching data: " + error });
  }

  if (!data) {
    return NextResponse.json(
      { error: "Error fetching data: no data" },
      { status: 404 }
    );
  }

  return NextResponse.json({ data: data }, { status: 200 });
};

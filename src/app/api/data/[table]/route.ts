import { NextResponse, NextRequest } from "next/server";
import supabase from "@/services/client";

export const GET = async (req: NextRequest) => {
  const urlParts = req.nextUrl.pathname.split("/");
  const table = urlParts[urlParts.length - 1];

  const { data, error } = await supabase.from(table).select("*");

  if (error) {
    return NextResponse.json({ error: "Error fetching data: " + error.message });
  }

  if (!data || data.length === 0) {
    return NextResponse.json({ error: "Error fetching data: no data" }, { status: 404 });
  }

  return NextResponse.json(data, { status: 200 });
};

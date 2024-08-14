import { NextResponse, NextRequest } from "next/server";
import supabase from "@/services/client";

export const GET = async (req: NextRequest) => {
  try {
    // Fetch related data separately if needed
    const homepageData = await supabase.from("homepage").select("*");
    if (homepageData.error) throw homepageData.error;

    const navData = await supabase.from("nav").select("*");
    if (navData.error) throw navData.error;

    const page1Data = await supabase.from("page1").select("*");
    if (page1Data.error) throw page1Data.error;

    const page2Data = await supabase.from("page2").select("*");
    if (page2Data.error) throw page2Data.error;

    const page3Data = await supabase.from("page3").select("*, email(*)");
    if (page3Data.error) throw page3Data.error;

    // Combine the data as needed
    const combinedData = {
      homepage: homepageData.data,
      nav: navData.data,
      page1: page1Data.data,
      page2: page2Data.data,
      page3: page3Data.data,
    };

    return NextResponse.json({ data: combinedData }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: `Error fetching data: ${error}` },
      { status: 500 }
    );
  }
};
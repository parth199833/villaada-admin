import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  console.log("-------");
  return NextResponse.json({ error: "Dashboard not found" }, { status: 404 });
}

import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(req: Request) {
  const { password } = await req.json();
  if (password === process.env.ADMIN_PASSWORD) {
    (await cookies()).set("admin_token", "authorized", { httpOnly: true, secure: true });
    return NextResponse.json({ success: true });
  }
  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}


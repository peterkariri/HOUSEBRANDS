import { NextResponse } from "next/server";
import { checkCredentials, startSession } from "@/lib/admin-auth";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const username = body?.username;
  const password = body?.password;
  if (!username || !password || !checkCredentials(username, password)) {
    return NextResponse.json({ error: "Invalid username or password." }, { status: 401 });
  }

  await startSession();
  return NextResponse.json({ ok: true });
}

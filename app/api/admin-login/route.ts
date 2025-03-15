import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { password } = await req.json();
  const correctPassword = process.env.ADMIN_PASSWORD;

  if (password === correctPassword) {
    const response = NextResponse.json({ authenticated: true });
    response.headers.set(
      "Set-Cookie",
      `password=${password}; Path=/; HttpOnly; Secure; Max-Age=604800`  // expires in 7 days
    );
    return response;
  }

  return NextResponse.json({ error: "Incorrect password" }, { status: 401 });
}
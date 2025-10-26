import { NextResponse } from "next/server";

export function GET(request: Request) {
  return NextResponse.redirect(
    new URL("https://github.com/ouwargui/schedy/blob/main/LEGAL.md")
  );
}

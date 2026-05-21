import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const session = request.cookies.get("session")?.value;
  const isAppRoute = request.nextUrl.pathname.startsWith("/dashboard") ||
                     request.nextUrl.pathname.startsWith("/agents") ||
                     request.nextUrl.pathname.startsWith("/settings");

  if (isAppRoute && !session) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/agents/:path*", "/settings/:path*"],
};

// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("next-auth.session-token") || req.cookies.get("__Secure-next-auth.session-token");
  const pathname = req.nextUrl.pathname;

  const isAuthPage = pathname === "/signin";

  if (!token && !isAuthPage && pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/signin", req.url));
  }

  return NextResponse.next();
}

// Don't run middleware on API/auth routes
export const config = {
  matcher: ["/dashboard/:path*", "/"],
};
import NextAuth from "next-auth";
import { NextRequest, NextResponse } from "next/server";

import authConfig from "./auth.config";
import {
  apiAuthPrefix,
  authRoutes,
  DEFAULT_LOGIN_REDIRECT,
  publicRoutes,
} from "./routes";

const { auth } = NextAuth(authConfig);

export default auth((req: NextRequest) => {
  // console.log("Middleware called with req auth", req);
  const isLoggedIn = !!req.auth;

  console.log("is logged in", isLoggedIn);

  const { nextUrl } = req;

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);

  const isPublicAuthRoute = publicRoutes.includes(nextUrl.pathname);

  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  if (isApiAuthRoute) {
    return null;
  }

  if (isAuthRoute) {
    if (isLoggedIn) {
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }
    return null;
  }

  if (!isLoggedIn && !isPublicAuthRoute) {
    return Response.redirect(new URL("/auth/signin", nextUrl));
  }
  console.log("Is Logged In:", isLoggedIn);

  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc|png)(.*)"],
};

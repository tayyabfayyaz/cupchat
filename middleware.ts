import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware({
  publicRoutes: ["/"], // Allow homepage without auth
});

export const config = {
  matcher: [
    "/((?!_next|favicon.ico|.*\\..*).*)",
    "/(api|trpc)(.*)",
  ],
  runtime: "nodejs",
};

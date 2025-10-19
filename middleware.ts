import { clerkMiddleware } from "@clerk/nextjs/server";

// ✅ Clerk middleware setup
export default clerkMiddleware({
  // You can also define public routes if needed
  // publicRoutes: ["/", "/about", "/contact"],
});

export const config = {
  // ✅ Match all routes except Next.js internals & static assets
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
  
  // ✅ Force Node.js runtime (fixes the "unsupported modules" error)
  runtime: "nodejs",
};

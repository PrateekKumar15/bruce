import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher(["/sign-in(.*)", "/sign-up(.*)"]); // Add more public routes as needed
// This matcher will check if the route starts with /sign-in or /sign-up
export default clerkMiddleware(async (auth, req) => {
    // Check if the request URL matches the public route
  if (!isPublicRoute) {
    await auth.protect();
    
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
// Note: This middleware is used to protect routes and manage authentication.
// It uses Clerk for authentication and is configured to skip certain paths.
// The matcher specifies which paths the middleware should run on.
// The config object is exported to be used by Next.js.

import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  // Define public routes that don't need authentication
  publicRoutes: [
    '/',
    '/events/[id]', // This handles dynamic routes for events
    '/api/webhook/clerk',
    '/api/webhook/stripe',
    '/api/uploadthing',
  ],
  // Specify routes to ignore authentication checks (typically API routes)
  ignoredRoutes: [
    '/api/webhook/clerk',
    '/api/webhook/stripe',
    '/api/uploadthing',
  ]
});

export const config = {
  matcher: [
    // This matcher ensures that middleware is applied to routes excluding files (like JS, images, etc.) and Next.js specific paths (_next)
    '/((?!.+\\.[\\w]+$|_next).*)', 
    '/', // Main route, public
    '/(api|trpc)(.*)' // Ensure authentication for API and trpc routes
  ],
};

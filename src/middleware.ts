import { defineMiddleware } from "astro:middleware";
import { isAuthenticated } from "./lib/auth";

export const onRequest = defineMiddleware(async (context, next) => {
  const { url, cookies, redirect } = context;

  // Public routes that don't require authentication
  const publicRoutes = ["/login", "/api/login"];

  // Check if current path is public
  const isPublicRoute = publicRoutes.some((route) =>
    url.pathname.startsWith(route)
  );

  // If not authenticated and trying to access protected route
  if (!isPublicRoute && !isAuthenticated(cookies)) {
    return redirect("/login");
  }

  // If authenticated and trying to access login page, redirect to home
  if (url.pathname === "/login" && isAuthenticated(cookies)) {
    return redirect("/");
  }

  return next();
});

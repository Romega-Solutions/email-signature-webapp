import type { AstroCookies } from "astro";

// Use environment variables in production, fallback for development
export const ADMIN_CREDENTIALS = {
  username: import.meta.env.ADMIN_USERNAME || "romega_admin",
  password: import.meta.env.ADMIN_PASSWORD || "RomegaSignature2024!",
};

export const SESSION_COOKIE_NAME = "romega_session";
export const SESSION_SECRET =
  import.meta.env.SESSION_SECRET ||
  "romega-solutions-session-secret-2024-super-secure-key-xyz";

// Simple session validation
export function isAuthenticated(cookies: AstroCookies): boolean {
  const session = cookies.get(SESSION_COOKIE_NAME);
  return session?.value === SESSION_SECRET;
}

// Validate credentials
export function validateCredentials(
  username: string,
  password: string
): boolean {
  return (
    username === ADMIN_CREDENTIALS.username &&
    password === ADMIN_CREDENTIALS.password
  );
}

// Create session
export function createSession(cookies: AstroCookies): void {
  cookies.set(SESSION_COOKIE_NAME, SESSION_SECRET, {
    httpOnly: true,
    secure: import.meta.env.PROD, // Only secure in production
    sameSite: "strict",
    maxAge: 60 * 60 * 24 * 7, // 7 days
    path: "/",
  });
}

// Destroy session
export function destroySession(cookies: AstroCookies): void {
  cookies.delete(SESSION_COOKIE_NAME, {
    path: "/",
  });
}

import type { AstroCookies } from 'astro';

// IMPORTANT: Change these credentials for production!
export const ADMIN_CREDENTIALS = {
  username: 'romega_admin',
  password: 'RomegaSignature2024!', // Change this to a strong password
};

export const SESSION_COOKIE_NAME = 'romega_session';
export const SESSION_SECRET = 'your-secret-key-change-this-in-production'; // Change this!

// Simple session validation
export function isAuthenticated(cookies: AstroCookies): boolean {
  const session = cookies.get(SESSION_COOKIE_NAME);
  return session?.value === SESSION_SECRET;
}

// Validate credentials
export function validateCredentials(username: string, password: string): boolean {
  return username === ADMIN_CREDENTIALS.username && 
         password === ADMIN_CREDENTIALS.password;
}

// Create session
export function createSession(cookies: AstroCookies): void {
  cookies.set(SESSION_COOKIE_NAME, SESSION_SECRET, {
    httpOnly: true,
    secure: import.meta.env.PROD, // Only secure in production
    sameSite: 'strict',
    maxAge: 60 * 60 * 24 * 7, // 7 days
    path: '/',
  });
}

// Destroy session
export function destroySession(cookies: AstroCookies): void {
  cookies.delete(SESSION_COOKIE_NAME, {
    path: '/',
  });
}
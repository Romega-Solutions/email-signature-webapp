import type { APIRoute } from 'astro';
import { destroySession } from '../../lib/auth';

export const POST: APIRoute = async ({ cookies, redirect }) => {
  destroySession(cookies);
  return redirect('/login', 302);
};

export const GET: APIRoute = async ({ cookies, redirect }) => {
  destroySession(cookies);
  return redirect('/login', 302);
};
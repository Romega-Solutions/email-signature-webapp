import type { APIRoute } from 'astro';
import { validateCredentials, createSession } from '../../lib/auth';

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
  try {
    const formData = await request.formData();
    const username = formData.get('username')?.toString() || '';
    const password = formData.get('password')?.toString() || '';

    // Validate credentials
    if (validateCredentials(username, password)) {
      // Create session
      createSession(cookies);
      
      // Redirect to home page
      return redirect('/', 302);
    } else {
      // Invalid credentials - redirect back to login with error
      return redirect('/login?error=invalid', 302);
    }
  } catch (error) {
    console.error('Login error:', error);
    return redirect('/login?error=server', 302);
  }
};
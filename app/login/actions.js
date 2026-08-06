'use server';

import { redirect } from 'next/navigation';
import { generateToken, setAuthCookie, clearAuthCookie } from '@/lib/auth';

export async function login(formData) {
  const username = formData.get("username");
  const password = formData.get("password");

  const adminUsername = process.env.ADMIN_USERNAME || 'admin';
  const adminPassword = process.env.ADMIN_PASSWORD || 'admin123';

  if (username !== adminUsername || password !== adminPassword) {
    return { error: 'Invalid username or password' };
  }

  const token = generateToken(username, password);
  await setAuthCookie(token);

  redirect('/');
}

export async function logout() {
  await clearAuthCookie();
  redirect('/login');
}
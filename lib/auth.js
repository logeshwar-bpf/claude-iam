import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';

export function generateToken(username, password) {
  const secret = process.env.JWT_SECRET || 'default-jwt-secret-key';
  return jwt.sign(
    { username, password },
    secret,
    { expiresIn: '5m' }
  );
}

export function verifyToken(token) {
  const secret = process.env.JWT_SECRET || 'default-jwt-secret-key';
  return jwt.verify(token, secret);
}

export async function setAuthCookie(token) {
  const cookieStore = await cookies();
  cookieStore.set({
    name: 'session',
    value: token,
    httpOnly: true,
    secure: false,
    sameSite: 'lax',
    maxAge: 60 * 5,
    path: '/',
  });
}

export async function clearAuthCookie() {
  const cookieStore = await cookies();
  cookieStore.delete('session');
}

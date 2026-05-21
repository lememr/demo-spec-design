import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

const JWT_SECRET = process.env.JWT_SECRET;

const secret = JWT_SECRET ? new TextEncoder().encode(JWT_SECRET) : null;

function ensureSecret() {
  if (!secret) {
    throw new Error("JWT_SECRET environment variable is required");
  }
}

export interface Session {
  id: string;
  name: string;
  email: string;
  avatar: string;
}

export async function signSession(session: Session): Promise<string> {
  ensureSecret();
  return new SignJWT(session as unknown as Record<string, unknown>)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(secret!);
}

export async function verifySession(token: string): Promise<Session | null> {
  ensureSecret();
  try {
    const { payload } = await jwtVerify(token, secret!, { clockTolerance: 60 });
    return payload as unknown as Session;
  } catch {
    return null;
  }
}

export async function getSession(): Promise<Session | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get("session")?.value;
  if (!token) return null;
  return verifySession(token);
}

export async function setSession(token: string) {
  const cookieStore = await cookies();
  cookieStore.set("session", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7, // 7 days
    path: "/",
  });
}

export async function clearSession() {
  const cookieStore = await cookies();
  cookieStore.delete("session");
}

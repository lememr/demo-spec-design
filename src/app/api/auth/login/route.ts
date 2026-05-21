import { buildGitHubAuthUrl } from "@/lib/github";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function GET() {
  const state = crypto.randomUUID();
  const cookieStore = await cookies();
  cookieStore.set("oauth_state", state, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 600, // 10 minutes
    path: "/",
  });

  const url = buildGitHubAuthUrl(state);
  redirect(url);
}

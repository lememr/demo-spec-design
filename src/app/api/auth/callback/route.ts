import { exchangeGitHubCode, fetchGitHubUser } from "@/lib/github";
import { signSession, setSession } from "@/lib/auth";
import { cookies } from "next/headers";
import { NextRequest } from "next/server";
import { redirect } from "next/navigation";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const code = searchParams.get("code");
  const state = searchParams.get("state");

  const cookieStore = await cookies();
  const savedState = cookieStore.get("oauth_state")?.value;
  cookieStore.delete("oauth_state");

  if (!code || !state || state !== savedState) {
    redirect("/?error=invalid_state");
  }

  try {
    const accessToken = await exchangeGitHubCode(code);
    const githubUser = await fetchGitHubUser(accessToken);

    const session = {
      id: String(githubUser.id),
      name: githubUser.name || githubUser.login,
      email: githubUser.email || `${githubUser.login}@users.noreply.github.com`,
      avatar: githubUser.avatar_url,
    };

    const token = await signSession(session);
    await setSession(token);

    redirect("/dashboard");
  } catch (err) {
    console.error("OAuth callback error:", err);
    redirect("/?error=oauth_failed");
  }
}

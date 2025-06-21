// import NextAuth from "next-auth";
// import { authConfig } from "@/lib/auth/config";

// const handler = NextAuth(authConfig);

// export { handler as GET, handler as POST };

// Temporary placeholder since auth is disabled
export async function GET() {
  return new Response('Authentication disabled', { status: 404 });
}

export async function POST() {
  return new Response('Authentication disabled', { status: 404 });
} 
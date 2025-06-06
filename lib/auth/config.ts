import { NextAuthConfig } from 'next-auth';
import { SupabaseAdapter } from '@auth/supabase-adapter';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import { z } from 'zod';

const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

export const authConfig: NextAuthConfig = {
  adapter: SupabaseAdapter({
    url: process.env.NEXT_PUBLIC_SUPABASE_URL!,
    secret: process.env.SUPABASE_SERVICE_ROLE_KEY!,
  }),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        try {
          const { email, password } = loginSchema.parse(credentials);

          // Here you would typically validate the credentials against your database
          // For now, we'll just return a mock user
          if (email === 'test@example.com' && password === 'password') {
            return {
              id: '1',
              email: 'test@example.com',
              name: 'Test User',
            };
          }

          return null;
        } catch (error) {
          console.error('Auth Error:', error);
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: '/login',
    signOut: '/',
    error: '/login',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        // Only assign role if it exists on user
        if ('role' in user) {
          token.role = user.role;
        }
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id as string;
        // Only assign if role exists on token
        if ('role' in token) {
          // @ts-expect-error: role is custom
          session.user.role = token.role as string;
        }
      }
      return session;
    },
  },
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
}; 
# NextAuth.js Setup Guide

This project has been configured with NextAuth.js for authentication. Here's what you need to do to complete the setup:

## 1. Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/bagrusarees"

# NextAuth
NEXTAUTH_SECRET="your-nextauth-secret-key"
NEXTAUTH_URL="http://localhost:3000"

# Supabase (if using Supabase adapter)
NEXT_PUBLIC_SUPABASE_URL="your-supabase-url"
SUPABASE_SERVICE_ROLE_KEY="your-supabase-service-role-key"

# Google OAuth (if using Google provider)
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
```

## 2. Generate NextAuth Secret

Generate a secure secret for NextAuth:

```bash
openssl rand -base64 32
```

## 3. Google OAuth Setup (Optional)

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable Google+ API
4. Go to Credentials → Create Credentials → OAuth 2.0 Client IDs
5. Set authorized redirect URI: `http://localhost:3000/api/auth/callback/google`
6. Copy Client ID and Client Secret to your `.env.local`

## 4. Supabase Setup (Optional)

If using Supabase as your database:

1. Create a Supabase project
2. Get your project URL and service role key
3. Add them to your `.env.local`

## 5. Database Setup

Make sure your PostgreSQL database is running and accessible with the connection string in `DATABASE_URL`.

## 6. Test Authentication

1. Start your development server: `npm run dev`
2. Navigate to `/auth/login`
3. Try logging in with the test credentials:
   - Email: `test@example.com`
   - Password: `password`

## 7. Customization

- Update the `authorize` function in `lib/auth/config.ts` to connect with your actual database
- Add more providers as needed
- Customize the session callback to include additional user data

## 8. Production Deployment

For production:

1. Update `NEXTAUTH_URL` to your production domain
2. Set up environment variables in your hosting platform (Vercel, etc.)
3. Ensure your database is accessible from your production environment
4. Update Google OAuth redirect URIs for production domain

## Features Included

- ✅ NextAuth.js v4 setup
- ✅ Google OAuth provider
- ✅ Credentials provider (email/password)
- ✅ Supabase adapter
- ✅ TypeScript support with custom types
- ✅ Session management
- ✅ Protected routes
- ✅ Login/logout functionality
- ✅ User profile access

## Usage

```tsx
// In any component
import { useSession, signIn, signOut } from 'next-auth/react';

export default function MyComponent() {
  const { data: session, status } = useSession();

  if (status === 'loading') return <div>Loading...</div>;
  
  if (session) {
    return (
      <div>
        <p>Welcome, {session.user.name}!</p>
        <button onClick={() => signOut()}>Sign Out</button>
      </div>
    );
  }

  return <button onClick={() => signIn()}>Sign In</button>;
}
``` 
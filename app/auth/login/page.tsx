'use client';

// import Link from 'next/link';
// import React, { useState, useEffect } from 'react';
// import { signIn, useSession } from 'next-auth/react';
// import { useRouter, useSearchParams } from 'next/navigation';

export default function LoginPage() {
  // const { data: session, status } = useSession();
  // const router = useRouter();
  // const searchParams = useSearchParams();
  // const callbackUrl = searchParams.get('callbackUrl') || '/';

  // // Redirect if already logged in
  // useEffect(() => {
  //   if (session) {
  //     router.replace(callbackUrl);
  //   }
  // }, [session, callbackUrl, router]);

  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [error, setError] = useState<string | null>(null);
  // const [isLoading, setIsLoading] = useState(false);

  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   setError(null);
  //   setIsLoading(true);

  //   try {
  //     const result = await signIn('credentials', {
  //       email,
  //       password,
  //       redirect: false,
  //     });

  //     if (result?.error) {
  //       setError('Invalid email or password');
  //     } else {
  //       router.push(callbackUrl);
  //     }
  //   } catch (error) {
  //     setError('An error occurred during sign in');
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  // if (status === 'loading') {
  //   return (
  //     <div className="min-h-screen flex items-center justify-center">
  //       <div className="text-center">Loading...</div>
  //     </div>
  //   );
  // }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Authentication Disabled</h1>
        <p className="text-gray-600">Login and signup features are currently disabled.</p>
        <a href="/" className="text-blue-600 hover:underline mt-4 inline-block">
          Return to Home
        </a>
      </div>
    </div>
  );
}
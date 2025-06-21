"use client";

// import { signOut } from 'next-auth/react';
// import { useRouter } from 'next/navigation';
// import { useEffect } from 'react';

export default function LogoutPage() {
  // const router = useRouter();

  // useEffect(() => {
  //   signOut({ callbackUrl: '/' });
  // }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Logout</h1>
        <p className="text-gray-600">Authentication is currently disabled.</p>
        <a href="/" className="text-blue-600 hover:underline mt-4 inline-block">
          Return to Home
        </a>
      </div>
    </div>
  );
} 
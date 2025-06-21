"use client";

// import { useSession } from 'next-auth/react';
// import { useRouter } from 'next/navigation';
// import { useEffect } from 'react';

export default function ProfilePage() {
  // const { data: session, status } = useSession();
  // const router = useRouter();

  // useEffect(() => {
  //   if (status === 'unauthenticated') {
  //     router.push('/auth/login');
  //   }
  // }, [status, router]);

  // if (status === 'loading') {
  //   return (
  //     <div className="min-h-screen flex items-center justify-center">
  //       <div className="text-center">Loading...</div>
  //     </div>
  //   );
  // }

  // if (!session) {
  //   return null;
  // }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Profile Page</h1>
        <p className="text-gray-600">Authentication is currently disabled.</p>
        <a href="/" className="text-blue-600 hover:underline mt-4 inline-block">
          Return to Home
        </a>
      </div>
    </div>
  );
} 
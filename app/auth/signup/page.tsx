'use client';

// import Link from 'next/link';
// import React, { useState, useEffect } from 'react';
// import { signIn, useSession } from 'next-auth/react';
// import { useRouter } from 'next/navigation';

export default function SignupPage() {
  // const { data: session, status } = useSession();
  // const router = useRouter();

  // // Redirect if already logged in
  // useEffect(() => {
  //   if (session) {
  //     router.replace('/');
  //   }
  // }, [session, router]);

  // const [formData, setFormData] = useState({
  //   firstName: '',
  //   lastName: '',
  //   email: '',
  //   password: '',
  //   confirmPassword: '',
  // });
  // const [error, setError] = useState<string | null>(null);
  // const [isLoading, setIsLoading] = useState(false);

  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   setError(null);
  //   setIsLoading(true);

  //   if (formData.password !== formData.confirmPassword) {
  //     setError('Passwords do not match');
  //     setIsLoading(false);
  //     return;
  //   }

  //   try {
  //     // Here you would typically make an API call to create the user
  //     // For now, we'll just simulate a successful signup
  //     await new Promise(resolve => setTimeout(resolve, 1000));
  //     
  //     // Sign in the user after successful signup
  //     const result = await signIn('credentials', {
  //       email: formData.email,
  //       password: formData.password,
  //       redirect: false,
  //     });

  //     if (result?.error) {
  //       setError('Failed to sign in after signup');
  //     } else {
  //       router.push('/');
  //     }
  //   } catch (error) {
  //     setError('An error occurred during signup');
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
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
        <p className="text-gray-600">Signup features are currently disabled.</p>
        <a href="/" className="text-blue-600 hover:underline mt-4 inline-block">
          Return to Home
        </a>
      </div>
    </div>
  );
}

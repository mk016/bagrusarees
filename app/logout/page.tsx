"use client";
import { useEffect } from 'react';
import { useAuth } from '@/Components/AuthContext';
import { useRouter } from 'next/navigation';

export default function LogoutPage() {
  const { logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    logout();
    router.replace('/');
  }, [logout, router]);

  return <p className="text-center mt-16">Logging out...</p>;
} 
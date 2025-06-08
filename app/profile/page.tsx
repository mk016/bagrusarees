"use client";
import { useAuth } from '@/Components/AuthContext';
import { useRouter } from 'next/navigation';

export default function ProfilePage() {
  const { user, logout } = useAuth();
  const router = useRouter();

  if (!user) {
    router.replace('/auth/login');
    return null;
  }

  return (
    <div className="max-w-md mx-auto mt-16 p-8 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Profile</h1>
      <div className="mb-4">
        <p><span className="font-semibold">Name:</span> {user.name}</p>
        <p><span className="font-semibold">Email:</span> {user.email}</p>
      </div>
      <button
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        onClick={() => { logout(); router.push('/'); }}
      >
        Logout
      </button>
    </div>
  );
} 
// 'use client';

// import { useSession, signIn, signOut } from 'next-auth/react';

// export const useAuth = () => {
//   const { data: session, status } = useSession();

//   return {
//     user: session?.user || null,
//     isAuthenticated: !!session?.user,
//     isLoading: status === 'loading',
//     signIn,
//     signOut,
//   };
// };

// Temporary placeholder since auth is disabled
export const useAuth = () => {
  return {
    user: null,
    isAuthenticated: false,
    isLoading: false,
    signIn: () => Promise.resolve(),
    signOut: () => Promise.resolve(),
  };
}; 
import React from 'react'
import { Navigate } from 'react-router-dom';
// @ts-ignore
import {useUser} from '../useUser';

export default function RequireRole({ role, redirectTo = '/unauthorized', children }: { 
  role: string; 
  redirectTo?: string; 
  children: React.ReactNode 
}) {
  const { user } = useUser();
  
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  
  if (user.role !== role) {
    return <Navigate to={redirectTo} replace />;
  }
  
  return <div>{children}</div>;
}

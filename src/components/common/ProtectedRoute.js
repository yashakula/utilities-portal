// src/components/common/ProtectedRoute.js
import React from 'react';
import { useAtom } from 'jotai';
import { Navigate } from 'react-router-dom';
import { userAtom } from '../../atoms/userAtom';

const ProtectedRoute = ({ children }) => {
  const [user] = useAtom(userAtom);
  return user ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
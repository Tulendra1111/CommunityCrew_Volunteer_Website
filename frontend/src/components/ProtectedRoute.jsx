import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading, user } = useAuth();
  const location = useLocation();

  // Debug logging
  console.log('ProtectedRoute - loading:', loading, 'isAuthenticated:', isAuthenticated, 'user:', user);

  // Show loading spinner while authentication is being checked
  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading...</p>
      </div>
    );
  }

  // Only redirect to login if we're sure the user is not authenticated
  // and we're not in the middle of loading
  if (!loading && !isAuthenticated) {
    console.log('Redirecting to login from:', location.pathname);
    // Redirect to login page with return url
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // If authenticated or still loading, show the protected content
  console.log('Showing protected content for:', location.pathname);
  return children;
};

export default ProtectedRoute;

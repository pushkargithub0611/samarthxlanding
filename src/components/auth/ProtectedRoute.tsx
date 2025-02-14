
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import type { UserRole } from '@/types/auth';

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles?: UserRole[];
}

const ProtectedRoute = ({ children, allowedRoles }: ProtectedRouteProps) => {
  const { session, profile, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!session) {
    return <Navigate to="/auth" state={{ from: location }} replace />;
  }

  if (allowedRoles && profile && !allowedRoles.includes(profile.role)) {
    // Redirect to appropriate dashboard based on role
    const dashboardRoute = profile.role === 'super_admin' ? '/admin'
      : profile.role === 'school_admin' ? '/school-dashboard'
      : profile.role === 'teacher' ? '/teacher-dashboard'
      : '/student-dashboard';
    
    return <Navigate to={dashboardRoute} replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;

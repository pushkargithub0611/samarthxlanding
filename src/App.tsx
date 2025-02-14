
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Communication from "./pages/Communication";
import Documents from "./pages/Documents";
import Auth from "./pages/Auth";
import SchoolRegistration from "./pages/SchoolRegistration";
import Schools from "./pages/Schools";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import { EducationalVideos } from "./components/academics/EducationalVideos";

const queryClient = new QueryClient();

// Placeholder components for role-based dashboards
const ModulePage = ({ title }: { title: string }) => (
  <div className="p-8">
    <h1 className="text-2xl font-bold mb-4">{title}</h1>
    <p>This module is coming soon. Please check back later.</p>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/auth" element={<Auth />} />
          
          {/* Super Admin Routes */}
          <Route path="/admin/*" element={
            <ProtectedRoute allowedRoles={['super_admin']}>
              <ModulePage title="Super Admin Dashboard" />
            </ProtectedRoute>
          } />

          {/* School Admin Routes */}
          <Route path="/school-dashboard/*" element={
            <ProtectedRoute allowedRoles={['school_admin']}>
              <ModulePage title="School Admin Dashboard" />
            </ProtectedRoute>
          } />

          {/* Teacher Routes */}
          <Route path="/teacher-dashboard/*" element={
            <ProtectedRoute allowedRoles={['teacher']}>
              <ModulePage title="Teacher Dashboard" />
            </ProtectedRoute>
          } />

          {/* Student Routes */}
          <Route path="/student-dashboard/*" element={
            <ProtectedRoute allowedRoles={['student']}>
              <ModulePage title="Student Dashboard" />
            </ProtectedRoute>
          } />

          {/* Protected Routes */}
          <Route path="/school-registration" element={
            <ProtectedRoute allowedRoles={['super_admin', 'school_admin']}>
              <SchoolRegistration />
            </ProtectedRoute>
          } />
          <Route path="/schools" element={
            <ProtectedRoute allowedRoles={['super_admin', 'school_admin']}>
              <Schools />
            </ProtectedRoute>
          } />
          <Route path="/communication" element={
            <ProtectedRoute>
              <Communication />
            </ProtectedRoute>
          } />
          <Route path="/documents" element={
            <ProtectedRoute>
              <Documents />
            </ProtectedRoute>
          } />
          <Route path="/academics" element={
            <ProtectedRoute>
              <div className="container mx-auto py-8 px-4">
                <h1 className="text-2xl font-bold mb-6">Academic Resources</h1>
                <EducationalVideos />
              </div>
            </ProtectedRoute>
          } />

          {/* Fallback route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

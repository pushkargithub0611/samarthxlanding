
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Communication from "./pages/Communication";
import Documents from "./pages/Documents";

const queryClient = new QueryClient();

// Placeholder components for module routes
const ModulePage = ({ title }: { title: string }) => (
  <div className="p-8">
    <h1 className="text-2xl font-bold mb-4">{title} Module</h1>
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
          <Route path="/communication" element={<Communication />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/students" element={<ModulePage title="Student Management" />} />
          <Route path="/teachers" element={<ModulePage title="Teacher Management" />} />
          <Route path="/academics" element={<ModulePage title="Academic Management" />} />
          <Route path="/incentives" element={<ModulePage title="Incentives & Scholarships" />} />
          <Route path="/admin" element={<ModulePage title="Administrative Tools" />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Emergency from "./pages/Emergency";
import NGO from "./pages/NGO";
import Jobs from "./pages/Jobs";
import Reports from "./pages/Reports";
import PlaceholderPage from "./pages/PlaceholderPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Feature pages */}
          <Route path="/emergency" element={<Emergency />} />
          <Route path="/ngo" element={<NGO />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/reports" element={<Reports />} />

          {/* Placeholder routes for footer links */}
          <Route
            path="/about"
            element={
              <PlaceholderPage
                title="About Us"
                description="Learn more about the War Crisis Platform"
              />
            }
          />
          <Route
            path="/contact"
            element={
              <PlaceholderPage
                title="Contact Us"
                description="Get in touch with our team"
              />
            }
          />
          <Route
            path="/privacy"
            element={
              <PlaceholderPage
                title="Privacy Policy"
                description="How we protect your data"
              />
            }
          />
          <Route
            path="/terms"
            element={
              <PlaceholderPage
                title="Terms of Service"
                description="Terms and conditions for using our platform"
              />
            }
          />
          <Route
            path="/forgot-password"
            element={
              <PlaceholderPage
                title="Reset Password"
                description="Recover your account access"
              />
            }
          />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

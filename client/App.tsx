import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
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
          
          {/* Placeholder routes for navigation items */}
          <Route 
            path="/emergency" 
            element={
              <PlaceholderPage 
                title="Emergency Check-in" 
                description="Mark yourself safe or request help during crisis situations"
                comingSoonMessage="The emergency check-in system is being developed to provide real-time safety status updates and emergency assistance requests."
              />
            } 
          />
          <Route 
            path="/ngo" 
            element={
              <PlaceholderPage 
                title="NGO Coordination" 
                description="Aid requests and volunteer support coordination"
                comingSoonMessage="The NGO coordination portal will connect relief organizations with communities in need, facilitating efficient aid distribution."
              />
            } 
          />
          <Route 
            path="/jobs" 
            element={
              <PlaceholderPage 
                title="Job & Skill-Match" 
                description="Connect refugees and displaced persons with opportunities"
                comingSoonMessage="The job matching platform will help displaced individuals find employment opportunities and skill-based volunteering."
              />
            } 
          />
          <Route 
            path="/reports" 
            element={
              <PlaceholderPage 
                title="Citizen Reporting" 
                description="Report and verify local incidents"
                comingSoonMessage="The citizen reporting system will enable real-time incident reporting and verification for better crisis response."
              />
            } 
          />
          
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

createRoot(document.getElementById("root")!).render(<App />);

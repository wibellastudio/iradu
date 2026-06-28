import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import Ionut from "./pages/Ionut";
import Adriana from "./pages/Adriana";
import Delia from "./pages/Delia";
import Fotos from "./pages/Fotos";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
     <BrowserRouter>
  <Layout>
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route
        path="/"
        element={
          <PrivateRoute>
            <Index />
          </PrivateRoute>
        }
      />

      <Route
        path="/ionut"
        element={
          <PrivateRoute>
            <Ionut />
          </PrivateRoute>
        }
      />

      <Route
        path="/adriana"
        element={
          <PrivateRoute>
            <Adriana />
          </PrivateRoute>
        }
      />

      <Route
        path="/delia"
        element={
          <PrivateRoute>
            <Delia />
          </PrivateRoute>
        }
      />

      <Route
        path="/fotos"
        element={
          <PrivateRoute>
            <Fotos />
          </PrivateRoute>
        }
      />

      <Route path="*" element={<NotFound />} />
    </Routes>
  </Layout>
</BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);

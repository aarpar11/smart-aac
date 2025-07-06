import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import BinauralBeats from "./pages/BinauralBeats";
import Blog from "./pages/Blog";
import Meditation from "./pages/Meditation";
import CalmingRoom from "./pages/CalmingRoom";
import ABATherapy from "./pages/ABATherapy";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen bg-gradient-background">
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/binaural-beats" element={<BinauralBeats />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/meditation" element={<Meditation />} />
            <Route path="/calming-room" element={<CalmingRoom />} />
            <Route path="/aba-therapy" element={<ABATherapy />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

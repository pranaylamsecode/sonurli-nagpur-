import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { ServicesPage } from "./pages/Services";
import { ContactPage } from "./pages/ContactPage";
import { TeamPage } from "./pages/TeamPage";
import { GalleryPage } from "./pages/GalleryPage";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { AuthProvider } from "./contexts/AuthContext";
import { ContentProvider } from "./contexts/ContentContext";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { AdminDashboard } from "./pages/admin/AdminDashboard";
import { ScrollToTop } from "./components/ScrollToTop";

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      {/* @ts-expect-error: Routes supports key prop for AnimatePresence */}
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route
          path="/admin/*"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

const MainLayout: React.FC = () => {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith("/admin");

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800 font-sans selection:bg-brand-500/30 selection:text-brand-600">
      {!isAdmin && <Navbar />}
      <main className="flex-grow">
        <AnimatedRoutes />
      </main>
      {!isAdmin && <WhatsAppButton />}
      {!isAdmin && <Footer />}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <ContentProvider>
        <Router>
          <ScrollToTop />
          <MainLayout />
        </Router>
      </ContentProvider>
    </AuthProvider>
  );
};

export default App;

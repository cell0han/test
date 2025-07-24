
import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/sections/Header';
import HeroSection from '@/components/sections/HeroSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import ProductsSection from '@/components/sections/ProductsSection';
import Footer from '@/components/sections/Footer';
import ProductDetailPage from '@/pages/ProductDetailPage';
import MicrosoftOfficeInfoPage from '@/pages/MicrosoftOfficeInfoPage';
import ContactInfoDialog from '@/components/ContactInfoDialog';
import AboutUsDialog from '@/components/AboutUsDialog';
import ChatWidget from '@/components/ChatWidget';
import PrivacyPolicyDialog from '@/components/PrivacyPolicyDialog';
import { products } from '@/data/products';
import AuthDialog from '@/components/AuthDialog';
import { useAuth } from '@/contexts/AuthContext.jsx';


const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#products') {
      const section = document.getElementById('products');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <>
      <ProductsSection products={products} />
      <HeroSection />
      <FeaturesSection />
    </>
  );
};

const App = () => {
  const location = useLocation();
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false);
  const [isAboutUsDialogOpen, setIsAboutUsDialogOpen] = useState(false);
  const [isAuthDialogOpen, setIsAuthDialogOpen] = useState(false);
  const [isPrivacyPolicyDialogOpen, setIsPrivacyPolicyDialogOpen] = useState(false);
  const { isAuthenticated } = useAuth();

  const openContactDialog = () => setIsContactDialogOpen(true);
  const closeContactDialog = () => setIsContactDialogOpen(false);

  const openAboutUsDialog = () => setIsAboutUsDialogOpen(true);
  const closeAboutUsDialog = () => setIsAboutUsDialogOpen(false);

  const openAuthDialog = () => setIsAuthDialogOpen(true);
  
  const openPrivacyPolicyDialog = () => setIsPrivacyPolicyDialogOpen(true);
  const closePrivacyPolicyDialog = () => setIsPrivacyPolicyDialogOpen(false);

  const handleChatOpening = () => {
    if (!isAuthenticated) {
      setIsAuthDialogOpen(true);
      return false; 
    }
    return true; 
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 font-sans">
      <Toaster />
      <Header 
        openContactDialog={openContactDialog} 
        openAboutUsDialog={openAboutUsDialog}
        openAuthDialog={openAuthDialog}
      />
      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:productId" element={<ProductDetailPage products={products} />} />
            <Route path="/microsoft-office-info" element={<MicrosoftOfficeInfoPage />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer 
        openContactDialog={openContactDialog} 
        openAboutUsDialog={openAboutUsDialog}
        openPrivacyPolicyDialog={openPrivacyPolicyDialog}
      />
      <ContactInfoDialog isOpen={isContactDialogOpen} onClose={closeContactDialog} />
      <AboutUsDialog isOpen={isAboutUsDialogOpen} onClose={closeAboutUsDialog} />
      <PrivacyPolicyDialog isOpen={isPrivacyPolicyDialogOpen} onClose={closePrivacyPolicyDialog} />
      <ChatWidget onBeforeOpen={handleChatOpening} />
      <AuthDialog isOpen={isAuthDialogOpen} onOpenChange={setIsAuthDialogOpen} />
    </div>
  );
};

export default App;

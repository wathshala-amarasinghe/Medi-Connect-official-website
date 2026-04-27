import React, { useState, useEffect, useRef, Suspense, lazy } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Header } from "./Layout/Header";
import { HeroSection } from "./components/HeroSection";
import { TrustSection } from "./components/TrustSection";
import { CompanyOverview } from "./components/CompanyOverview";
import { PlatformOverview } from "./components/PlatformOverview";
import { CoreSolutions } from "./components/CoreSolutions";

const BenefitsSection = lazy(() => import('./components/BenefitsSection').then(m => ({ default: m.BenefitsSection })));
const AICapabilities = lazy(() => import('./components/AICapabilities').then(m => ({ default: m.AICapabilities })));
const ProductExperience = lazy(() => import('./components/ProductExperience').then(m => ({ default: m.ProductExperience })));
const HowItWorks = lazy(() => import('./components/HowItWorks').then(m => ({ default: m.HowItWorks })));
const CustomerSuccess = lazy(() => import('./components/CustomerSuccess').then(m => ({ default: m.CustomerSuccess })));
const InsightsSection = lazy(() => import('./components/InsightsSection').then(m => ({ default: m.InsightsSection })));
const PricingSection = lazy(() => import('./components/PricingSection').then(m => ({ default: m.PricingSection })));
const TestimonialsSection = lazy(() => import('./components/TestimonialsSection').then(m => ({ default: m.TestimonialsSection })));
const CTASection = lazy(() => import('./components/CTASection').then(m => ({ default: m.CTASection })));

import { Footer } from "./Layout/Footer";
import { Toaster } from "react-hot-toast";
import Loader from "./components/Loader.tsx";

export function App() {
  const [loading, setLoading] = useState(true);

  const pricingRef = useRef<HTMLDivElement>(null);
  const companyRef = useRef<HTMLDivElement>(null); 

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Loader />}

      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[var(--brand-red)] origin-left z-[9999]"
        style={{ scaleX }}
      />

      <div className="min-h-screen bg-main font-body text-content selection:bg-brand-red/20 selection:text-brand-red transition-colors duration-500">
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: "var(--background)",
              color: "var(--text-main)",
              border: "1px solid var(--brand-red)"
            }
          }}
        />

        <Header pricingRef={pricingRef} companyRef={companyRef} />

        <main>
          <HeroSection />
          <TrustSection />

          <div ref={companyRef}>
            <CompanyOverview />
          </div>

          <PlatformOverview />
          <CoreSolutions />
          <Suspense fallback={<div className="h-32 flex items-center justify-center text-[var(--brand-red)] animate-pulse">Loading section...</div>}>
            <BenefitsSection />
            <AICapabilities />
            <ProductExperience />
            <HowItWorks />
            <CustomerSuccess />
            <InsightsSection />

            {/* Pricing section ref */}
            <div ref={pricingRef}>
              <PricingSection />
            </div>

            <TestimonialsSection />
            <CTASection />
          </Suspense>
        </main>

        <Footer />
      </div>
    </>
  );
}
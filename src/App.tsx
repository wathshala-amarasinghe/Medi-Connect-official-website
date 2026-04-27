import React, { useState, useEffect, useRef } from "react";
import { Header } from "./Layout/Header";
import { HeroSection } from "./components/HeroSection";
import { TrustSection } from "./components/TrustSection";
import { CompanyOverview } from "./components/CompanyOverview";
import { PlatformOverview } from "./components/PlatformOverview";
import { CoreSolutions } from "./components/CoreSolutions";
import { BenefitsSection } from "./components/BenefitsSection";
import { AICapabilities } from "./components/AICapabilities";
import { ProductExperience } from "./components/ProductExperience";
import { HowItWorks } from "./components/HowItWorks";
import { CustomerSuccess } from "./components/CustomerSuccess";
import { InsightsSection } from "./components/InsightsSection";
import { PricingSection } from "./components/PricingSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { CTASection } from "./components/CTASection";
import { Footer } from "./Layout/Footer";
import { Toaster } from "react-hot-toast";
import Loader from "./components/Loader.tsx";

export function App() {
  const [loading, setLoading] = useState(true);

  const pricingRef = useRef<HTMLDivElement>(null);
  const companyRef = useRef<HTMLDivElement>(null); 

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Loader />}

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
        </main>

        <Footer />
      </div>
    </>
  );
}
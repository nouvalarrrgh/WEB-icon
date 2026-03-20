import { useState, useCallback } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TimelineSection from "@/components/TimelineSection";
import CompetitionsSection from "@/components/CompetitionsSection";
import SponsorsSection from "@/components/SponsorsSection";
import FAQSection from "@/components/FAQSection";
import FooterSection from "@/components/FooterSection";
import IntroAnimation from "@/components/IntroAnimation";

const Index = () => {
  const [showContent, setShowContent] = useState(false);

  const handleIntroComplete = useCallback(() => {
    setShowContent(true);
  }, []);

  return (
    <div className="min-h-screen bg-ifest-navy">
      <IntroAnimation onComplete={handleIntroComplete} />
      {showContent && (
        <>
          <Navbar />
          <div className="mt-20">
            <HeroSection />
            <TimelineSection />
            <CompetitionsSection />
            <SponsorsSection />
            <FAQSection />
            <FooterSection />
          </div>
        </>
      )}
    </div>
  );
};

export default Index;

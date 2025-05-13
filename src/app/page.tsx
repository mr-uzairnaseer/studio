import HeroSection from '@/components/sections/hero-section';
import FeaturesOverviewSection from '@/components/sections/features-overview';
import CtaSection from '@/components/sections/cta-section';
import HowItWorksSection from '@/components/sections/how-it-works';
import AboutSection from '@/components/sections/about-section';

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesOverviewSection />
      <HowItWorksSection />
      <AboutSection />
      <CtaSection />
    </>
  );
}

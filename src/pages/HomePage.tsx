import HeroSection from "../components/home/HeroSection";
import FeaturedServices from "../components/home/FeaturedServices";
import StatsSection from "../components/home/StatsSection";
import ProjectsShowcase from "../components/home/ProjectsShowcase";
import TestimonialsSection from "../components/home/TestimonialsSection";
import CtaSection from "../components/home/CtaSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedServices />
      <StatsSection />
      <ProjectsShowcase />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
}

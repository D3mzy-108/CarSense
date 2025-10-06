import HeroSection from "@/components/HomePage/HeroSection";
import Services from "@/components/HomePage/Services";
import Testimonials from "@/components/HomePage/Testimonial";
import WhyChooseUs from "@/components/HomePage/WhyChooseUs";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Services />
      <WhyChooseUs />
      <Testimonials />
    </>
  );
}

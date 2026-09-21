import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import PainlessDentistry from "@/components/PainlessDentistry";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import DentalExperience from "@/components/DentalExperience";
import ParentEducation from "@/components/ParentEducation";
import Testimonials from "@/components/Testimonials";
import Reviews from "@/components/Reviews";
import InstagramSection from "@/components/InstagramSection";
import AppointmentSection from "@/components/AppointmentSection";
import Contact from "@/components/Contact";
import MapSection from "@/components/MapSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-teal-800 focus:px-5 focus:py-3 focus:text-sm focus:text-white"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <AboutSection />
        <PainlessDentistry />
        <Services />
        <WhyChooseUs />
        <DentalExperience />
        <ParentEducation />
        <Testimonials />
        <Reviews />
        <InstagramSection />
        <AppointmentSection />
        <Contact />
        <MapSection />
      </main>
      <Footer />
    </>
  );
}

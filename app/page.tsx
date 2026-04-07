import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Objections from "@/components/Objections";
import Services from "@/components/Services";
import ClientsMarquee from "@/components/ClientsMarquee";
import Testimonials from "@/components/Testimonials";
import FearCallout from "@/components/FearCallout";
import CaseStudies from "@/components/CaseStudies";
import PhotoGallery from "@/components/PhotoGallery";
import Locations from "@/components/Locations";
import Process from "@/components/Process";
import Recurrence from "@/components/Recurrence";
import About from "@/components/About";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <Objections />
      <Services />
      <ClientsMarquee />
      <Testimonials />
      <FearCallout />
      {/* <CaseStudies /> */}
      <PhotoGallery />
      <Locations />
      <Process />
      <Recurrence />
      <About />
      <CTA />
      <Footer />
    </main>
  );
}

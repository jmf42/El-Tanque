import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import Features from "./components/Features";
import ReviewsSection from "./components/ReviewsSection";
import MapSection from "./components/MapSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AboutSection />
      <Features />
      <ReviewsSection />
      <MapSection />
      <Footer />
    </main>
  );
}

import CompanyLogo from "./components/CompanyLogo";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import "./App.css";
import PurposeSection from "./components/PurposeSection";
import FeaturesSection from "./components/FeaturesSection";
import ScheduleSection from "./components/ScheduleSection";
import MonitorSection from "./components/MonitorSection";
import PricingSection from "./components/PricingSection";
import ServicesSection from "./components/ServicesSection";
import TestimonialSection from "./components/TestimonialSection";
import NewsLetterSection from "./components/NewsLetterSection";
import Footer from "./components/Footer";

const App = () => {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {/* Adjusted Background Effect */}
      <div className="absolute -top-28 -left-28 w-[600px] h-[600px] bg-gradient-to-tr from-indigo-500/20 to-pink-500/20 rounded-full blur-[100px] -z-10"></div>

      <div className="overflow-hidden">
        <Navbar />
        <Hero />
        <CompanyLogo />
        <PurposeSection />
        <FeaturesSection />
        <ScheduleSection />
        <MonitorSection />
        <PricingSection />
        <ServicesSection />
        <TestimonialSection />
        <NewsLetterSection />
        <Footer />
      </div>
    </main>
  );
};

export default App;

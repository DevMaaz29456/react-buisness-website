import { FaArrowRight } from "react-icons/fa";
import monitorCardImg from "../assets/monitor-card.webp";

const MonitorSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
        {/* Left Side - Content */}
        <div className="md:w-1/2 w-full text-center md:text-left">
          <p className="text-green-500 font-semibold">MONITOR</p>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4 lg:w-4/5">
            Introducing Best Mobile Carousels
          </h2>
          <p className="text-gray-600 mb-6">
            Experience seamless navigation with the best mobile carousels,
            designed for smooth and interactive user engagement.
          </p>
          <a
            href="#"
            className="text-blue-500 font-semibold flex items-center gap-2 hover:gap-4 transition-all duration-300 sm:justify-center md:justify-start"
          >
            Explore Scheduling Features
            <FaArrowRight className="size-6" />
          </a>
        </div>

        {/* Right Side - Image */}
        <div className="md:w-1/2 w-full">
          <img
            src={monitorCardImg}
            alt="monitor image"
            className="w-full h-auto max-w-sm mx-auto md:max-w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default MonitorSection;

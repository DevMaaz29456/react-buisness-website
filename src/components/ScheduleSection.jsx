import ScheduleImage from "../assets/stats.webp";
import { FaArrowRight } from "react-icons/fa";

const ScheduleSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 md:py-24 ">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24">
        {/* left */}
        <div className="md:w-1/2 w-full">
          <img src={ScheduleImage} alt="" className="w-full h-auto" />
        </div>

        {/* right */}
        <div className="md:w-1/2 w-full">
          <p className="text-orange-500 font-semibold">SHEDULE</p>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
            Streamline Your Buisneness <br /> With Smart Scheduling Solutions
          </h2>
          <p className="text-gray-600 mb-8">
            Optimize your workflow with our intelligent scheduling solutions.
            Automate tasks, reduce manual effort, and enhance productivity with
            seamless coordination and smart planning tools." Let me know if you
            need any refinements!
          </p>
          <a
            href="#"
            className="text-blue-500 font-semibold flex items-center gap-2 hover:gap-4 transition-all"
          >
            Explore Scheduling features
            <FaArrowRight className="size-8 " />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;

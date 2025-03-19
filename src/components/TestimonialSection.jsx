import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useRef } from "react";

const testimonials = [
  {
    id: 1,
    name: "Robin Ayala Doe",
    image: "https://randomuser.me/api/portraits/men/77.jpg",
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast.",
  },
  {
    id: 2,
    name: "John De Marli",
    image: "https://randomuser.me/api/portraits/women/90.jpg",
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.",
  },
  {
    id: 3,
    name: "Rowhan Smith",
    image: "https://randomuser.me/api/portraits/men/90.jpg",
    text: "When she reached the first hills of the Mountains, she had a last view back on the of her hometown Bookmarksgrove, the headline.",
  },
  {
    id: 4,
    name: "Sarah Johnson",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    text: "The customer service has been exceptional. They went above and beyond to help me solve my problems and were always available when I needed them.",
  },
  {
    id: 5,
    name: "Michael Chen",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "I've been using their services for over a year now and couldn't be happier. The platform is intuitive and the features are exactly what I needed for my business.",
  },
  {
    id: 6,
    name: "Emma Wilson",
    image: "https://randomuser.me/api/portraits/women/28.jpg",
    text: "What impressed me most was how quickly they responded to my requests. The team is professional, knowledgeable, and truly cares about their customers' success.",
  },
];

const TestimonialSection = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto" id="testimonials">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold md:text-4xl mb-4">
          What Our Happy Clients Say!
        </h2>
        <p className="text-gray-600">
          Hear from our clients who love our work and trust our services!
        </p>
      </div>

      {/* Swiper Container */}
      <div className="relative">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          modules={[Navigation]}
          className="testimonial-swiper"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id} className="py-6">
              <div className="flex flex-col items-center justify-between bg-white p-6 rounded-lg shadow-md h-[350px] w-[300px] mx-auto">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24 object-cover rounded-full mb-4"
                />
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, index) => (
                    <span key={index} className="text-yellow-400">
                      ⭐
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">
                  {testimonial.name}
                </h3>
                <p className="text-gray-600 text-center line-clamp-4">
                  {testimonial.text}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-4 mt-8">
          <button
            ref={prevRef}
            className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all duration-200 cursor-pointer"
          >
            <BsChevronLeft className="text-2xl" />
          </button>
          <button
            ref={nextRef}
            className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all duration-200 cursor-pointer"
          >
            <BsChevronRight className="text-2xl" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;

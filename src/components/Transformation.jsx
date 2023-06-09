import { ArrowBackIos } from "@mui/icons-material";
import { ArrowForwardIos } from "@mui/icons-material";
import Aos from "aos";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Transformation = ({ testimonialref }) => {
  const slides = [
    {
      id: 1,
      story:
        ' "Their approach to wellness is truly holistic, taking into account all aspects of my life including nutrition, exercise, stress management, and self-care. My mentor was incredibly knowledgeable and supportive, providing me with personalized guidance and practical tools to help me achieve my goals. With their help, I was able to make significant improvements in my overall well-being and feel more empowered to take charge of my health. I highly recommend this company to anyone looking for a comprehensive and transformative wellness experience." ',
      name: "RAJ SONI ",
    },
    {
      id: 2,
      story:
        ' "I am amazed at the progress I have made. Their team of experts has helped me identify and overcome obstacles that were holding me back from achieving my full potential. Their approach to wellness is unique, combining evidence-based practices with a compassionate and supportive approach. They have helped me develop new habits and strategies for success that have improved my overall well-being and productivity. I am truly grateful for their support and highly recommend their services to anyone who is looking to live their best life." ',
      name: "RUDRA SINGH",
    },
    {
      id: 3,
      story:
        ' "Their team is incredibly skilled, empathetic, and supportive, and they have helped me make significant improvements in my life. With their guidance, I have been able to overcome my limiting beliefs and tap into my full potential. Their approach to wellness is truly transformative, focusing on creating sustainable habits that promote overall well-being. I am grateful for their continued support and highly recommend their services to anyone who is looking to live their best life." ',
      name: "VISHAL VERMA",
    },
    {
      id: 4,
      story:
        ' "Their team is incredibly skilled, empathetic, and supportive, and they have helped me make significant improvements in my life. With their guidance, I have been able to overcome my limiting beliefs and tap into my full potential. Their approach to wellness is truly transformative, focusing on creating sustainable habits that promote overall well-being. I am grateful for their continued support and highly recommend their services to anyone who is looking to live their best life." ',
      name: "VISHAL VERMA",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const numSlides = 3; // Total number of slides

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % numSlides);
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + numSlides) % numSlides);
  };

  useEffect(() => {}, []);
  return (
    <div className="flex flex-col items-center m-8" ref={testimonialref}>
      <div>
        <h1 className="text-3xl md:text-5xl font-semibold py-4">
          Our Stories Of{" "}
          <span className="bg-gradient-to-l from-cyan-500 via-cyan-300 to-cyan-500 text-transparent  bg-clip-text font-bold">
            Transformation
          </span>
        </h1>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        key={currentSlide}
      >
        <div className="my-4">
          {slides.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`${
                index === currentSlide ? "flex" : "hidden"
              }   max-w-sm`}
            >
              <div className="bg-white p-6 rounded shadow-md text-center">
                <p className="text-[#8ca1b3]  leading-8">{testimonial.story}</p>
                <p className="bg-gradient-to-l from-cyan-500 via-cyan-300 to-cyan-500 text-transparent  bg-clip-text font-bold">
                  {testimonial.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <div className="mt-4 hidden md:block space-x-2">
        <button onClick={prevSlide}>
          <ArrowBackIos className="stroke-cyan-500" />
        </button>
        <button className="" onClick={nextSlide}>
          <ArrowForwardIos className="stroke-cyan-500" />
        </button>
      </div>
    </div>
  );
};

export default Transformation;
{
  /* <div className=" mx-auto flex gap-7 md:gap-0   p-4">
<Swiper
  spaceBetween={50}
  slidesPerView={3}
  onSlideChange={() => console.log("slide change")}
  onSwiper={(swiper) => console.log(swiper)}
>
  {slides.map((testimonial, index) => (
    <div
      key={testimonial.id}
      className={`${index === slide ? "flex" : "hidden"} `}
    >
      <div className="bg-white p-6 rounded shadow-md text-center">
        <p className="text-[#8ca1b3] leading-7">{testimonial.story}</p>
        <p className="bg-gradient-to-l from-cyan-500 via-cyan-300 to-cyan-500 text-transparent my-4 bg-clip-text font-bold">
          {testimonial.name}
        </p>
      </div>
    </div>
  ))}
</Swiper>
</div> */
}

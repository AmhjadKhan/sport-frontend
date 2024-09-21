import { useEffect, useState } from "react";
import { Avatar, Carousel } from "antd";

interface TestimonialData {
  name: string;
  photo: string;
  thumbnail: string;
  comment: string;
  section: string;
}

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState<TestimonialData[]>([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch("/testomonial.json"); // Adjust the path if needed
        const data = await response.json();
        setTestimonials(data);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <div className="bg-white text-black py-16 px-6 lg:px-12">
    <div className="container mx-auto flex flex-col items-center"> {/* Center items */}
      <div className="w-full md:w-[50%] p-4 lg:p-6 flex flex-col items-center">
        <p className="text-secondary-color uppercase font-semibold mb-4 tracking-wide">
          What Our Customers Say
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-8 text-center">
          Hear from our satisfied users
        </h2>
        <div className="bg-slate-700 p-6 rounded-lg shadow-lg w-full max-w-lg lg:max-w-xl mx-auto">
          <Carousel autoplay dotPosition="bottom" className="text-center bg-white rounded-lg p-4">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex flex-col items-center">
                <Avatar size={64} src={testimonial.photo} />
                <blockquote className="mt-4 text-xl leading-relaxed">
                  "{testimonial.comment}"
                </blockquote>
                <p className="mt-4 text-lg text-primary-color font-semibold">
                  &mdash; {testimonial.name}
                </p>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default Testimonial;

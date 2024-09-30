import { Helmet } from "react-helmet";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 to-gray-100 px-6 py-12">
      <Helmet>
        <title>SPORT ABOUT</title>
      </Helmet>
      <h1 className="text-5xl font-extrabold mb-8 text-center text-blue-600">About Us</h1>
      <p className="max-w-3xl text-xl text-gray-700 mb-6 text-center leading-relaxed">
        At our core, we are passionate about delivering exceptional service. Our dedicated team
        consistently goes above and beyond to meet and exceed customer expectations. With a wealth of
        experience in the industry, we pride ourselves on producing quality outcomes that stand the test of time.
      </p>
      <p className="max-w-3xl text-xl text-gray-700 mb-6 text-center leading-relaxed">
        Our mission is to create meaningful change by promoting innovation and growth. We value collaboration,
        integrity, and respect in every relationship we build. Join us on our journey to make a positive impact.
      </p>
      <div className="mt-10">
        <a
          href="#contact"
          className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-transform transform hover:scale-105 duration-300"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default About;

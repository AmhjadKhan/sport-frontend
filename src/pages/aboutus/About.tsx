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

      {/* Picture Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        <img
          className="h-64 w-full object-cover rounded-md shadow-lg"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTME020zG9AESl4W8wOLCQ9rCySt-AO_TgYNA&s"
          alt="Teamwork"
        />
        <img
          className="h-64 w-full object-cover rounded-md shadow-lg"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdphR4w92hSIhOhbExVopGiPRAmbXjd8LS0w&s"
          alt="Success"
        />
        <img
          className="h-64 w-full object-cover rounded-md shadow-lg"
          src="https://lirp.cdn-website.com/029b8f60/dms3rep/multi/opt/Screenshot+2024-09-27+230045-640w.png"
          alt="Growth"
        />
        <img
          className="h-64 w-full object-cover rounded-md shadow-lg"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo_G9w53T4pkYrLyP6j08eOf6gDc8vfX_UJg&s"
          alt="Innovation"
        />
      </div>

      <div className="mt-10">
        <a
          href="/contact-us"
          className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-transform transform hover:scale-105 duration-300"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default About;

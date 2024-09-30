import { Helmet } from "react-helmet";

const Contactus = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen px-4 bg-gradient-to-r from-blue-100 to-indigo-200">
      <Helmet>
        <title>SPORT CONTACT</title>
      </Helmet>
      
      <div className="absolute inset-0 bg-[url('https://source.unsplash.com/1600x900/?nature,water')] opacity-10"></div>

      <h1 className="text-4xl font-extrabold mb-6 text-center text-indigo-700">
        Get In Touch
      </h1>

      <p className="mb-8 text-center text-gray-600 max-w-2xl">
        We're here to help and answer any questions you might have. Fill out the form below and we'll get back to you as soon as possible.
      </p>

      <form className="w-full max-w-lg bg-white rounded-lg shadow-md p-6">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-500"
            id="name"
            type="text"
            placeholder="Your Name"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-500"
            id="email"
            type="email"
            placeholder="Your Email"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-500"
            id="message"
            placeholder="Your Message"
            rows="4"
          />
        </div>

        <div className="flex items-center justify-center">
          <button
            className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold py-2 px-6 rounded-full shadow-lg transition-transform transform hover:scale-105 duration-300 focus:outline-none"
            type="submit"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contactus;

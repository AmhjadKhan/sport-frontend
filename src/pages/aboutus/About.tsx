const About = () => {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-gray-100">
        <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">About Us</h1>
        <p className="max-w-2xl text-lg text-gray-600 mb-4 text-center">
          We are dedicated to providing the best service possible. Our team is committed to
          excellence and strives to exceed customer expectations. With years of experience in
          the industry, we understand what it takes to deliver quality results.
        </p>
        <p className="max-w-2xl text-lg text-gray-600 text-center">
          Our mission is to create a positive impact in the community while fostering
          innovation and growth. We believe in collaboration, integrity, and respect for
          everyone we work with.
        </p>
        <div className="mt-8">
          <a
            href="#contact"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    );
  };
  
  export default About;
  
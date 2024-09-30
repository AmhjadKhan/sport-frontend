import {
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const today = new Date().toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 px-6">
        {/* Logo and Menu Links */}
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
          <NavLink to={"/"} className="flex items-center space-x-2">
            <h1 className="text-2xl font-semibold text-lightBlue uppercase">🤾🏻‍♀️SPORTS</h1>
          </NavLink>

          <NavLink
            to={"/about-us"}
            className="uppercase text-gray-400 hover:text-strongCyan transition duration-300"
          >
            About Us
          </NavLink>
          <NavLink
            to={"/contact-us"}
            className="uppercase text-gray-400 hover:text-strongCyan transition duration-300"
          >
            Contact Us
          </NavLink>
          <NavLink
            to={"/facility-listing"}
            className="uppercase text-gray-400 hover:text-strongCyan transition duration-300"
          >
            Facility Listing
          </NavLink>
          <NavLink
            to={"/booking"}
            className="uppercase text-gray-400 hover:text-strongCyan transition duration-300"
          >
            Booking
          </NavLink>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-6">
          <FacebookOutlined className="text-3xl hover:text-lightBlue cursor-pointer transition duration-300" />
          <TwitterOutlined className="text-3xl hover:text-lightBlue cursor-pointer transition duration-300" />
          <InstagramOutlined className="text-3xl hover:text-lightBlue cursor-pointer transition duration-300" />
        </div>
      </div>

      <div className="container mx-auto text-center mt-10 space-y-2">
        <p className="text-gray-400">
          Copyright © {new Date().getFullYear()} All rights reserved by{" "}
          <span className="uppercase text-strongCyan">Md Amjad Hossain</span>.
        </p>
        <p className="text-gray-400">
          Information refreshed on:{" "}
          <span className="text-lightBlue">{today}</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

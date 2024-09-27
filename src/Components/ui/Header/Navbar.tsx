import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  LogoutOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Dropdown, MenuProps} from "antd";
import { logout, selectCurrentUser } from "../../../redux/features/userSlice";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { toast } from "react-hot-toast";
import './Navbar.css'

const Navbar = () => {
  const [menuButton, setMenuButton] = useState(false);
  const { user } = useAppSelector(selectCurrentUser);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  

  const handleLogout = () => {
    dispatch(logout());
    toast.success("Successfully Logout.");
  };

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <div
          className="flex justify-between px-4 py-2 gap-4 rounded-lg transition-all duration-300  hover:text-lightBlue"
          onClick={() => navigate(`${user.role}/dashboard`)}
        >
          <UserOutlined />
          <p>My Profile</p>
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <div
          className="flex justify-between px-4 py-2 gap-4 rounded-lg transition-all duration-300  hover:text-rose-500"
          onClick={handleLogout}
        >
          <LogoutOutlined className=" hover:text-white" />
          <p>Logout</p>
        </div>
      ),
    },
  ];

  return (
    <div className="dark:bg-veryDarkBlue">
      <nav className="relative container mx-auto p-6 ">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-20">
            {/* <!-- Logo --> */}
            <NavLink to={"/"}>
              <div className="flex justify-center items-center gap-2">
                {/* <img className="size-8" src={runningIcon} alt="" /> */}
                <p className="text-xl font-bold uppercase text-third-color dark:text-fourth-color">
                  {" "}
                  sport
                </p>
              </div>
            </NavLink>
            {/* <!-- Left Menu --> */}
            <div className="hidden text-lg uppercase space-x-8 font-bold lg:flex">
              <NavLink
                to="/about-us"
                className={({ isActive }) =>
                  `text-grayishViolet hover:text-strongCyan ${
                    isActive ? "text-strongCyan" : ""
                  }`
                }
              >
                About Us
              </NavLink>
              <NavLink
                to="/contact-us"
                className={({ isActive }) =>
                  `text-grayishViolet hover:text-strongCyan ${
                    isActive ? "text-strongCyan" : ""
                  }`
                }
              >
                Contact us
              </NavLink>
              <NavLink
                to="/facility-listing"
                className={({ isActive }) =>
                  `text-grayishViolet hover:text-strongCyan ${
                    isActive ? "text-strongCyan" : ""
                  }`
                }
              >
                Facility Listing
              </NavLink>
            </div>
          </div>

          {/* <!-- Right Buttons Menu --> */}
          <div className="hidden items-center space-x-4 font-bold text-grayishViolet lg:flex">
            {!user && !user?.role && (
              <div className="flex gap-4">
                <NavLink to={"/login"}>
                  <div className="hover:text-varyDarkViolet custom-muted-button">
                    Login
                  </div>
                </NavLink>
                <NavLink to={"/register"} className="custom-primary-button">
                  Sign Up
                </NavLink>
              </div>
            )}

            {user && user?.role && (
              <div>
                <Dropdown menu={{ items }} placement="bottomRight">
                  <Avatar
                    style={{
                      backgroundColor: "hsl(233, 100%, 69%)",
                      verticalAlign: "middle",
                      cursor: "pointer",
                    }}
                    size={48}
                    gap={4}
                  >
                    {user?.name[0]}
                  </Avatar>
                </Dropdown>
              </div>
            )}
          </div>

          {/* <!--  Hamburger Menu --> */}
          <div className=" lg:hidden flex justify-center  items-center gap-8">
            <div className="">
              {user && user?.role && (
                <div>
                  <Dropdown menu={{ items }} placement="bottomRight">
                    <Avatar
                      style={{
                        backgroundColor: "hsl(233, 100%, 69%)",
                        verticalAlign: "middle",
                        cursor: "pointer",
                      }}
                      size={48}
                      gap={4}
                    >
                      {user?.name[0]}
                    </Avatar>
                  </Dropdown>
                </div>
              )}
            </div>
            <button
              id="menu-btn"
              type="button"
              className={`${
                !menuButton ? "open" : "block"
              } hamburger lg:hidden focus:outline-none`}
              onClick={() => setMenuButton(!menuButton)}
            >
              <span className="hamburger-top"></span>
              <span className="hamburger-middle"></span>
              <span className="hamburger-bottom"></span>
            </button>
          </div>
        </div>

        {/* <!--  Mobile Menu --> */}
        <div
          id="menu"
          className={`absolute p-6 rounded-lg bg-darkViolet left-6 right-6 top-20 z-100 lg:hidden ${
            menuButton && "hidden"
          }`}
        >
          <div className="flex flex-col items-center justify-center w-full space-y-6 font-bold text-white rounded-sm">
            <NavLink to="/about-us" className="w-full text-center uppercase">
              About us
            </NavLink>
            <NavLink to="/contact-us" className="w-full text-center uppercase">
              Contact us
            </NavLink>
            <NavLink
              to="/facility-listing"
              className="w-full text-center uppercase"
            >
              Facility Listing
            </NavLink>
            <NavLink to={"/login"} className="custom-button w-full">
              Login
            </NavLink>
            <NavLink to={"/register"} className="custom-primary-button w-full">
              Sign Up
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
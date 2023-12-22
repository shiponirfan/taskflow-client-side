import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import logo from "../../../assets/logo-white.png";
const Footer = () => {
  return (
    <div className="navbar-menu text-white bg-gradient-to-r from-bg-primary to-blue-600 pt-16 lg:pt-24 pb-10  ">
      <div className="grid gap-10 row-gap-6 mx-auto container px-6 lg:px-8 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <Link to="/">
            <img
              data-aos="fade-right"
              data-aos-delay="100"
              className="w-64"
              src={logo}
              alt="logo"
            />
          </Link>
          <div className="mt-6 lg:max-w-sm">
            <p
              data-aos="fade-right"
              data-aos-delay="200"
              className="text-sm xl:text-base"
            >
              Welcome to TaskFlow, where productivity meets simplicity. We are passionate about helping individuals and teams stay organized, focused, and efficient in their daily tasks. 
            </p>
          </div>
        </div>
        <div className="space-y-2 text-sm xl:text-base">
          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-2xl mb-4 font-bold tracking-wide font-rajdhani"
          >
            Contacts
          </p>
          <div data-aos="fade-up" data-aos-delay="400" className="flex">
            <p className="mr-1">Phone:</p>
            <a
              href="tel:+8801710467100"
              aria-label="Our phone"
              title="Our phone"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              +8801710467100
            </a>
          </div>
          <div data-aos="fade-up" data-aos-delay="400" className="flex">
            <p className="mr-1 ">Email:</p>
            <a
              href="mailto:shiponirfan.dev@gmail.com"
              aria-label="Our email"
              title="Our email"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              shiponirfan.dev@gmail.com
            </a>
          </div>
          <div data-aos="fade-up" data-aos-delay="500" className="flex">
            <p className="mr-1 ">Address:</p>
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Our address"
              title="Our address"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Rangpur, Bangladesh
            </a>
          </div>
        </div>
        <div>
          <span
            data-aos="fade-up"
            data-aos-delay="600"
            className="text-2xl mb-4 font-bold tracking-wide font-rajdhani"
          >
            Social
          </span>
          <div
            data-aos="fade-up"
            data-aos-delay="700"
            className="flex items-center  text-2xl mt-4 space-x-3"
          >
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/ShiponIrfan/"
            >
              <FaFacebook />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/ShiponIrfan"
            >
              <FaTwitter />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/shiponirfan/"
            >
              <FaInstagram />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/shiponirfan/"
            >
              <FaLinkedin />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.youtube.com/@shiponirfan"
            >
              <FaYoutube />
            </a>
          </div>
          <p data-aos="fade-up" data-aos-delay="800" className="mt-4 text-sm ">
          TaskFlow is more than just a task management tool, it&apos;s a collaborative platform designed to streamline your workflow.
          </p>
        </div>
      </div>
      <div className="flex flex-col-reverse items-center  mx-auto container px-6 lg:px-8 justify-between pt-10  border-t lg:flex-row">
        <p className="text-sm ">
          © Copyright 2023 TaskFlow. All rights reserved.
        </p>
        <ul className="flex gap-2 md:gap-0 mb-3  lg:mb-0  sm:space-x-5 ">
          <li>
            <span className="text-sm  transition-colors duration-300 hover:text-deep-purple-accent-400">
              F.A.Q
            </span>
          </li>
          <li>
            <span className="text-sm  transition-colors duration-300 hover:text-deep-purple-accent-400">
              Privacy Policy
            </span>
          </li>
          <li>
            <span className="text-sm  transition-colors duration-300 hover:text-deep-purple-accent-400">
              Terms &amp; Conditions
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;

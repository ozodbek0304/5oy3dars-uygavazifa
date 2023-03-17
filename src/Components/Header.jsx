import React from 'react'
import { Link } from 'react-router-dom'
import Foother from '../Components/Foother';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const { pathname } = useLocation();
  return (
    <header className="">
      <div className="d-flex py-4 text-light justify-content-between container align-items-center">
        <Link
          className="text-reset text-decoration-none d-flex gap-3"
          to="malito:abdisamatovozodbek003@gmail.com"
        >
          <i className="fa-solid fa-envelope"></i>
          Info@youremail.com
        </Link>
        <Link
          className="text-reset text-decoration-none d-flex gap-3"
          to="tel:(480) 555-0103"
        >
          <i className="fa-solid fa-phone"></i>
          (480) 555-0103
        </Link>
        <div className="d-flex gap-4">
          <Link
            className="text-reset text-decoration-none"
            to="https://facebook.com"
          >
            <i className="fa-brands fa-facebook "></i>
          </Link>
          <Link
            className="text-reset text-decoration-none"
            to="https://instagram.com"
          >
            <i className="fa-brands fa-instagram"></i>
          </Link>
          <Link
            className="text-reset text-decoration-none"
            to="https://twitter.com"
          >
            <i className="fa-brands fa-twitter"></i>
          </Link>
          <Link
            className="text-reset text-decoration-none"
            to="https://youtube.com"
          >
            <i className="fa-brands fa-youtube"></i>
          </Link>
        </div>
      </div>
      <nav className="container  gap-5 rounded">
        <ul className="justify-content-around align-items-center d-flex gap-3 list-unstyled">
          <li>
            <Link
              className={`text-${
                pathname === "/" ? "primary" : "reset"
              } text-decoration-none`}
              to="/"
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              className={`text-${
                pathname === "/about" ? "primary" : "reset"
              } text-decoration-none`}
              to="/about"
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              className={`text-${
                pathname === "/features" ? "primary" : "reset"
              } text-decoration-none`}
              to="/features"
            >
              FEATURES
            </Link>
          </li>
          <img src="/Logo.png" className="logo" alt="" />
          <li>
            <Link
              className={`text-${
                pathname === "/screenshot" ? "primary" : "reset"
              } text-decoration-none`}
              to="/screenshot"
            >
              SCREENSHOT
            </Link>
          </li>
          <li>
            <Link
              className={`text-${
                pathname === "/blog" ? "primary" : "reset"
              } text-decoration-none`}
              to="/blog"
            >
              BLOG
            </Link>
          </li>
          <li>
            <Link
              className={`text-${
                pathname === "/download" ? "primary" : "reset"
              } text-decoration-none`}
              to="/download"
            >
              <div className="btn">DOWNLOAD</div>
            </Link>
          </li>
          <li>
            <Link
              className={`text-${
                pathname === "/download" ? "primary" : "reset"
              } text-decoration-none`}
              to="/products"
            >
              PRODUCTS
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
  <Foother/>
}

export default Header

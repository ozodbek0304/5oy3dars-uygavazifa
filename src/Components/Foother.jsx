import React from 'react'
import { Link } from 'react-router-dom';


const Foother = () => {
  return (
    <footer className="foother">
      <div className="container">
        <div className="d-flex foot align-items-center justify-content-between">
          <div className="logo">
            <h3>LOGO</h3>
            <p className="dolor">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
              nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
            </p>
            <div className="d-flex gap-4 insta">
              <Link
                className="text-reset text-decoration-none"
                to="https://facebook.com"
              >
                <i className="fa-brands fa-facebook  "></i>
              </Link>
              <span className="chiziq"></span>
              <Link
                className="text-reset text-decoration-none"
                to="https://instagram.com"
              >
                <i className="fa-brands fa-instagram"></i>
              </Link>
              <span className="chiziq"></span>
              <Link
                className="text-reset text-decoration-none"
                to="https://twitter.com"
              >
                <i className="fa-brands fa-twitter"></i>
              </Link>
              <span className="chiziq"></span>

              <Link
                className="text-reset text-decoration-none"
                to="https://youtube.com"
              >
                <i className="fa-brands fa-youtube"></i>
              </Link>
            </div>
          </div>
          <div className="column">
            <h3>QUICK LINK</h3>
            <Link className="text-reset text-decoration-none" to="/about">
              About
            </Link>
            <Link className="text-reset text-decoration-none" to="/features">
              Features
            </Link>
            <Link className="text-reset text-decoration-none" to="/screenshot">
              Screenshot
            </Link>
            <Link className="text-reset text-decoration-none" to="/blog">
              Blog
            </Link>
          </div>
          <div className="news">
            <h3>NEWS LETTER</h3>
            <p>Subscribe our newsletter to get our latest update & news</p>
            <input
              type="email"
              className="form-control"
              placeholder="Your email address"
            />
          </div>
        </div>
        <div className="span"></div>
        <div className="d-flex gap-3 all">
          <i className="fa-regular fa-copyright"></i>
        <p>Copyright 2021 .Ojjomedia. All Right Reserved.</p>
        </div>
      </div>
    </footer>
  );
  
}

export default Foother

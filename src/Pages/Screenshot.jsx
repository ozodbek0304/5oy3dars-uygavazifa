import React from 'react'
import { Link } from 'react-router-dom';
function Screenshot() {
  return (
    <div className="screenshot">
      <div className="container">
        <div className="orqa">
          <h2 className="dolor">HOW TO USE THE APP PERFECTIL</h2>
          <p className="lorem">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
            nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
            Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.
            Ullamcorper risus tempor, ac nunc libero urna, feugiat.
          </p>
        </div>
        <img src="/Video.png" alt="" className="vedio" />
        <div>
          <h2 className="our">OUR REATIVE TEAM</h2>
          <p className="ipsum">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
            nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
            Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.
            Ullamcorper risus tempor, ac nunc libero urna, feugiat.
          </p>
          <div className="d-flex gap-4 justify-content-around">
            <div className="qutti rounded">
              <img src="/Group 1514.png" alt="" className="gruop" />
              <img src="/Profile.png" alt="" />
              <h2>CARLA PRESS</h2>
              <h4>APP DEVELOPER</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
                nunc ante velit vitae. Est tellus vitae.
              </p>
              <div className="d-flex gap-4 insta ">
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
            <div className="qutti rounded">
              <img src="/Group 1514.png" alt="" className="gruop" />
              <img src="/Profile Image.png" alt="" />
              <h2>CRAIG GOUSE</h2>
              <h4>UI/UX DESIGNER</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
                nunc ante velit vitae. Est tellus vitae.
              </p>
              <div className="d-flex gap-4 insta ">
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
            <div className="qutti rounded">
              <img src="/Group 1514.png" alt="" className="gruop" />
              <img src="/Profile Image (1).png" alt="" />
              <h2> JOCELYN SEPTIMUS</h2>
              <h4>WEBSITE DEVELOPER</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
                nunc ante velit vitae. Est tellus vitae.
              </p>
              <div className="d-flex gap-4 insta ">
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Screenshot

import React from 'react'

function About() {
  return (
    <section className="about ">
      <div className="container">
        <h2 className="text-center">About Our App</h2>
        <p className="ipsum">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc
          ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus
          amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus
          tempor, ac nunc libero urna, feugiat.
        </p>
        <div className="d-flex justify-content-between align-items-center py-5">
          <div className="d-flex flex-column">
            <img src="/android-smartphone-free-mockup 1.png"  className='android' alt="" />
            <img src="/Ellipse 4.png" alt="" className='ellips' />
          </div>
          <div className='column'>
            <div className="outapp shadow rounded">
              <div className="d-flex gap-3 circle">
                <img src="/checkbox-circle-fill.png" alt="" className="chesk" />
                <h5>CREATIVE DESIGN</h5>
              </div>
              <p className="dolor">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
                nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
                Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.
              </p>
            </div>
            <div className="outapp shadow rounded">
              <div className="d-flex gap-3 circle">
                <img src="/checkbox-circle-fill.png" alt="" className="chesk" />
                <h5>EASY TO USE</h5>
              </div>
              <p className="dolor">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
                nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
                Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.
              </p>
            </div>
            <div className="outapp shadow rounded">
              <div className="d-flex gap-3 circle">
                <img src="/checkbox-circle-fill.png" alt="" className="chesk" />
                <h5>BEST  USER EXPERINCE</h5>
              </div>
              <p className="dolor">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
                nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
                Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About

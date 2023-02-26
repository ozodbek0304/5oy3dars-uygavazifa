import React from 'react'

function Features() {
  return (
    <section className="features">
      <div className="container ">
        <h2>APP FEATURES</h2>
        <p className="ipsum">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc
          ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus
          amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus
          tempor, ac nunc libero urna, feugiat.
        </p>

        <i className="fa-solid fa-envelope fa-3x envelope" x></i>
        <h3 className="h3">FULL FREE CHAT</h3>
        <p className="dolor">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <div className="d-flex justify-content-center align-items-center">
          <div className="column">
            <div className="boxs">
              <img src="/browser.png" alt="" className="burchak" />
              <h3>UNLIMITER FEATURES</h3>
              <p>Lorem ipsum dolor sit amet, consectetur </p>
              <p className="chap">adipiscing elit.</p>
            </div>
            <div className="boxs">
              <img src="/vector.png" alt="" className="burchak" />
              <h3>AWSOME UI DESIGN</h3>
              <p>Lorem ipsum dolor sit amet, consectetur </p>
              <p className="chap">adipiscing elit.</p>
            </div>
          </div>
          <img src="/App.png" alt="" className="appn" />
          <div className="column">
            <div className="boxs">
              <img src="/cell-phone.png" alt="" />
              <h3>IOS & ANDROIND VERSION</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            </div>
            <div className="boxs">
              <img src="/eye-scanner 1.png" alt="" />
              <h3>RETINA READY GREAPHICS</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            </div>
          </div>
        </div>
       
          <img src="/male-telemarketer.png" alt=""className='male' />
          <h4 className='text-center'>24/7 SUPPORT BY REAL PEOPLE</h4>
          <p className='lorem'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </section>
  );
}

export default Features

import React from 'react'

function Blog() {
  return (
    <div className="blog">
      <div className="container">
        <div className="orqafon">
          <h2>OUR HAPPY CUSTOMERS</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
            nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
            Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.
            Ullamcorper risus tempor, ac nunc libero urna, feugiat.
          </p>
          <img src="/Review.png" alt="" className="rever" />
        </div>
        <div className="lorem ">
          <h2>OUR RECENT BLOG</h2>
          <p className="amet">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
            nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
            Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.
            Ullamcorper risus tempor, ac nunc libero urna, feugiat.
          </p>
          <div className="d-flex justify-content-around">
            <div className="more rounded shadow">
              <img src="/Image.png" alt="" className="w-100 " />
              <h4> THE SNAP PIXEL: HOW IT WORKS AND HOW TO UNSTALL</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
                nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
              </p>
              <button className="btn d-block">READ MORE</button>
            </div>
            <div className="more rounded shadow">
              <img src="/Image (1).png" alt="" className="w-100 " />
              <h4>GLOBAL PARTNER SOLUTIONS: A PARTNERSHIP OF INNOVATION</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
                nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
              </p>
              <button className="btn  d-block">READ MORE</button>
            </div>
            <div className="more rounded shadow">
              <img src="/Image (2).png" alt="" className="w-100 " />
              <h4> 2021:AN OPPORTUNITY FOR SNAPCHATTERS TO START FRESH</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
                nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
              </p>
              <button className="btn d-block">READ MORE</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog

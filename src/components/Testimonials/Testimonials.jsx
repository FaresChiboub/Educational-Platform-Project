/* eslint-disable react/no-unescaped-entities */
import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";
import user_5 from "../../assets/user-5.png";
import user_7 from "../../assets/user-7.png";
import { useRef } from "react";

function Testimonials() {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 33.33;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 33.33;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="Testimonials">
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
      <img
        src={back_icon}
        alt=""
        className="back-btn"
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
              </div>
              <div className="testimonial-info">
                <h3>Jane Clair</h3>
                <span>UCF, USA</span>
                <p>
                  Choosing to pursue my degree at UCFwas one of the best
                  decisions I've ever made. The supportive community,
                  state-of-the-art facilities.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
              </div>
              <div className="testimonial-info">
                <h3>Mary Chen </h3>
                <span>UCF, USA</span>
                <p>
                  UCF innovative approach to problem-solving and collaborative
                  work environment have significantly contributed to my
                  professional growth
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
              </div>
              <div className="testimonial-info">
                <h3>Micheal Brown</h3>
                <span>UCF, USA</span>
                <p>
                  Pursuing my degree at UCF University has been an enlightening
                  experience. The university's dedication to academic
                  excellence.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
              </div>
              <div className="testimonial-info">
                <h3>Anita Surya</h3>
                <span>UCF, USA</span>
                <p>
                  As a graduate of UCF University, I can confidently say that the
                  university's holistic approach to education, coupled with its
                  focus on practical learning.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_5} alt="" />
              </div>
              <div className="testimonial-info">
                <h3>John Doe</h3>
                <span>UCF, USA</span>
                <p>
                  UCF provided me with the perfect platform to explore my
                  interests and develop my skills. The faculty's expertise and
                  the resources available.
                </p>
              </div>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_7} alt="" />
              </div>
              <div className="testimonial-info">
                <h3>Mike Santos</h3>
                <span>UCF, USA</span>
                <p>
                  UCF commitment to innovation and excellence sets it apart. I'm
                  proud to be associated with such a prestigious institution.
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Testimonials;

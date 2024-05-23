/* eslint-disable react/no-unescaped-entities */
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

function About({ setPlayState }) {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img
          src={play_icon}
          alt=""
          className="play-icon"
          onClick={() => {
            setPlayState(true);
          }}
        />
      </div>
      <div className="about-right">
        <h3>About University</h3>
        <h2>Nurturing tomorrow's Leaders Today</h2>
        <p>
          Embark on a transformative educational journey with our university:
          Embark on a transformative educational journey with our university,
          where we believe in nurturing not just academic excellence but also
          holistic development. Our institution is dedicated to providing
          students with a supportive environment and cutting-edge resources to
          explore their passions, expand their horizons, and unlock their full
          potential. Whether you're pursuing undergraduate studies, graduate
          research, or professional development, we offer a diverse range of
          programs and opportunities tailored to meet your unique aspirations
          and goals.
        </p>
        <p>
          With a focus on innovation, hands-on learning: With a focus on
          innovation, hands-on learning, and real-world application, our
          university is at the forefront of educational excellence. Our
          curriculum is designed to foster creativity, critical thinking, and
          problem-solving skills, empowering students to tackle complex
          challenges and drive positive change in their communities and beyond.
          Through experiential learning opportunities, internships.
        </p>
        <p>
          Prepare for a future filled with endless possibilities: Prepare for a
          future filled with endless possibilities at our university, where we
          are committed to shaping tomorrow's leaders and innovators. Our
          world-class faculty, state-of-the-art facilities, and vibrant campus
          life create an enriching environment where students can explore their
          interests, collaborate with peers
          potential.
        </p>
      </div>
    </div>
  );
}

export default About;

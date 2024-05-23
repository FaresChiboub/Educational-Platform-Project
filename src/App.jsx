import About from "./components/About/About";
import Campus from "./components/Campus/Campus";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Program from "./components/Programs/Program";
import Title from "./components/Title/Title";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import VideoPlayerComponent from "./components/videoPlayer/VideoPlayerComponent";
import { useState } from "react";
function App() {
  const [playState,setPlayState]=useState(false)
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container ">
        <Title subTitle="Our Programs" title="What we Offer" />
        <Program />
        <About setPlayState={setPlayState}/>
        <Title subTitle="Gallery" title="Campus Photos" />
        <Campus />
        <Title subTitle="Testimonials" title="What students says" />
        <Testimonials />
        <Title subTitle="Contact Us" title="Get in Touch" />
        <Contact />
        <Footer/>
      </div>
      <VideoPlayerComponent playState={playState} setPlayState={setPlayState}/>
    </div>
  );
}

export default App;

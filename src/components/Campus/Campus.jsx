import React, { useState } from "react";
import "./Campus.css";
import gallery_1 from "../../assets/gallery-1.png";
import gallery_2 from "../../assets/gallery-2.png";
import gallery_3 from "../../assets/gallery-3.png";
import gallery_4 from "../../assets/gallery-4.png";
import gallery_5 from "../../assets/gallery-5.png";
import gallery_6 from "../../assets/gallery-6.png";
import gallery_7 from "../../assets/gallery-7.png";
import gallery_8 from "../../assets/gallery-8.png";
import gallery_9 from "../../assets/gallery-9.png";
import gallery_10 from "../../assets/gallery-10.png";
import gallery_11 from "../../assets/gallery-11.png";
import gallery_12 from "../../assets/gallery-12.png";
import white_arrow from "../../assets/white-arrow.png";

function Campus() {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="campus">
      <div className="gallery">
        <img src={gallery_1} alt="Gallery 1" />
        <img src={gallery_2} alt="Gallery 2" />
        <img src={gallery_3} alt="Gallery 3" />
        <img src={gallery_4} alt="Gallery 4" />
      </div>
      <button className="btn dark-btn" onClick={handleShowMore}id="mrgBtn">
        See more here <img src={white_arrow} alt="Arrow" />
      </button>
      {showMore && (
        <>
          <div className="gallery">
            <img src={gallery_5} alt="Gallery 5" />
            <img src={gallery_6} alt="Gallery 6" />
            <img src={gallery_7} alt="Gallery 7" />
            <img src={gallery_8} alt="Gallery 8" />
          </div>
          <div className="gallery">
            <img src={gallery_9} alt="Gallery 9" />
            <img src={gallery_10} alt="Gallery 10" />
            <img src={gallery_11} alt="Gallery 11" />
            <img src={gallery_12} alt="Gallery 12" />
          </div>
        </>
      )}
    </div>
  );
}

export default Campus;

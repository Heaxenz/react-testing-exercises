import { useState } from "react";
import "./Carousel.css";
import Card from "./Card";
import photos from "./photos";


/** Carousel: displays images and arrows to navigate through them
 * 
 * Props:
 * - photos: array of {src, caption} objects
 * - title: string describing the collection of images
 * 
 * State:
 * - currCardIdx: integer for current card index
 * 
 * App --> Carousel --> Card
 */
 function Carousel({ photos, title }) {
  const [currCardIdx, setCurrCardIdx] = useState(0);
  const [backVisible, setbackVisible] = useState(true);
  const [forwardVisible, setforwardVisible] = useState(true);
  

  const currCard = photos[currCardIdx];
  const total = photos.length;



  //Increments currCardIdx state by 1
  //help hiding if on the last or first photos
  function goForward() {
    if(currCardIdx === total -2){
      setCurrCardIdx(currCardIdx + 1)
      setforwardVisible(false)
      

    } else setCurrCardIdx(currCardIdx + 1);
    setbackVisible(false);
     
  }

  function goBackward() {
    if(currCardIdx === 1){
    setCurrCardIdx(0);
    setbackVisible(true);
    
    } else {
      setCurrCardIdx(currCardIdx - 1)
      setforwardVisible(true);
    }
  }

  return (
    <div className="Carousel">
      <h1>{title}</h1>
      <div className="Carousel-main">
        { !backVisible && <i
          className="bi bi-arrow-left-circle"
          onClick={goBackward}
        />}
        <Card
          caption={currCard.caption}
          src={currCard.src}
          currNum={currCardIdx + 1}
          totalNum={total}
        />
        { forwardVisible &&
        <i
          className="bi bi-arrow-right-circle"
          onClick={goForward}
        />}
      </div>
    </div>
  );
}

export default Carousel;

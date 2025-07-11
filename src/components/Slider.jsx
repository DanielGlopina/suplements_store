import { useState } from "react";
import sliderElements from "../data/sliderElements";
import CircularProgressBar from "./CircularProgressBar";

/**
 * Slider component.
 * Shows a product slider with macros and description modal.
 *
 * @param {number} slideIndex - Current slide index.
 * @param {Function} setSlideIndex - Function to set slide index.
 */
function Slider({ slideIndex, setSlideIndex }) {
  const slide = sliderElements[slideIndex];
  const [isDescrHidden, setDescrHidden] = useState(true);

  // Go to previous slide
  const handlePrev = () => {
    setSlideIndex(
      slideIndex === 0 ? sliderElements.length - 1 : slideIndex - 1
    );
    setDescrHidden(true);
  };

  // Go to next slide
  const handleNext = () => {
    setSlideIndex(
      slideIndex === sliderElements.length - 1 ? 0 : slideIndex + 1
    );
    setDescrHidden(true);
  };

  // Open description modal
  const openDescr = () => setDescrHidden(false);

  // Close description modal
  const closeDescr = () => setDescrHidden(true);

  return (
    <section className={`slider ${slide.color}`}>
      <button type="button" onClick={handlePrev}>
        <img src="https://symbl.cc/i/webp/b3/3579924016d408fe7632fddc7a8145.webp" alt="arrow-back" />
      </button>
      <div className="container">
        <div className="slide">
          <div className="more-info">
            <button onClick={openDescr}>
              <img src="icons/more-info.svg" alt="more info" />
            </button>
            <h3>More Info</h3>
            <div
              className={`description-modal ${isDescrHidden ? "hidden" : ""}`}
            >
              <button
                type="button"
                className="close-modal-btn"
                onClick={closeDescr}
                aria-label="Close"
              >
                <img src="icons/close-btn.svg" alt="close button" />
              </button>
              <h2>{slide.name}</h2>
              <p>{slide.description}</p>
            </div>
          </div>
          <div className="product-title">
            <h2>{slide.name}</h2>
            <p>{slide.description}</p>
          </div>
          <div className="img-wrapper">
            <img src={slide.img} alt={slide.name} />
          </div>
          <div className="macros-ammount">
            <h2>{slideIndex === 0 ? "Of daily allowance:" : "Per serving:"}</h2>
            {slide.macrosArr.map(([paramName, param], i) => (
              <CircularProgressBar
                paramName={paramName}
                param={param}
                key={paramName + i}
              />
            ))}
          </div>
        </div>
      </div>
      <button type="button" onClick={handleNext}>
        <img src="https://symbl.cc/i/webp/1e/e97b5050a25455d87c59005fc706e2.webp" alt="arrow forward" />
      </button>
    </section>
  );
}

export default Slider;

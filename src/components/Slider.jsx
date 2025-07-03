import "../index.scss";
import sliderElements from "../data/sliderElements";
import CircularProgressBar from "./CircularProgressBar";

function Slider({ slideIndex, setSlideIndex }) {
  const slide = sliderElements[slideIndex];

  return (
    <section className={`slider ${slide.color}`}>
      <button
        type="button"
        onClick={() =>
          slideIndex === 0
            ? setSlideIndex(2)
            : setSlideIndex((prev) => prev - 1)
        }
      >
        <img src="./public/icons/arrow-back.svg" alt="arrow-back" />
      </button>
      <div className="container">
        <div className="slide">
          <div className="product-title">
            <h2>{slide.name}</h2>
            <p>{slide.description}</p>
          </div>

          <div className="img-wrapper">
            <img src={slide.img} alt={slide.name} />
          </div>

          <div className="macros-ammount">
            <h2>{slideIndex === 0 ? "Of daily allowance:" : "Per serving:"}</h2>
            {slide.macrosArr.map((arr) => (
              <CircularProgressBar paramName={arr[0]} param={arr[1]} />
            ))}
          </div>
        </div>
      </div>
      <button
        type="button"
        onClick={() =>
          slideIndex === 2
            ? setSlideIndex(0)
            : setSlideIndex((prev) => prev + 1)
        }
      >
        <img src="./public/icons/arrow-forward.svg" alt="arrow-forward" />
      </button>
    </section>
  );
}

export default Slider;

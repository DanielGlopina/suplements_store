import { useState } from "react";
import "./index.scss";

const sliderElements = [
  {
    name: "Psychotic Hellboy (Insane Labz)",
    img: "./public/img/psychotic-pretrain.png",
    color: "dark-red",
    description:
      "A high-stimulant pre-workout designed for intense energy, focus, and pump. Ideal for advanced athletes seeking maximum performance.",
    macrosArr: [
      ["Caffeine", "90"],
      ["Beta-Ala", "40"],
      ["Creatine", "30"],
    ],
  },
  {
    name: "Elite 100% Whey (Dymatize)",
    img: "./public/img/elite-protein-powder.png",
    color: "light-blue",
    description:
      "Premium quality whey protein with fast absorption and excellent amino acid profile.",
    macrosArr: [
      ["Protein", "80"],
      ["Carbs", "10"],
      ["Fats", "6"],
    ],
  },
  {
    name: "Rule 1 Mass Gainer",
    img: "./public/img/r1-gainer.png",
    color: "dark-green",
    description:
      "Rich in carbohydrates and protein, ideal for bulking phases and post-workout nutrition.",
    macrosArr: [
      ["Protein", "13"],
      ["Carbs", "82"],
      ["Fats", "5"],
    ],
  },
];

function App() {
  const [slideIndex, setSlideIndex] = useState(0);

  return (
    <main>
      <Header />
      <Search />
      <Slider slideIndex={slideIndex} setSlideIndex={setSlideIndex} />
    </main>
  );
}

function Search() {
  return (
    <section className="search">
      <div className="container">
        <div className="search-content">
          <div className="search-input">
            <input type="text" placeholder="Search products" />
            <button type="button">
              <img src="./public/icons/search-icon.svg" alt="search icon" />
            </button>
          </div>

          <button>
            <img
              src="./public/icons/shopping-cart.svg"
              alt="shopping cart icon"
            />
          </button>
        </div>
      </div>
    </section>
  );
}

function Header() {
  return (
    <header>
      <div className="container">
        <div className="header-content">
          <div className="title-main">
            <h1>Power Up</h1>
            <span>Nutrition</span>
          </div>
          <div className="contacts">
            <a href="tel:+38 096 380 0000">+38 096 380 0010</a>
            <a href="https://www.instagram.com/accounts/emailsignup/">
              <img
                src="./public/icons/instagram-logo.svg"
                alt="instagram logo"
              />
            </a>
            <a href="https://www.youtube.com/">
              <img src="./public/icons/youtube-logo.svg" alt="youtube logo" />
            </a>
            <a href="https://www.tiktok.com/signup">
              <img src="./public/icons/tiktok-logo.svg" alt="tiktok logo" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

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

function CircularProgressBar({ paramName, param }) {
  return (
    <div className={`progress-bar progress-${param}`}>
      <div className="circular">
        <div className="inner"></div>
        <div className="outer"></div>
        <div className="numb">
          <div className="numb-title">{paramName}</div>
          <div>{param}%</div>
        </div>
        <div className="circle">
          <div className="zero-dot">
            <span></span>
          </div>
          <div className="dot">
            <span></span>
          </div>
          <div className="bar left">
            <div className="left progress"></div>
          </div>
          <div className="bar right">
            <div className="right progress"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

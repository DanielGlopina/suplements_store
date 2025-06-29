import { useState } from "react";
import "./index.scss";

//Slider Elements Array import
import sliderElements from "./sliderElements";
//Categories Elements Array import
import categoriesElements from "./categoriesElements";
//Products Card Data Array import
import productCardsData from "./productsCardData";

function App() {
  const [slideIndex, setSlideIndex] = useState(0);

  return (
    <main>
      <Header />
      <Search />
      <Slider slideIndex={slideIndex} setSlideIndex={setSlideIndex} />
      <Categories />
      <Products />
    </main>
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

function Categories() {
  return (
    <section className="categories">
      <h2>Categories</h2>
      <div className="container">
        <div className="categories-box">
          {categoriesElements.map((element) => (
            <div className="category-card">
              <img src={element.img} alt={element.name} />
              <h3>{element.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Products() {
  return (
    <section className="products-section">
      <h2>Products</h2>
      <div className="container">
        <div className="products-content">
          {productCardsData
            .filter((productData) => productData.recommended)
            .map((productData) => (
              <div className="product-card">
                <img src={productData.img} alt={productData.name} />
                <div>
                  <div className="product-description">
                    <h3>{productData.name}</h3>
                    <h4>{productData.brand}</h4>
                    <h3 className="price">{productData.price}₴</h3>
                  </div>
                  <button type="button">
                    <img
                      src={"public/icons/shopping-cart.svg"}
                      alt="Add to shopping cart"
                    />
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default App;

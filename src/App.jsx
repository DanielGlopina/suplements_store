import { useState, useEffect } from "react";
import "./index.scss";

//Slider Elements Array import
import sliderElements from "./sliderElements";
//Categories Elements Array import
import categoriesElements from "./categoriesElements";
//Products Card Data Array import
import productCardsData from "./productsCardData";

const imgError = (e) => {
  e.target.onerror = null;
  e.target.src = "public/img/alternative-image.jpg";
};

function App() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [categoryName, setCategoryName] = useState("Universal");
  const [displayedProducts, setProducts] = useState(
    productCardsData.filter((productCard) =>
      productCard.category.includes(categoryName)
    )
  );
  const [dispCounter, setDispCounter] = useState(8);
  return (
    <main>
      <Header />
      <Search />
      <Slider slideIndex={slideIndex} setSlideIndex={setSlideIndex} />
      <OurAdvantages />
      <Categories
        setCategoryName={setCategoryName}
        setProducts={setProducts}
        setDispCounter={setDispCounter}
      />
      <Products
        displayedProducts={displayedProducts}
        dispCounter={dispCounter}
        setDispCounter={setDispCounter}
      />
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

function OurAdvantages() {
  return (
    <section className="our-advantages">
      <div className="container">
        <div className="advantages-content">
          <div className="advantage-card">
            <img src={"/public/icons/clock.svg"} alt="clock icon" />
            <div className="advantage-description">
              <h3>Quick Delivery</h3>
              <h4>Your order will arrive within 3 days</h4>
            </div>
          </div>
          <div className="advantage-card">
            <img src={"/public/icons/package.svg"} alt="package icon" />
            <div className="advantage-description">
              <h3>Free Delivery</h3>
              <h4>For orders over 2100₴</h4>
            </div>
          </div>
          <div className="advantage-card">
            <img src={"/public/icons/notepad.svg"} alt="notepad icon" />
            <div className="advantage-description">
              <h3>Wide Selection</h3>
              <h4>Of hight-quality products</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Categories({ setCategoryName, setProducts, setDispCounter }) {
  const setProductsInArr = (elementName) => {
    setDispCounter(8);
    setCategoryName(elementName);
    setProducts(
      productCardsData.filter((productCard) =>
        productCard.category.includes(elementName)
      )
    );
  };

  return (
    <section className="categories">
      <h2>Categories</h2>
      <div className="container">
        <div className="categories-box">
          {categoriesElements.map((element) => (
            <div
              className="category-card"
              onClick={() => {
                setProductsInArr(element.name);
              }}
            >
              <img src={element.img} alt={element.name} />
              <h3>{element.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Products({ displayedProducts, dispCounter, setDispCounter }) {
  return (
    <section className="products-section">
      <h2>Products</h2>
      <div className="container">
        <div className="products-content">
          {displayedProducts
            .filter(
              (productData) =>
                displayedProducts.indexOf(productData) < dispCounter
            )
            .map((productData) => (
              <div className="product-card">
                <img
                  src={productData.img}
                  onError={imgError}
                  alt={productData.name}
                />
                <div>
                  <div className="product-description">
                    <h3>{productData.name}</h3>
                    <h4>{productData.brand}</h4>
                    <h4 className="weight">{productData.weight}</h4>
                    <div className="flavours">
                      {productData.flavour.map((flavour) => (
                        <img
                          src={`public/img/${flavour}-flavour.jpg`}
                          alt={`${flavour} icon`}
                          title={flavour}
                        />
                      ))}
                    </div>
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
        {displayedProducts.length <= dispCounter ? (
          ""
        ) : (
          <button
            type="button"
            className="show-more"
            onClick={() => setDispCounter((prev) => prev + 8)}
          >
            Show More
          </button>
        )}
      </div>
    </section>
  );
}

export default App;

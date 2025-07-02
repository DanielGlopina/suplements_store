import React, { useRef } from "react";
import "../index.scss";

function Search({
  productCardsData,
  setProducts,
  searchedKeyword,
  setKeyword,
  isHiddenSearchModal,
  setHidden,
}) {
  const popupRef = useRef(null);

  const searchProduct = (keyword = searchedKeyword) => {
    setProducts(
      productCardsData.filter((productCard) =>
        productCard.category.toLowerCase().includes(keyword.toLowerCase())
      )
    );
  };

  const handleKeywordChange = (keyword) => {
    setKeyword(keyword);
    searchProduct(keyword);
    setHidden(true);
  };

  const handleBlur = (e) => {
    if (popupRef.current && !popupRef.current.contains(e.relatedTarget)) {
      setHidden(true);
    }
  };

  return (
    <section className="search">
      <div className="container">
        <div className="search-content">
          <div className="search-input">
            <input
              type="text"
              placeholder="Search products"
              value={searchedKeyword}
              onFocus={() => setHidden(false)}
              onBlur={handleBlur}
              onChange={(e) => setKeyword(e.target.value)}
            />
            <button type="button" onClick={() => searchProduct()}>
              <img src="./public/icons/search-icon.svg" alt="search icon" />
            </button>
          </div>

          <button type="button">
            <img
              src="./public/icons/shopping-cart.svg"
              alt="shopping cart icon"
            />
          </button>
        </div>

        <div
          ref={popupRef}
          className={`popular-searches ${isHiddenSearchModal ? "hidden" : ""}`}
        >
          <ul>
            <li>
              <button
                type="button"
                onClick={() => handleKeywordChange("Protein")}
              >
                Protein
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => handleKeywordChange("Creatine")}
              >
                Creatine
              </button>
            </li>
            <li>
              <button type="button" onClick={() => handleKeywordChange("BCAA")}>
                BCAA
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => handleKeywordChange("Mass Gainer")}
              >
                Mass Gainer
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => handleKeywordChange("Collagen")}
              >
                Collagen
              </button>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Search;

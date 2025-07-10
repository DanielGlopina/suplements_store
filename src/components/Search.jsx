import React, { useRef } from "react";

/**
 * Search component.
 * Allows users to search products by category and select popular searches.
 *
 * @param {Array} productCardsData - Array of all product cards.
 * @param {Function} setProducts - Sets filtered products.
 * @param {string} searchedKeyword - Current search keyword.
 * @param {Function} setKeyword - Sets search keyword.
 * @param {boolean} isHiddenSearchModal - Search modal visibility.
 * @param {Function} setHidden - Sets search modal visibility.
 * @param {boolean} isHiddenShoppingCart - Shopping cart modal visibility.
 * @param {Function} setHiddenShopCart - Sets shopping cart modal visibility.
 * @param {Function} setBlured - Sets blur effect.
 */
function Search({
  productCardsData,
  setProducts,
  searchedKeyword,
  setKeyword,
  isHiddenSearchModal,
  setHidden,
  isHiddenShoppingCart,
  setHiddenShopCart,
  setBlured,
}) {
  const popupRef = useRef(null);

  // Filter products by category keyword
  const searchProduct = (keyword = searchedKeyword) => {
    setProducts(
      productCardsData.filter((productCard) =>
        productCard.category.toLowerCase().includes(keyword.toLowerCase())
      )
    );
  };

  // Handle keyword selection from popular searches
  const handleKeywordChange = (keyword) => {
    setKeyword(keyword);
    searchProduct(keyword);
    setHidden(true);
  };

  // Hide popup if focus leaves the search area
  const handleBlur = (e) => {
    if (popupRef.current && !popupRef.current.contains(e.relatedTarget)) {
      setHidden(true);
    }
  };

  // Open shopping cart modal and blur background
  const handleOpenShopCart = () => {
    setHiddenShopCart(false);
    setBlured(true);
  };

  // Popular search keywords
  const popularKeywords = [
    "Protein",
    "Creatine",
    "BCAA",
    "Mass-Gainer",
    "Collagen",
  ];

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
          <button type="button" onClick={handleOpenShopCart}>
            <img
              src="./public/icons/shopping-cart.svg"
              alt="shopping cart icon"
            />
          </button>
        </div>
        <div
          ref={popupRef}
          className={`popular-searches${
            isHiddenSearchModal ? " hidden" : ""
          }`}
        >
          <ul>
            {popularKeywords.map((keyword) => (
              <li key={keyword}>
                <button
                  type="button"
                  onClick={() => handleKeywordChange(keyword)}
                >
                  {keyword}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Search;

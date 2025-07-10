import SortPanel from "./SortPanel";

// Fallback image handler
const imgError = (e) => {
  e.target.onerror = null;
  e.target.src = "img/alternative-image.jpg";
};

/**
 * Products component.
 * Renders a list of product cards with "show more" pagination.
 *
 * @param {Function} setProducts - Sets filtered products.
 * @param {Array} displayedProducts - Products to display.
 * @param {number} dispCounter - Number of products to show.
 * @param {Function} setDispCounter - Updates display counter.
 * @param {Function} setCartProd - Sets product for cart modal.
 * @param {boolean} isHiddenModalCard - Cart modal visibility.
 * @param {Function} setHiddenCard - Sets cart modal visibility.
 * @param {boolean} isHiddenDescrModal - Description modal visibility.
 * @param {Function} setHiddenDescr - Sets description modal visibility.
 * @param {Function} setBlured - Sets blur effect.
 */
function Products({
  setProducts,
  displayedProducts,
  dispCounter,
  setDispCounter,
  setCartProd,
  isHiddenModalCard,
  setHiddenCard,
  isHiddenDescrModal,
  setHiddenDescr,
  setBlured,
}) {
  // Show more products handler
  const handleShowMore = () => setDispCounter((prev) => prev + 12);

  // Open AddToCart modal
  const handleAddToCart = (product) => {
    setCartProd(product);
    setHiddenCard(false);
    setBlured(true);
  };

  // Open Product Description modal
  const handleProdDescr = (product) => {
    setCartProd(product);
    setHiddenDescr(false);
    setBlured(true);
  };

  return (
    <section className="products-section">
      <h2>Products</h2>
      <SortPanel setProducts={setProducts} displayedProducts={displayedProducts} />
      <h3 className="no-products-title">
        {displayedProducts.length < 1 ? "No products found by such criteria😢..." : ""}
      </h3>
      <div className="container">
        <div className="products-content">
          {displayedProducts.slice(0, dispCounter).map((productData) => (
            <div className="product-card" key={productData.id}>
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
                        src={`img/${flavour}-flavour.jpg`}
                        alt={`${flavour} icon`}
                        title={flavour}
                        key={flavour}
                      />
                    ))}
                  </div>
                  <h3 className="price">{productData.price}₴</h3>
                </div>
                <div className="buttons">
                  <button type="button" onClick={() => handleProdDescr(productData)}>
                    <img src="icons/more-info.svg" alt="More info" />
                  </button>
                  <button type="button" onClick={() => handleAddToCart(productData)}>
                    <img src="icons/shopping-cart.svg" alt="Add to shopping cart" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {displayedProducts.length > dispCounter && (
          <button type="button" className="show-more" onClick={handleShowMore}>
            Show More
          </button>
        )}
      </div>
    </section>
  );
}

export default Products;

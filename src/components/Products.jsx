import "../index.scss";
import SortPanel from "./SortPanel";

const imgError = (e) => {
  e.target.onerror = null;
  e.target.src = "public/img/alternative-image.jpg";
};

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
  return (
    <section className="products-section">
      <h2>Products</h2>
      <SortPanel
        setProducts={setProducts}
        displayedProducts={displayedProducts}
      />
      <h3 className="no-products-title">
        {displayedProducts.length < 1
          ? "No products found by such criteria😢..."
          : ""}
      </h3>
      <div className="container">
        <div className="products-content">
          {displayedProducts
            .filter(
              (productData) =>
                displayedProducts.indexOf(productData) < dispCounter
            )
            .map((productData) => {
              const handleAddToCart = () => {
                setCartProd(productData);
                setHiddenCard(isHiddenModalCard ? false : true);
                setBlured(true);
              };

              const handleProdDescr = () => {
                setCartProd(productData);
                setHiddenDescr(isHiddenDescrModal ? false : true);
                setBlured(true);
              };
              return (
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
                    <div className="buttons">
                      <button type="button" onClick={handleProdDescr}>
                        <img
                          src={"public/icons/more-info.svg"}
                          alt="More info"
                        />
                      </button>
                      <button type="button" onClick={handleAddToCart}>
                        <img
                          src={"public/icons/shopping-cart.svg"}
                          alt="Add to shopping cart"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
        {displayedProducts.length <= dispCounter ? (
          ""
        ) : (
          <button
            type="button"
            className="show-more"
            onClick={() => setDispCounter((prev) => prev + 12)}
          >
            Show More
          </button>
        )}
      </div>
    </section>
  );
}

export default Products;

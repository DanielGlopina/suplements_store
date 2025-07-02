import "../index.scss";

const imgError = (e) => {
  e.target.onerror = null;
  e.target.src = "public/img/alternative-image.jpg";
};

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

export default Products;

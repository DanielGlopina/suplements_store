import "./index.scss";

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

export default Search;

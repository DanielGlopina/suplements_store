//Categories Elements Array Import
import categoriesElements from "../data/categoriesElements";
//Product Cards Data Array Import
import productCardsData from "../data/productsCardData";

/**
 * Categories section component.
 * Renders a list of product categories and handles category selection.
 *
 * @param {Function} setCategoryName - Sets the current category name.
 * @param {Function} setProducts - Sets the filtered products array.
 * @param {Function} setDispCounter - Resets the display counter for products.
 */
function Categories({ setCategoryName, setProducts, setDispCounter }) {
  // Handle category selection: reset counter, set category, filter products
  const handleCategorySelect = (categoryName) => {
    setDispCounter(12);
    setCategoryName(categoryName);
    setProducts(
      productCardsData.filter((product) =>
        product.category.includes(categoryName)
      )
    );
  };

  return (
    <section className="categories">
      <h2>Categories</h2>
      <div className="container">
        <div className="categories-box">
          {categoriesElements.map(({ id, img, name }) => (
            <button
              key={id}
              className="category-card"
              type="button"
              onClick={() => handleCategorySelect(name)}
              aria-label={`Show products in ${name} category`}
            >
              <img src={img} alt={name} />
              <h3>{name}</h3>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;

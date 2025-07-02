import "../index.scss";
//Categories Elements Array Import
import categoriesElements from "../data/categoriesElements";
//Product Cards Data Array Import
import productCardsData from "../data/productsCardData";

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
              key={element.id}
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

export default Categories;

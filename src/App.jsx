import { useState, useEffect } from "react";
import "./index.scss";

import Header from "./components/Header";
import Search from "./components/Search";
import Slider from "./components/Slider";
import OurAdvantages from "./components/OurAdvantages";
import Categories from "./components/Categories";
import AddToCartModal from "./components/AddToCartModal";
import ProductDescriptionModal from "./components/ProductDescriptionModal";
import Products from "./components/Products";

//Products Card Data Array Import
import productCardsData from "./data/productsCardData";

function App() {
  const [searchedKeyword, setKeyword] = useState("");
  const [isHiddenSearchModal, setHidden] = useState(true);
  const [slideIndex, setSlideIndex] = useState(0);
  const [AddtoCartProd, setCartProd] = useState(productCardsData[0]);
  const [isHiddenModalCard, setHiddenCard] = useState(true);
  const [isHiddenDescrModal, setHiddenDescr] = useState(true);
  const [isBluredBody, setBlured] = useState(false);
  const [categoryName, setCategoryName] = useState("Universal");
  const [displayedProducts, setProducts] = useState(
    productCardsData.filter((productCard) =>
      productCard.category.includes(categoryName)
    )
  );
  const [dispCounter, setDispCounter] = useState(8);

  useEffect(() => {
    if (isBluredBody) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isBluredBody]);

  return (
    <>
      <main className={`main ${isBluredBody ? "blured" : ""}`}>
        <Header />
        <Search
          productCardsData={productCardsData}
          setProducts={setProducts}
          searchedKeyword={searchedKeyword}
          setKeyword={setKeyword}
          isHiddenSearchModal={isHiddenSearchModal}
          setHidden={setHidden}
        />
        <Slider slideIndex={slideIndex} setSlideIndex={setSlideIndex} />
        <OurAdvantages />
        <Categories
          setCategoryName={setCategoryName}
          setProducts={setProducts}
          setDispCounter={setDispCounter}
        />
        <Products
          setProducts={setProducts}
          displayedProducts={displayedProducts}
          dispCounter={dispCounter}
          setDispCounter={setDispCounter}
          setCartProd={setCartProd}
          isHiddenModalCard={isHiddenModalCard}
          setHiddenCard={setHiddenCard}
          isHiddenDescrModal={isHiddenDescrModal}
          setHiddenDescr={setHiddenDescr}
          setBlured={setBlured}
        />
      </main>
      <AddToCartModal
        AddtoCartProd={AddtoCartProd}
        isHiddenModalCard={isHiddenModalCard}
        setHiddenCard={setHiddenCard}
        setBlured={setBlured}
      />
      <ProductDescriptionModal
        AddtoCartProd={AddtoCartProd}
        isHiddenDescrModal={isHiddenDescrModal}
        setHiddenDescr={setHiddenDescr}
        setBlured={setBlured}
      />
    </>
  );
}

export default App;

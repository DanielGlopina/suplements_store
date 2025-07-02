import { useState } from "react";
import "./index.scss";

import Header from "./components/Header";
import Search from "./components/Search";
import Slider from "./components/Slider";
import OurAdvantages from "./components/OurAdvantages";
import Categories from "./components/Categories";
import Products from "./components/Products";

//Products Card Data Array Import
import productCardsData from "./data/productsCardData";

function App() {
  const [searchedKeyword, setKeyword] = useState("");
  const [isHiddenSearchModal, setHidden] = useState(true);
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
        displayedProducts={displayedProducts}
        dispCounter={dispCounter}
        setDispCounter={setDispCounter}
      />
    </main>
  );
}

export default App;

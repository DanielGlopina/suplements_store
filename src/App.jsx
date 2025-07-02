import { useState } from "react";
import "./index.scss";

import Header from "./Header";
import Search from "./Search";
import Slider from "./Slider";
import OurAdvantages from "./OurAdvantages";
import Categories from "./Categories";
import Products from "./Products";

//Products Card Data Array Import
import productCardsData from "./productsCardData";

function App() {
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
      <Search />
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

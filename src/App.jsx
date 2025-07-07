import { useState, useEffect } from "react";
import "./index.scss";

import Header from "./components/Header";
import ShoppingCartModal from "./components/ShoppingCartModal";
import Search from "./components/Search";
import Slider from "./components/Slider";
import OurAdvantages from "./components/OurAdvantages";
import Categories from "./components/Categories";
import AddToCartModal from "./components/AddToCartModal";
import ProductDescriptionModal from "./components/ProductDescriptionModal";
import Products from "./components/Products";
import Footer from "./components/Footer";

//Products Card Data Array Import
import productCardsData from "./data/productsCardData";
import PartnerBrands from "./components/PartnerBrands";

function App() {
  const [isHiddenShoppingCart, setHiddenShopCart] = useState(true);
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
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [toast, setToast] = useState({ visible: false, message: "" });

  useEffect(() => {
    if (isBluredBody) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isBluredBody]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const showToast = (message) => {
    setToast({ visible: true, message });
    setTimeout(() => setToast({ visible: false, message: "" }), 2000);
  };

  const addToCart = (product, flavour, quantity) => {
    const existingIndex = cart.findIndex(
      (item) =>
        item.id === product.id &&
        item.flavour === flavour &&
        item.brand === product.brand
    );
    if (existingIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingIndex].quantity += quantity;
      setCart(updatedCart);
    } else {
      setCart([
        ...cart,
        {
          ...product,
          flavour,
          quantity,
        },
      ]);
    }
    showToast(`Added to cart: ${product.name} (${product.brand})`);
  };

  const removeFromCart = (productId, flavour, brand) => {
    setCart((prevCart) =>
      prevCart.filter(
        (item) => !(item.id === productId && item.flavour === flavour && item.brand === brand)
      )
    );
  };
  const increaseQuantityInCart = (productId, flavour) => {
    setCart((cart) =>
      cart.map((item) =>
        item.id === productId && item.flavour === flavour
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };
  const decreaseQuantityInCart = (productId, flavour) => {
    setCart((cart) =>
      cart.map((item) =>
        item.id === productId && item.flavour === flavour && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

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
          isHiddenShoppingCart={isHiddenShoppingCart}
          setHiddenShopCart={setHiddenShopCart}
          setBlured={setBlured}
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
        <PartnerBrands />
        <Footer></Footer>
      </main>
      <ShoppingCartModal
        isHiddenShoppingCart={isHiddenShoppingCart}
        setHiddenShopCart={setHiddenShopCart}
        setBlured={setBlured}
        cart={cart}
        removeFromCart={removeFromCart}
        increaseQuantityInCart={increaseQuantityInCart}
        decreaseQuantityInCart={decreaseQuantityInCart}
      />
      <AddToCartModal
        AddtoCartProd={AddtoCartProd}
        isHiddenModalCard={isHiddenModalCard}
        setHiddenCard={setHiddenCard}
        setBlured={setBlured}
        addToCart={addToCart}
        toast={toast}
      />
      <ProductDescriptionModal
        AddtoCartProd={AddtoCartProd}
        isHiddenDescrModal={isHiddenDescrModal}
        setHiddenDescr={setHiddenDescr}
        setBlured={setBlured}
      />
      {toast.visible && <div className="cart-toast">{toast.message}</div>}
    </>
  );
}

export default App;

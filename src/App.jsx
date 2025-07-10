import { useState, useEffect, useCallback } from "react";
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
import PartnerBrands from "./components/PartnerBrands";
import productCardsData from "./data/productsCardData";

// Custom hook for cart logic
function useCart(initialCart) {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : initialCart;
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Add product to cart or increase quantity if already exists
  const addToCart = useCallback((product, flavour, quantity) => {
    setCart((prevCart) => {
      const idx = prevCart.findIndex(
        (item) =>
          item.id === product.id &&
          item.flavour === flavour &&
          item.brand === product.brand
      );
      if (idx !== -1) {
        const updated = [...prevCart];
        updated[idx].quantity += quantity;
        return updated;
      }
      return [...prevCart, { ...product, flavour, quantity }];
    });
  }, []);

  // Remove product from cart
  const removeFromCart = useCallback((productId, flavour, brand) => {
    setCart((prev) =>
      prev.filter(
        (item) =>
          !(
            item.id === productId &&
            item.flavour === flavour &&
            item.brand === brand
          )
      )
    );
  }, []);

  // Change product quantity in cart
  const changeQuantity = useCallback((productId, flavour, delta) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === productId && item.flavour === flavour
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  }, []);

  return { cart, addToCart, removeFromCart, changeQuantity, setCart };
}

function App() {
  // UI state
  const [isBluredBody, setBlured] = useState(false);
  const [isHiddenShoppingCart, setHiddenShopCart] = useState(true);
  const [isHiddenSearchModal, setHidden] = useState(true);
  const [isHiddenModalCard, setHiddenCard] = useState(true);
  const [isHiddenDescrModal, setHiddenDescr] = useState(true);
  const [slideIndex, setSlideIndex] = useState(0);
  const [isFirstPageActual, setBrandPage] = useState(true);

  // Data state
  const [searchedKeyword, setKeyword] = useState("");
  const [categoryName, setCategoryName] = useState("Universal");
  const [displayedProducts, setProducts] = useState(
    productCardsData.filter((p) => p.category.includes(categoryName))
  );
  const [dispCounter, setDispCounter] = useState(12);
  const [AddtoCartProd, setCartProd] = useState(productCardsData[0]);
  const [toast, setToast] = useState({ visible: false, message: "" });

  // Cart logic via custom hook
  const { cart, addToCart, removeFromCart, changeQuantity } = useCart([]);

  // Disable scroll when modal is open
  useEffect(() => {
    document.body.classList.toggle("no-scroll", isBluredBody);
  }, [isBluredBody]);

  // Show toast message
  const showToast = useCallback((message) => {
    setToast({ visible: true, message });
    setTimeout(() => setToast({ visible: false, message: "" }), 2000);
  }, []);

  // Wrapper for addToCart with toast
  const handleAddToCart = useCallback(
    (product, flavour, quantity) => {
      addToCart(product, flavour, quantity);
      showToast(`Added to cart: ${product.name} (${product.brand})`);
    },
    [addToCart, showToast]
  );

  return (
    <>
      <main className={`main${isBluredBody ? " blured" : ""}`}>
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
        <PartnerBrands
          isFirstPageActual={isFirstPageActual}
          setBrandPage={setBrandPage}
        />
        <Footer />
      </main>
      <ShoppingCartModal
        isHiddenShoppingCart={isHiddenShoppingCart}
        setHiddenShopCart={setHiddenShopCart}
        setBlured={setBlured}
        cart={cart}
        removeFromCart={removeFromCart}
        increaseQuantityInCart={(id, flavour) => changeQuantity(id, flavour, 1)}
        decreaseQuantityInCart={(id, flavour) =>
          changeQuantity(id, flavour, -1)
        }
      />
      <AddToCartModal
        AddtoCartProd={AddtoCartProd}
        isHiddenModalCard={isHiddenModalCard}
        setHiddenCard={setHiddenCard}
        setBlured={setBlured}
        addToCart={handleAddToCart}
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

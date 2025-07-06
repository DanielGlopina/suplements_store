import "../index.scss";
import { useState } from "react";

function AddToCartModal({
  AddtoCartProd,
  isHiddenModalCard,
  setHiddenCard,
  setBlured,
  addToCart,
}) {
  const [selectedFlavour, setSelectedFlavour] = useState(AddtoCartProd.flavour[0]);
  const [quantity, setQuantity] = useState(1);

  const handleCloseModal = () => {
    setHiddenCard(isHiddenModalCard ? false : true);
    setBlured(false);
  };

  const handleAddToCart = () => {
    addToCart(AddtoCartProd, selectedFlavour, quantity);
    handleCloseModal();
  };

  const handleQuantityChange = (e) => {
    const value = Math.max(1, Number(e.target.value));
    setQuantity(value);
  };

  return (
    <div className={`add-modal ${isHiddenModalCard ? "hidden" : ""}`}>
      <div className="container">
        <div className="add-modal-content">
          <button
            type="button"
            className="close-modal-btn"
            onClick={handleCloseModal}
          >
            <img src="public/icons/close-btn.svg" alt="close button" />
          </button>
          <img src={AddtoCartProd.img} alt={AddtoCartProd.name} />
          <h3>
            {AddtoCartProd.name} - {AddtoCartProd.brand}
          </h3>
          <div className="price-and-delivery">
            <h4 className="price-modal">{AddtoCartProd.price}₴</h4>
            <div className="delivery">
              <h4>Delivery: From ₴89.00</h4>
              <h4>FREE delivery on orders over ₴2250.00</h4>
            </div>
          </div>
          <h4>Quantity: {AddtoCartProd.weight}</h4>
          <h4>Flavour:</h4>
          <select required value={selectedFlavour} onChange={e => setSelectedFlavour(e.target.value)}>
            {AddtoCartProd.flavour.map((flavour) => (
              <option value={flavour} key={flavour}>
                {flavour}
              </option>
            ))}
          </select>
          <h4>Pcs:</h4>
          <div className="quantity">
            <button type="button" onClick={() => setQuantity(q => Math.max(1, q - 1))}>-</button>
            <input type="number" min={1} value={quantity} onChange={handleQuantityChange} />
            <button type="button" onClick={() => setQuantity(q => q + 1)}>+</button>
          </div>
          <button type="button" className="add-cart-btn" onClick={handleAddToCart}>
            Add To Cart{" "}
            <img src="public/icons/shopping-cart.svg" alt="shopping cart" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddToCartModal;

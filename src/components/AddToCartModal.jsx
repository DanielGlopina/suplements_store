import "../index.scss";
import { useState } from "react";

function AddToCartModal({
  AddtoCartProd,
  isHiddenModalCard,
  setHiddenCard,
  setBlured,
}) {
  const handleCloseModal = () => {
    setHiddenCard(isHiddenModalCard ? false : true);
    setBlured(false);
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
          <select required>
            {AddtoCartProd.flavour.map((flavour) => (
              <option value={flavour} key={flavour}>
                {flavour}
              </option>
            ))}
          </select>
          <h4>Pcs:</h4>
          <div className="quantity">
            <button type="button">-</button>
            <input type="number" min={0} placeholder="0" />
            <button type="button">+</button>
          </div>
          <button type="button" className="add-cart-btn">
            Add To Cart{" "}
            <img src="public/icons/shopping-cart.svg" alt="shopping cart" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddToCartModal;

import "../index.scss";
import { useState } from "react";

function ShoppingCartModal({
  isHiddenShoppingCart,
  setHiddenShopCart,
  setBlured,
  cart,
  removeFromCart,
  increaseQuantityInCart,
  decreaseQuantityInCart,
}) {
  const handleCloseModal = () => {
    setHiddenShopCart(isHiddenShoppingCart ? false : true);
    setBlured(false);
  };
  return (
    <div className={`add-modal ${isHiddenShoppingCart ? "hidden" : ""}`}>
      <div className="container">
        <div className="shopping-cart-modal">
          <button
            type="button"
            className="close-modal-btn"
            onClick={handleCloseModal}
          >
            <img src="public/icons/close-btn.svg" alt="close button" />
          </button>
          <h3>Shopping Cart</h3>
          {cart.length === 0 ? (
            <h4>Your cart is empty😿</h4>
          ) : (
            <>
              <ul className="cart-list">
                {cart.map((item, idx) => (
                  <li className="cart-item" key={item.id + item.flavour + idx}>
                    <img
                      className="cart-item-img"
                      src={item.img}
                      alt={item.name}
                    />
                    <div className="cart-item-info">
                      <h4>
                        {item.name} - {item.brand}
                      </h4>
                      <h4>Flavour: {item.flavour}</h4>
                      <div className="cart-item-qty">
                        <h4>Quantity:</h4>
                        <button
                          className="cart-item-qty-btn"
                          onClick={() =>
                            decreaseQuantityInCart(item.id, item.flavour)
                          }
                        >
                          -
                        </button>
                        <h4>{item.quantity}</h4>
                        <button
                          className="cart-item-qty-btn"
                          onClick={() =>
                            increaseQuantityInCart(item.id, item.flavour)
                          }
                        >
                          +
                        </button>
                      </div>
                      <span>Price: {item.price}₴</span>
                    </div>
                    <button
                      className="cart-item-remove-btn"
                      onClick={() =>
                        removeFromCart(item.id, item.flavour, item.brand)
                      }
                    >
                      Delete
                    </button>
                  </li>
                ))}
              </ul>
              <div className="cart-total">
                <span>Total:</span>
                <span style={{ fontWeight: 600, fontSize: "20px" }}>
                  {cart.reduce(
                    (sum, item) => sum + item.price * item.quantity,
                    0
                  )}
                  ₴
                </span>
              </div>

              <button type="button" className="add-cart-btn">
                Proceed To Payment{" "}
                <img src="public/icons/shopping-cart.svg" alt="shopping cart" />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default ShoppingCartModal;

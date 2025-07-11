import React from "react";

/**
 * ShoppingCartModal component.
 * Displays the shopping cart modal with product list, quantity controls, and total.
 *
 * @param {boolean} isHiddenShoppingCart - Modal visibility flag.
 * @param {Function} setHiddenShopCart - Function to hide modal.
 * @param {Function} setBlured - Function to remove blur from background.
 * @param {Array} cart - Array of cart items.
 * @param {Function} removeFromCart - Removes item from cart.
 * @param {Function} increaseQuantityInCart - Increases item quantity.
 * @param {Function} decreaseQuantityInCart - Decreases item quantity.
 */
function ShoppingCartModal({
  isHiddenShoppingCart,
  setHiddenShopCart,
  setBlured,
  cart,
  removeFromCart,
  increaseQuantityInCart,
  decreaseQuantityInCart,
}) {
  // Close modal and remove blur
  const handleCloseModal = () => {
    setHiddenShopCart(true);
    setBlured(false);
  };

  // Calculate total price
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className={`add-modal${isHiddenShoppingCart ? " hidden" : ""}`}>
      <div className="container">
        <div className="shopping-cart-modal">
          {/* Close modal button */}
          <button
            type="button"
            className="close-modal-btn"
            onClick={handleCloseModal}
            aria-label="Close"
          >
            <img src="icons/close-btn.svg?v=1" alt="close button" />
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
                          aria-label="Decrease quantity"
                        >
                          -
                        </button>
                        <h4>{item.quantity}</h4>
                        <button
                          className="cart-item-qty-btn"
                          onClick={() =>
                            increaseQuantityInCart(item.id, item.flavour)
                          }
                          aria-label="Increase quantity"
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
                      aria-label="Remove from cart"
                    >
                      Delete
                    </button>
                  </li>
                ))}
              </ul>
              <div className="cart-total">
                <span>Total:</span>
                <span style={{ fontWeight: 600, fontSize: "20px" }}>
                  {total}₴
                </span>
              </div>
              <button type="button" className="add-cart-btn">
                Proceed To Payment{" "}
                <img src="icons/shopping-cart.svg" alt="shopping cart" />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default ShoppingCartModal;

import { useState, useEffect } from "react";

// Modal for adding product to cart
function AddToCartModal({
  AddtoCartProd,        // Product object to add
  isHiddenModalCard,    // Modal visibility flag
  setHiddenCard,        // Function to hide modal
  setBlured,            // Function to remove blur from background
  addToCart,            // Function to add product to cart
}) {
  // Selected flavour state
  const [selectedFlavour, setSelectedFlavour] = useState(AddtoCartProd.flavour[0]);
  // Quantity state
  const [quantity, setQuantity] = useState(1);

  // Reset flavour and quantity when product changes
  useEffect(() => {
    setSelectedFlavour(AddtoCartProd.flavour[0]);
    setQuantity(1);
  }, [AddtoCartProd]);

  // Close modal and remove blur
  const close = () => {
    setHiddenCard(true);
    setBlured(false);
  };

  // Add product to cart and close modal
  const add = () => {
    addToCart(AddtoCartProd, selectedFlavour, quantity);
    close();
  };

  return (
    <div className={`add-modal${isHiddenModalCard ? " hidden" : ""}`}>
      <div className="container">
        <div className="add-modal-content">
          {/* Close modal button */}
          <button className="close-modal-btn" onClick={close}>
            <img src="public/icons/close-btn.svg" alt="close" />
          </button>
          {/* Product image */}
          <img src={AddtoCartProd.img} alt={AddtoCartProd.name} />
          {/* Product name and brand */}
          <h3>
            {AddtoCartProd.name} - {AddtoCartProd.brand}
          </h3>
          {/* Price and delivery info */}
          <div className="price-and-delivery">
            <h4 className="price-modal">{AddtoCartProd.price}₴</h4>
            <div className="delivery">
              <h4>Delivery: From ₴89.00</h4>
              <h4>FREE delivery on orders over ₴2250.00</h4>
            </div>
          </div>
          {/* Product weight */}
          <h4>Quantity: {AddtoCartProd.weight}</h4>
          {/* Flavour selection */}
          <h4>Flavour:</h4>
          <select
            value={selectedFlavour}
            onChange={(e) => setSelectedFlavour(e.target.value)}
          >
            {AddtoCartProd.flavour.map((f) => (
              <option key={f}>{f}</option>
            ))}
          </select>
          {/* Quantity selection */}
          <h4>Pcs:</h4>
          <div className="quantity">
            <button onClick={() => setQuantity((q) => Math.max(1, q - 1))}>
              -
            </button>
            <input
              type="number"
              min={1}
              value={quantity}
              onChange={(e) => setQuantity(Math.max(1, +e.target.value))}
            />
            <button onClick={() => setQuantity((q) => q + 1)}>+</button>
          </div>
          {/* Add to cart button */}
          <button className="add-cart-btn" onClick={add}>
            Add To Cart <img src="public/icons/shopping-cart.svg" alt="cart" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddToCartModal;

import React from "react";

/**
 * ProductDescriptionModal component.
 * Shows detailed product info and macros in a modal window.
 *
 * @param {object} AddtoCartProd - Product object to show.
 * @param {boolean} isHiddenDescrModal - Modal visibility flag.
 * @param {function} setHiddenDescr - Function to hide modal.
 * @param {function} setBlured - Function to remove blur from background.
 */
function ProductDescriptionModal({
  AddtoCartProd,
  isHiddenDescrModal,
  setHiddenDescr,
  setBlured,
}) {
  // Close modal and remove blur
  const handleCloseModal = () => {
    setHiddenDescr(true);
    setBlured(false);
  };

  return (
    <div className={`add-modal ${isHiddenDescrModal ? "hidden" : ""}`}>
      <div className="container">
        <div className="product-descr-modal">
          {/* Close modal button */}
          <button
            type="button"
            className="close-modal-btn"
            onClick={handleCloseModal}
            aria-label="Close"
          >
            <img src="public/icons/close-btn.svg" alt="close button" />
          </button>

          {/* Product name and brand */}
          <h3>
            {AddtoCartProd.name} - {AddtoCartProd.brand}
          </h3>

          {/* Macros info */}
          {AddtoCartProd.macrosArr && (
            <>
              <h4>Per Portion:</h4>
              <div className="macros-grid">
                {AddtoCartProd.macrosArr.map(([label, value], i) => (
                  <React.Fragment key={i}>
                    <div>{label}</div>
                    <div>{value}</div>
                  </React.Fragment>
                ))}
              </div>
            </>
          )}

          {/* Product description */}
          <p>{AddtoCartProd.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDescriptionModal;

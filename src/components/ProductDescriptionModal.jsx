import "../index.scss";
import { useState } from "react";

function ProductDescriptionModal({
  AddtoCartProd,
  isHiddenDescrModal,
  setHiddenDescr,
  setBlured,
}) {
  const handleCloseModal = () => {
    setHiddenDescr(isHiddenDescrModal ? false : true);
    setBlured(false);
  };
  return (
    <div className={`add-modal ${isHiddenDescrModal ? "hidden" : ""}`}>
      <div className="container">
        <div className="product-descr-modal">
          <button
            type="button"
            className="close-modal-btn"
            onClick={handleCloseModal}
          >
            <img src="public/icons/close-btn.svg" alt="close button" />
          </button>

          <h3>
            {AddtoCartProd.name} - {AddtoCartProd.brand}
          </h3>

          <h4>{AddtoCartProd.macrosArr !== null ? "Per Portion:" : ""}</h4>

          <div className="macros-grid">
            {AddtoCartProd.macrosArr !== null ? (
              AddtoCartProd.macrosArr.map((arr) => (
                <>
                  <div>{arr[0]}</div>
                  <div>{arr[1]}</div>
                </>
              ))
            ) : (
              <>
                <h2></h2>
              </>
            )}
          </div>

          <p>{AddtoCartProd.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDescriptionModal;

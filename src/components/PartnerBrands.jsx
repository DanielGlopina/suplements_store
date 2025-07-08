import { useEffect } from "react";
import "../index.scss";
import filters from "../data/filters";

function PartnerBrands({ isFirstPageActual, setBrandPage }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      setBrandPage(!isFirstPageActual);
    }, 4000);
    return () => clearTimeout(timer);
  }, [isFirstPageActual, setBrandPage]);

  const handleIndicatorClick = (page) => {
    if (page !== isFirstPageActual) {
      setBrandPage(page);
    }
  };

  return (
    <section className="brands-section">
      <h2>Trusted Brands We Partner With</h2>
      <div className="container">
        <div className="brands-container">
          {isFirstPageActual
            ? filters[0].brandsImg[0].map((img) => (
                <img src={img} alt="brand logo" key={img} />
              ))
            : filters[0].brandsImg[1].map((img) => (
                <img src={img} alt="brand logo" key={img} />
              ))}
        </div>
        <div className="indicators">
          <div
            className={isFirstPageActual ? "actual" : ""}
            onClick={() => handleIndicatorClick(true)}
            style={{ cursor: isFirstPageActual ? "default" : "pointer" }}
          ></div>
          <div
            className={isFirstPageActual ? "" : "actual"}
            onClick={() => handleIndicatorClick(false)}
            style={{ cursor: isFirstPageActual ? "pointer" : "default" }}
          ></div>
        </div>
      </div>
    </section>
  );
}

export default PartnerBrands;

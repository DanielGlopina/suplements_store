import { useEffect } from "react";
import filters from "../data/filters";

/**
 * PartnerBrands component.
 * Shows trusted partner brands with auto-switching and manual indicators.
 *
 * @param {boolean} isFirstPageActual - Is the first page of brands shown.
 * @param {Function} setBrandPage - Function to switch brand page.
 */
function PartnerBrands({ isFirstPageActual, setBrandPage }) {
  // Auto-switch brands every 4 seconds
  useEffect(() => {
    const timer = setTimeout(() => setBrandPage(!isFirstPageActual), 4000);
    return () => clearTimeout(timer);
  }, [isFirstPageActual, setBrandPage]);

  // Handle indicator click
  const handleIndicatorClick = (page) => {
    if (page !== isFirstPageActual) setBrandPage(page);
  };

  // Get current brands images
  const brands = filters[0].brandsImg[isFirstPageActual ? 0 : 1];

  return (
    <section className="brands-section">
      <h2>Trusted Brands We Partner With</h2>
      <div className="container">
        <div className="brands-container">
          {brands.map((img) => (
            <img src={img} alt="brand logo" key={img} />
          ))}
        </div>
        <div className="indicators">
          {[true, false].map((page) => (
            <div
              key={page ? "first" : "second"}
              className={isFirstPageActual === page ? "actual" : ""}
              onClick={() => handleIndicatorClick(page)}
              style={{
                cursor: isFirstPageActual === page ? "default" : "pointer",
              }}
              aria-label={`Show ${page ? "first" : "second"} brands page`}
              tabIndex={0}
              role="button"
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") handleIndicatorClick(page);
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PartnerBrands;

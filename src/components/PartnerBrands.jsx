import "../index.scss";
import filters from "../data/filters";

function PartnerBrands() {
  return (
    <section className="brands-section">
      <h2>Trusted Brands We Partner With</h2>
      <div className="container">
        <div className="brands-container">
          {filters[0].brandsImg.map((img) => (
            <img src={img} alt="brand logo" />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PartnerBrands;

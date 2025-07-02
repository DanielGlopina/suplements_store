import "../index.scss";

function OurAdvantages() {
  return (
    <section className="our-advantages">
      <div className="container">
        <div className="advantages-content">
          <div className="advantage-card">
            <img src={"/public/icons/clock.svg"} alt="clock icon" />
            <div className="advantage-description">
              <h3>Quick Delivery</h3>
              <h4>Your order will arrive within 3 days</h4>
            </div>
          </div>
          <div className="advantage-card">
            <img src={"/public/icons/package.svg"} alt="package icon" />
            <div className="advantage-description">
              <h3>Free Delivery</h3>
              <h4>For orders over 2100₴</h4>
            </div>
          </div>
          <div className="advantage-card">
            <img src={"/public/icons/notepad.svg"} alt="notepad icon" />
            <div className="advantage-description">
              <h3>Wide Selection</h3>
              <h4>Of hight-quality products</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurAdvantages;

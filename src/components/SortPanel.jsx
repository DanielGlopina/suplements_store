import "../index.scss";
import filters from "../data/filters";
import productCardsData from "../data/productsCardData";
import { useState, useEffect } from "react";

function SortPanel({ setProducts }) {
  const [isHiddenPanel, setHiddenState] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedFlavour, setSelectedFlavour] = useState("");
  const [priceFrom, setPriceFrom] = useState("");
  const [priceTo, setPriceTo] = useState("");

  useEffect(() => {
    let filtered = productCardsData;
    if (selectedBrand) {
      filtered = filtered.filter((product) => product.category.includes(selectedBrand));
    }
    if (selectedType) {
      filtered = filtered.filter((product) => product.category.includes(selectedType));
    }
    if (selectedFlavour) {
      filtered = filtered.filter((product) => product.flavour.includes(selectedFlavour));
    }
    if (priceFrom) {
      filtered = filtered.filter((product) => Number(product.price) >= Number(priceFrom));
    }
    if (priceTo) {
      filtered = filtered.filter((product) => Number(product.price) <= Number(priceTo));
    }
    setProducts(filtered);
  }, [selectedBrand, selectedType, selectedFlavour, priceFrom, priceTo, setProducts]);

  const handleClearAll = () => {
    setSelectedBrand("");
    setSelectedType("");
    setSelectedFlavour("");
    setPriceFrom("");
    setPriceTo("");
    setProducts(productCardsData);
  };

  return (
    <div className="sort-panel">
      <div className="container">
        <div className="panel-content">
          <div className="panel-title">
            <h2>Sort By</h2>
            <button onClick={() => setHiddenState(isHiddenPanel ? false : true)}>
              <img
                src={
                  isHiddenPanel
                    ? "/public/icons/arrow-up.svg"
                    : "/public/icons/arrow-down.svg"
                }
                alt=""
              />
            </button>
          </div>
        </div>

        <div className={`panel-filters ${isHiddenPanel ? "" : "hidden"}`}>
          <div className="price-filter">
            <h3>Price</h3>
            <div className="price-inputs">
              <h4>from</h4>
              <input type="number" min={0} placeholder="0" value={priceFrom} onChange={e => setPriceFrom(e.target.value)} />
              <h4>to</h4>
              <input type="number" min={0} placeholder="0" value={priceTo} onChange={e => setPriceTo(e.target.value)} />
            </div>
          </div>

          <div className="brand-filter">
            <h3>Brand</h3>
            <select value={selectedBrand} onChange={e => setSelectedBrand(e.target.value)}>
              <option value="">All</option>
              {filters[0].brands.map((elem) => (
                <option value={elem} key={elem}>
                  {elem} (
                  {
                    productCardsData.filter((prod) =>
                      prod.category.includes(elem)
                    ).length
                  }
                  )
                </option>
              ))}
            </select>
          </div>

          <div className="type-filter">
            <h3>Type</h3>
            <select value={selectedType} onChange={e => setSelectedType(e.target.value)}>
              <option value="">All</option>
              {filters[0].types.map((type) => (
                <option value={type} key={type}>
                  {type} (
                  {
                    productCardsData.filter((prod) =>
                      prod.category.includes(type)
                    ).length
                  }
                  )
                </option>
              ))}
            </select>
          </div>

          <div className="type-filter">
            <h3>Flavour</h3>
            <select value={selectedFlavour} onChange={e => setSelectedFlavour(e.target.value)}>
              <option value="">All</option>
              {filters[0].flavours.map((flavour) => (
                <option value={flavour} key={flavour}>
                  {flavour} (
                  {
                    productCardsData.filter((prod) =>
                      prod.flavour.includes(flavour)
                    ).length
                  }
                  )
                </option>
              ))}
            </select>
          </div>

          <button type="button" onClick={handleClearAll}>
            Clear All
          </button>
        </div>
      </div>
    </div>
  );
}

export default SortPanel;

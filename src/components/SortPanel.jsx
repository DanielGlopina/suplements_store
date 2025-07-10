import { useState, useEffect } from "react";
import filters from "../data/filters";
import productCardsData from "../data/productsCardData";

/**
 * SortPanel component.
 * Allows filtering products by price, brand, type, and flavour.
 *
 * @param {Function} setProducts - Sets filtered products.
 */
function SortPanel({ setProducts }) {
  const [isHiddenPanel, setHiddenState] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedFlavour, setSelectedFlavour] = useState("");
  const [priceFrom, setPriceFrom] = useState("");
  const [priceTo, setPriceTo] = useState("");

  // Filter products on any filter change
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

  // Reset all filters
  const handleClearAll = () => {
    setSelectedBrand("");
    setSelectedType("");
    setSelectedFlavour("");
    setPriceFrom("");
    setPriceTo("");
    setProducts(productCardsData);
  };

  // Get count for each filter option, considering other filters
  const getBrandCount = (brand) =>
    productCardsData.filter((prod) =>
      (!selectedType || prod.category.includes(selectedType)) &&
      (!selectedFlavour || prod.flavour.includes(selectedFlavour)) &&
      (!priceFrom || Number(prod.price) >= Number(priceFrom)) &&
      (!priceTo || Number(prod.price) <= Number(priceTo)) &&
      prod.category.includes(brand)
    ).length;

  const getTypeCount = (type) =>
    productCardsData.filter((prod) =>
      (!selectedBrand || prod.category.includes(selectedBrand)) &&
      (!selectedFlavour || prod.flavour.includes(selectedFlavour)) &&
      (!priceFrom || Number(prod.price) >= Number(priceFrom)) &&
      (!priceTo || Number(prod.price) <= Number(priceTo)) &&
      prod.category.includes(type)
    ).length;

  const getFlavourCount = (flavour) =>
    productCardsData.filter((prod) =>
      (!selectedBrand || prod.category.includes(selectedBrand)) &&
      (!selectedType || prod.category.includes(selectedType)) &&
      (!priceFrom || Number(prod.price) >= Number(priceFrom)) &&
      (!priceTo || Number(prod.price) <= Number(priceTo)) &&
      prod.flavour.includes(flavour)
    ).length;

  return (
    <div className="sort-panel">
      <div className="container">
        <div className="panel-content">
          <div className="panel-title">
            <h2>Sort By</h2>
            <button onClick={() => setHiddenState(!isHiddenPanel)}>
              <img
                src={
                  isHiddenPanel
                    ? "/public/icons/arrow-up.svg"
                    : "/public/icons/arrow-down.svg"
                }
                alt="toggle sort panel"
              />
            </button>
          </div>
        </div>

        <div className={`panel-filters ${isHiddenPanel ? "" : "hidden"}`}>
          <div className="price-filter">
            <h3>Price</h3>
            <div className="price-inputs">
              <h4>from</h4>
              <input
                type="number"
                min={0}
                placeholder="0"
                value={priceFrom}
                onChange={e => setPriceFrom(e.target.value)}
              />
              <h4>to</h4>
              <input
                type="number"
                min={0}
                placeholder="0"
                value={priceTo}
                onChange={e => setPriceTo(e.target.value)}
              />
            </div>
          </div>

          <div className="brand-filter">
            <h3>Brand</h3>
            <select value={selectedBrand} onChange={e => setSelectedBrand(e.target.value)}>
              <option value="">All</option>
              {filters[0].brands.map((elem) => (
                <option value={elem} key={elem}>
                  {elem} ({getBrandCount(elem)})
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
                  {type} ({getTypeCount(type)})
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
                  {flavour} ({getFlavourCount(flavour)})
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

import React from "react";
import "./styles.scss";

// Importe da logo
import brandLogo from "../../assets/logos/Group 35.png";

export const Brands: React.FC = () => {
  const brands = Array.from({ length: 5 }, (_, i) => ({ id: i }));

  return (
    <section className="brands-section">
      <div className="container">
        <h2 className="brands-title">Navegue por marcas</h2>

        <div className="brands-list">
          <button className="slider-arrow left" />

          <div className="brands-wrapper">
            {brands.map((brand) => (
              <div key={brand.id} className="brand-item">
                <img
                  src={brandLogo}
                  alt="Logo da Marca"
                  className="brand-logo"
                />
              </div>
            ))}
          </div>

          <button className="slider-arrow right" />
        </div>
      </div>
    </section>
  );
};

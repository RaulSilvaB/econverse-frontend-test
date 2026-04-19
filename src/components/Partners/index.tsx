import React from "react";
import "./styles.scss";

const Partners: React.FC = () => {
  return (
    <section className="partners-section">
      <div className="partners-container">
        <div className="partner-card">
          <div className="card-overlay">
            <h2 className="partner-title">Parceiros</h2>
            <p className="partner-description">
              Lorem ipsum dolor sit amet, consectetur
            </p>
            <button className="partner-button">Confira</button>
          </div>
        </div>

        <div className="partner-card">
          <div className="card-overlay">
            <h2 className="partner-title">Parceiros</h2>
            <p className="partner-description">
              Lorem ipsum dolor sit amet, consectetur
            </p>
            <button className="partner-button">Confira</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;

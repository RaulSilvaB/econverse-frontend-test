import "./styles.scss";

export function Banner() {
  return (
    <section className="hero-banner">
      <div className="container">
        <div className="hero-content">
          <h1>Venha conhecer nossas promoções</h1>
          <p>
            <span className="highlight">50% Off</span> nos produtos
          </p>
          <button className="btn-banner">Ver produto</button>
        </div>
      </div>
    </section>
  );
}

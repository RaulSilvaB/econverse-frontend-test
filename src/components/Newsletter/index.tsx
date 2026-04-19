import React from "react";
import "./styles.scss";

export const Newsletter: React.FC = () => {
  return (
    <section className="newsletter">
      <div className="container newsletter-content">
        <div className="newsletter-text">
          <h2>Inscreva-se na nossa newsletter</h2>
          <p>
            Assine a nossa newsletter e receba as novidades e conteúdos
            exclusivos da Econverse.
          </p>
        </div>

        <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
          <div className="inputs-group">
            <input type="text" placeholder="Digite seu nome" />
            <input type="email" placeholder="Digite seu e-mail" />
            <button type="submit" className="btn-subscribe">
              INSCREVER
            </button>
          </div>   

          <div className="terms">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">Aceito os termos e condições</label>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;

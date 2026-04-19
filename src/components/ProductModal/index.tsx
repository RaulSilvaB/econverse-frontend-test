import React from "react";
import "./styles.scss";

interface Product {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
}

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  isOpen,
  onClose,
  product,
}) => {
  if (!isOpen || !product) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ✕
        </button>

        <div className="modal-content">
          <div className="modal-image">
            <img src={product.photo} alt={product.productName} />
          </div>

          <div className="modal-info">
            <h2 className="modal-title">{product.productName.toUpperCase()}</h2>

            <p className="modal-price">
              {product.price.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </p>

            <p className="modal-description">{product.descriptionShort}</p>

            <a href="#" className="modal-details-link">
              Veja mais detalhes do produto {">"}
            </a>

            <div className="modal-actions">
              <div className="quantity-selector">
                <button type="button">-</button>
                <span>01</span>
                <button type="button">+</button>
              </div>
              <button className="btn-buy">COMPRAR</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

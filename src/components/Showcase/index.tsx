import React, { useState } from "react";
import "./styles.scss";
import { ProductModal } from "../ProductModal";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export interface Product {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
}

interface ShowcaseProps {
  title: string;
  showTabs?: boolean;
  products: Product[];
}

export const Showcase: React.FC<ShowcaseProps> = ({
  title,
  showTabs = true,
  products,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Abre o modal e salva qual produto foi clicado para mostrar os detalhes
  const handleOpenModal = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <section className="showcase">
      <div className="container">
        <div className="showcase-title">
          <div className="line"></div>
          <h2>{title}</h2>
          <div className="line"></div>
        </div>

        {/*Alterna entre o link "Ver todos" ou o menu de categorias dependendo da vitrine*/}
        {!showTabs ? (
          <div className="view-all-container">
            <a href="#" className="view-all">
              Ver todos
            </a>
          </div>
        ) : (
          <nav className="showcase-tabs">
            <ul>
              <li className="active">CELULAR</li>
              <li>ACESSÓRIOS</li>
              <li>TABLETS</li>
              <li>NOTEBOOKS</li>
              <li>TVS</li>
              <li>VER TODOS</li>
            </ul>
          </nav>
        )}

        <div className="products-slider-container">
          {/*Configuração do carrossel com 4 colunas no PC e 1 no celular */}
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={4}
            navigation={{
              nextEl: ".slider-arrow.right",
              prevEl: ".slider-arrow.left",
            }}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
          >
            {products.map((product, index) => (
              <SwiperSlide key={index}>
                <div
                  className="product-card"
                  onClick={() => handleOpenModal(product)}
                >
                  <img
                    src={product.photo}
                    alt={product.productName}
                    className="product-image"
                  />
                  <div className="product-info">
                    <p className="description">{product.productName}</p>
                    <p className="old-price">
                      {(product.price * 1.1).toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                      .
                    </p>
                    <p className="current-price">
                      {product.price.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </p>
                    <p className="installments">
                      ou 2x de{" "}
                      {(product.price / 2).toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}{" "}
                      sem juros
                    </p>
                    <p className="shipping">Frete grátis</p>
                    <button className="btn-buy">COMPRAR</button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <button className="slider-arrow left" />

          <button className="slider-arrow right" />
        </div>
      </div>

      <ProductModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        product={selectedProduct}
      />
    </section>
  );
};

export default Showcase;

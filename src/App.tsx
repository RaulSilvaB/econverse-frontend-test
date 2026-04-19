import { useEffect, useState } from "react";
import "./App.scss";

// Importações dos componentes
import { Header } from "./components/Header";
import { Banner } from "./components/Banner";
import { CategoryNav } from "./components/Categories";
import Partners from "./components/Partners";
import Showcase, { type Product } from "./components/Showcase";
import { Brands } from "./components/Brands";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

function App() {
  // Estado para armazenar os produtos da API/JSON
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  // Busca os produtos no JSON local e controla o carregamento da tela
  useEffect(() => {
    const url = "./produtos.json";

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro ao carregar o arquivo JSON");
        }
        return response.json();
      })
      .then((data) => {
        if (data.success && data.products) {
          setProducts(data.products);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erro na requisição:", err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="app-wrapper">
      <Header />

      <main>
        <Banner />
        <CategoryNav />

        {loading ? (
          <p
            style={{ textAlign: "center", padding: "3rem", fontSize: "1.2rem" }}
          >
            Carregando produtos...
          </p>
        ) : (
          <Showcase
            title="Produtos relacionados"
            products={products}
            showTabs={true}
          />
        )}

        <Partners />

        <Showcase
          title="Produtos relacionados"
          products={products}
          showTabs={false}
        />

        <Partners />
        <Brands />

        <Showcase
          title="Produtos relacionados"
          products={products}
          showTabs={false}
        />

        <Newsletter />
      </main>

      <Footer />
    </div>
  );
}

export default App;

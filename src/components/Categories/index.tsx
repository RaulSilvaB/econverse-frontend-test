import "./styles.scss";

//importe dos icones
import monitorIcon from "../../assets/icons/Categories/image.png";
import supermarketIcon from "../../assets/icons/Categories/supermercados 1.png";
import whiskeyIcon from "../../assets/icons/Categories/whiskey.png";
import toolsIcon from "../../assets/icons/Categories/ferramentas 1.png";
import healthIcon from "../../assets/icons/Categories/cuidados-de-saude 1.png";
import fashionIcon from "../../assets/icons/Categories/moda 1.png";
import fitnessIcon from "../../assets/icons/Categories/corrida 1.png";

const categories = [
  { id: 1, name: "Tecnologia", icon: monitorIcon, active: true },
  { id: 2, name: "Supermercado", icon: supermarketIcon },
  { id: 3, name: "Bebidas", icon: whiskeyIcon },
  { id: 4, name: "Ferramentas", icon: toolsIcon },
  { id: 5, name: "Saúde", icon: healthIcon },
  { id: 6, name: "Esportes e Fitness", icon: fitnessIcon },
  { id: 7, name: "Moda", icon: fashionIcon },
];

export function CategoryNav() {
  return (
    <section className="categories-section">
      <div className="container">
        {categories.map((category) => (
          <div
            key={category.id}
            className={`category-item ${category.active ? "active" : ""}`}
          >
            <div className="category-box">
              <img src={category.icon} alt={category.name} />
            </div>
            <span>{category.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

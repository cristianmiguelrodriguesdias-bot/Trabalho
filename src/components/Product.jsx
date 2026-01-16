import { productsData } from "../data/productsData";
import ProductCard from "./ProductCard/ProductCard";
import styles from "./styles/Product.module.css";

const Products = ({ onProdutoSelecionado }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Informações do Produto:</h1>
      <div className={styles.productsGrid}>
        {productsData.map((product) => (
          <ProductCard
            key={product.id}
            produto={product}
            onComprar={onProdutoSelecionado}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;


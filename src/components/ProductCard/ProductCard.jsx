import { getStockStatus, temFreteGratis, isEmEstoque } from "../../utils/productUtils";
import styles from "../styles/Product.module.css";

const ProductCard = ({ produto, onComprar }) => {
  const stockStatus = getStockStatus(produto.stock);
  const emEstoque = isEmEstoque(produto.stock);
  const freteGratis = temFreteGratis(produto.preço);

  return (
    <div className={styles.productCard}>
      {freteGratis && (
        <div className={styles.freeShippingBadge}>Frete Grátis</div>
      )}
      <img
        src={produto.imagem}
        alt={produto.nome}
        className={styles.productImage}
      />
      <div className={styles.productInfo}>
        <h2 className={styles.productName}>{produto.nome}</h2>
        <p className={styles.productPrice}>{produto.preço}</p>
        <div
          className={`${styles.stockStatus} ${
            styles[stockStatus.className]
          }`}
        >
          {stockStatus.text}
        </div>
        <p className={styles.productQuantity}>
          Quantidade: <span>{produto.stock}</span> unidade(s)
        </p>

        {emEstoque ? (
          <button
            className={styles.buyButton}
            onClick={() => onComprar(produto.nome)}
          >
            Comprar
          </button>
        ) : (
          <div className={styles.unavailableMessage}>Indisponível</div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;

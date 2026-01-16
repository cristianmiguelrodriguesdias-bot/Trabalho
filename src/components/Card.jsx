import Products from "./Product";

const Card = () => {
  const handleProdutoSelecionado = (nomeProduto) => {
    console.log(`Produto selecionado: ${nomeProduto}`);
  };

  return (
    <div className="card">
      <Products onProdutoSelecionado={handleProdutoSelecionado} />
    </div>
  );
};
export default Card;

/**
 * Retorna o status do estoque com texto e classe CSS correspondente
 */
export const getStockStatus = (stock) => {
  const stockNum = parseInt(stock);
  if (stockNum === 0) {
    return { text: "Fora de Estoque", className: "outOfStock" };
  } else if (stockNum < 5) {
    return { text: "Estoque Limitado", className: "limitedStock" };
  } else {
    return { text: "Em Estoque", className: "inStock" };
  }
};

/**
 * Converte string de preço (ex: "R$ 349,99") para número
 */
export const getPrecoNumerico = (precoString) => {
  return parseFloat(
    precoString.replace("R$", "").replace(",", ".").trim()
  );
};

/**
 * Verifica se o produto tem frete grátis (preço > R$ 3.000)
 */
export const temFreteGratis = (preco) => {
  return getPrecoNumerico(preco) > 3000;
};

/**
 * Verifica se o produto está em estoque
 */
export const isEmEstoque = (stock) => {
  return parseInt(stock) > 0;
};

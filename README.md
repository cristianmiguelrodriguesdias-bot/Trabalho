# Vitrine de Produtos Tech

## 📋 Descrição do Projeto

Este projeto é uma **vitrine de produtos de tecnologia** desenvolvida com **React + Vite**, focando em boas práticas de componentização, organização de código e uso de CSS Modules para estilização.

## 👥 Integrantes

- **Andressa Lopes**
- **Cristian Miguel**

## 🔀 Origem do Projeto

Este projeto é um **fork** do repositório original de **Cristian Miguel**:

**Repositório Original:** [cristianmiguelrodriguesdias-bot/Trabalho](https://github.com/cristianmiguelrodriguesdias-bot/Trabalho)

A partir deste fork, foram implementadas melhorias significativas em componentização, organização de código e estilização.

## 🎯 Contexto Escolhido

Desenvolvimento de uma **aplicação web de e-commerce** para exibição de produtos tech. O projeto demonstra:

- ✅ Componentização eficiente e reutilizável
- ✅ Separação de responsabilidades (dados, utilitários, componentes)
- ✅ Renderização condicional baseada em estado
- ✅ Estilização com CSS Modules
- ✅ Prop drilling e callbacks de função
- ✅ Estrutura escalável e fácil de manter

## 📁 Estrutura do Projeto

```
src/
├── App.jsx                    # Componente raiz
├── App.module.css             # Estilos da aplicação
├── main.jsx                   # Ponto de entrada
├── components/
│   ├── Header.jsx            # Cabeçalho
│   ├── Footer.jsx            # Rodapé
│   ├── Card.jsx              # Container de produtos
│   ├── Product.jsx           # Container de lista de produtos
│   ├── ProductCard/
│   │   └── ProductCard.jsx   # Componente individual do produto
│   └── styles/
│       ├── Header.module.css
│       ├── Footer.module.css
│       └── Product.module.css
├── data/
│   └── productsData.js       # Array com dados dos produtos
└── utils/
    └── productUtils.js       # Funções utilitárias
```

## 🚀 Recursos Principais

### Componentes
- **Header**: Cabeçalho com título
- **Footer**: Rodapé com informações de copyright
- **Product**: Container principal que renderiza cards
- **ProductCard**: Componente reutilizável para exibir cada produto

### Funcionalidades
- 📦 Exibição de 5 produtos tech
- 🏷️ Exibição de preço com formatação
- 📸 Imagens dos produtos
- 📊 Status de estoque (Em Estoque, Estoque Limitado, Fora de Estoque)
- 🎁 Selo de "Frete Grátis" para produtos > R$ 3.000
- 🛒 Botão de compra funcional com callback
- ❌ Mensagem "Indisponível" para produtos sem estoque

### Renderização Condicional
```jsx
{emEstoque ? (
  <button onClick={() => onComprar(produto.nome)}>Comprar</button>
) : (
  <div>Indisponível</div>
)}
```

## 🔗 Repositório

**GitHub:** [curso_react_ifmg](https://github.com/AndreessaLopes/Trabalho)

**Branch:** main

## 📜 Histórico de Commits

| Commit | Mensagem |
|--------|----------|
| `e90d287` | refatoração: reorganização e remoção de arquivos desnecessários; adição de novos componentes e estilos |
| `b6b3b28` | first commit |

## 🛠️ Tecnologias Utilizadas

- **React 18+** - Biblioteca UI
- **Vite** - Build tool
- **CSS Modules** - Estilização isolada
- **JavaScript ES6+** - Linguagem

## 📦 Instalação e Uso

### Pré-requisitos
- Node.js 16+
- npm ou yarn

### Instalação

```bash
# Clonar o repositório
git clone git@github.com:AndreessaLopes/Trabalho.git

# Entrar no diretório do projeto
cd Trabalho

# Instalar dependências
npm install
```

### Executar em desenvolvimento

```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:5173`

### Build para produção

```bash
npm run build
```

## 📚 Conceitos React Demonstrados

- ✅ Functional Components
- ✅ Hooks (useState implicitamente com props)
- ✅ Props e destructuring
- ✅ Renderização condicional
- ✅ Listas com `.map()`
- ✅ Event handlers (onClick)
- ✅ CSS Modules
- ✅ Importação de imagens
- ✅ Componentes reutilizáveis

## 📝 Exemplo de Uso

```jsx
import Products from "./components/Product";

// Em um componente pai
const handleProdutoSelecionado = (nomeProduto) => {
  console.log(`Produto selecionado: ${nomeProduto}`);
};

<Products onProdutoSelecionado={handleProdutoSelecionado} />
```

## 🎨 Estilização

O projeto utiliza **CSS Modules** para garantir encapsulamento de estilos:

```jsx
import styles from "./styles/Product.module.css";

<div className={styles.productCard}>...</div>
```

Isso evita conflitos de classe CSS global e melhora a manutenibilidade.

## 🔄 Separação de Responsabilidades

- **`productsData.js`** → Dados (fácil de trocar por uma API)
- **`productUtils.js`** → Lógica (funções reutilizáveis)
- **Componentes** → Apresentação (UI)

Esta arquitetura facilita testes unitários e manutenção.

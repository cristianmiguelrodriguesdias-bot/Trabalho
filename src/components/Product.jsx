import assets from "../assets/alexa.jpeg";
import assets1 from "../assets/fone.jpeg";
import assets2 from "../assets/note.jpeg";
import assets3 from "../assets/oculos.jpeg";
import assets4 from "../assets/placa.jpeg";
import ShowMessage from "./ShowMessage";

const Products = () => {
    const product = [
        {
            id: 1,
            nome: "Alexa",
            preço: "R$ 349,99",
            imagem: assets,
            stock: "10",
    message: ShowMessage
        },
        {
             id: 2,
            nome: "fone",
            preço: "R$ 209,99",
            imagem: assets1,
            stock: "1",
        },
        {
             id: 3,
            nome: "Notebook",
            preço: "R$ 1349,99",
            imagem: assets2,
            stock: "3",
        },
        {
             id: 4,
            nome: "Oculos Asus",
            preço: "R$ 8000,00",
            imagem: assets3,
            stock: "0",
        },
        {
             id: 5,
            nome: "Placa de vídeo",
            preço: "R$ 3549,99",
            imagem: assets4,
            stock: "5",
        },

    ]
    return(
        <div>
            <h1> Informações do Produto: </h1>
            {product.map((prod) => (
                <div key={prod.id}>
                    <p>Nome: {prod.nome}</p>
                    <p>Preço: {prod.preço}</p>
                    <img src={prod.imagem} alt={prod.nome} />
                    <p>Estoque Disponível: {prod.stock}</p>
                </div>
            ))}
        </div>
    )
}

export default Products;
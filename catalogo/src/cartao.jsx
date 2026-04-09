import Perfil from "./perfil";
function Cartao(props) {
    return (
        <div className="cartao">
            <Perfil foto={props.foto} nome={props.nome} />
            <h3>{props.nome}</h3>
            <p> Descrição: {props.descricao}</p>
            <p> Preço: {props.preco}</p>
        </div>
    );
}

export default Cartao;
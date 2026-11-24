import "./Card.css";
import { Link } from "react-router-dom";

type CardProps = {
  id: number;
  imgProduto: string;
  nome: string;
  descricao: string;
  valor: number;
  qtdAvals: number;
  nota: number;
};

function Card({
  id,
  imgProduto,
  nome,
  descricao,
  valor,
}: CardProps) {
  return (
    <article className="prod_card">
      <figure>
        <img src={imgProduto} alt="imagem produto" />
      </figure>
      <h2>
        <Link to={`/detalheProduto/${id}`}>{nome}</Link>
      </h2>
      <p className="card_desc">{descricao}</p>
      <p className="card_rodape">
        <data value={valor}>{valor} / kg</data>
        {/* <span className="card_av">
          <img src={user} alt="icone de usuarios" />
          <data value={qtdAvals}>{qtdAvals}</data>
          <img src={star} alt="icone de estrela" />
          <data value={nota}>{nota}</data>
        </span> */}
      </p>
    </article>
  );
}

export default Card;

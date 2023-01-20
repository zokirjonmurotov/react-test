import "./card.css";

function Card(props) {
  return (
    <div className="card">
      <h2>{props.name}</h2>
      <p>{props.desc}</p>
    </div>
  );
}
export default Card;

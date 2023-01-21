import "./card.css";
import React from "react";

// function Card(props) {
//   return (
//     <div className="card">
//       <h2>{props.name}</h2>
//       <p>{props.desc}</p>
//     </div>
//   );
// }

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      name: "kimdir",
    };
  }
  render() {
    const increment = () => {
      this.setState({ count: this.state.count + 1 });
      this.setState({ name: "Kimdir2" });
    };
    const changeName = () => {};

    return (
      <div className="card">
        <h2>{this.props.name}</h2>
        <p>{this.props.desc}</p>
        <h1>Count {this.state.count}</h1>
        <h1>name:{this.state.name}</h1>

        <button onClick={increment}>click+</button>
      </div>
    );
  }
}

export default Card;

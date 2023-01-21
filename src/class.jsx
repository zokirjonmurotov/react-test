import React from "react";
import Card from "./card";

class MyClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nimadir: false,
    };
  }
  render() {
    const changeState = () => {
      this.setState({ nimadir: !this.state.nimadir });
    };
    return (
      <>
        <h1>Class component</h1>
        <button onClick={changeState}>click</button>
        {this.state.nimadir ? <Card name="bu class c" /> : null}
      </>
    );
  }
}

export default MyClass;

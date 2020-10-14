import React, { Component } from "react";
import "./Screen.css";

class Screen extends Component {
  render() {
    return (
      <div className="screen">
        <div className="ispisUnos">{this.props.unos}</div>
        <div className="ispisRezultat">{this.props.rezultat}</div>
      </div>
    );
  }
}

export default Screen;

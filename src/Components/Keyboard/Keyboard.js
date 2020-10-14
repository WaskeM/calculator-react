import React, { Component } from "react";
import "./Keyboard.css";
import "../Screen/Screen.js";

class Keyboard extends Component {
  render() {
    return (
      <div className="button">
        <table>
          <tbody>
            <tr>
              <td>
                <button onClick={() => this.props.onNumberClick("(")}>(</button>
              </td>
              <td>
                <button onClick={() => this.props.onNumberClick(")")}>)</button>
              </td>
              <td>
                <button onClick={() => this.props.onBackClick()}>Del</button>
              </td>
              <td>
                <button
                  className="offButton"
                  onClick={() => this.props.onOffClick()}
                >
                  OFF
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <button onClick={() => this.props.onNumberClick("*")}>*</button>
              </td>
              <td>
                <button onClick={() => this.props.onNumberClick("/")}>/</button>
              </td>
              <td>
                <button onClick={() => this.props.onClearClick()}>C</button>
              </td>
              <td>
                <button
                  className="onButton"
                  onClick={() => this.props.onOnClick()}
                >
                  ON
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <button onClick={() => this.props.onNumberClick("7")}>7</button>
              </td>
              <td>
                <button onClick={() => this.props.onNumberClick("8")}>8</button>
              </td>
              <td>
                <button onClick={() => this.props.onNumberClick("9")}>9</button>
              </td>
              <td>
                <button onClick={() => this.props.onNumberClick("-")}>-</button>
              </td>
            </tr>
            <tr>
              <td>
                <button onClick={() => this.props.onNumberClick("4")}>4</button>
              </td>
              <td>
                <button onClick={() => this.props.onNumberClick("5")}>5</button>
              </td>
              <td>
                <button onClick={() => this.props.onNumberClick("6")}>6</button>
              </td>
              <td>
                <button onClick={() => this.props.onNumberClick("+")}>+</button>
              </td>
            </tr>
            <tr>
              <td>
                <button onClick={() => this.props.onNumberClick("1")}>1</button>
              </td>
              <td>
                <button onClick={() => this.props.onNumberClick("2")}>2</button>
              </td>
              <td>
                <button onClick={() => this.props.onNumberClick("3")}>3</button>
              </td>
              <td rowSpan="2">
                <button
                  className="equalsButton"
                  onClick={() => this.props.onEqualClick()}
                >
                  =
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <button onClick={() => this.props.onNumberClick("%")}>%</button>
              </td>
              <td>
                <button onClick={() => this.props.onNumberClick("0")}>0</button>
              </td>
              <td>
                <button onClick={() => this.props.onNumberClick(".")}>.</button>
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Keyboard;

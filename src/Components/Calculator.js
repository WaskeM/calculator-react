import React, { Component } from "react";
import Keyboard from "./Keyboard/Keyboard";
import Screen from "./Screen/Screen";
import "./Calculator.css";
import * as math from "mathjs";

class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      unos: "",
      rezultat: "",
      pomocna: "",
      ukljucen: false
    };
  }

  /*
  handleOnClick = () => {
    if (this.handleOnClick === "7") {
      this.setState.unos = "4";
      this.setState.rezultat = 2;
    } else if (this.handleOnClick === "=") {
      let rez = "3";
      this.setState.rezultat = rez;
    } else {
      this.setState.unos = this.unos + this.handleOnClick;
    }
  };*/
  /*
  printNumber = number => {
    console.log(number);
    if (this.state.unos === "") {
      this.setState({
        unos: number,
        rezultat: 0
      });
    } else {
      this.setState({
        unos: this.state.unos * 10 + number,
        rezultat: this.state.rezultat
      });
    }
  };
*/

  printNumber = number => {
    if (this.state.ukljucen === true) {
      console.log(number);
      if (this.state.unos === "" && number == "0") {
        console.log("error");
        this.setState({
          unos: ""
        });
      } else if (number !== "=" && this.state.unos === "") {
        //number += number;
        this.setState({
          unos: String(number)
        });
      } else if (number !== "=") {
        this.setState({
          unos: this.state.unos + String(number)
        });
      }
      // this.setState({
      //   rezultat: 0
      // });
    }
  };
  //this.setState({
  //  result: this.state.result + button

  clearAll = () => {
    console.log("clear button");
    if (this.state.ukljucen === true) {
      this.setState({
        unos: "",
        rezultat: "0",
        pomocna: "0"
      });
    }
  };

  deleteLastNumber = () => {
    if (this.state.ukljucen === true) {
      let string = this.state.unos;
      string = string.toString();
      console.log(string);
      if (string.length > 1) {
        string = string.substring(0, string.length - 1);
        console.log(string);
        string = parseInt(string);
        this.setState({
          unos: string,
          rezultat: 0
        });
      } else {
        this.setState({
          unos: 0,
          rezultat: 0
        });
      }
    }
  };

  /*
  doOperation = operator => {
    if (operator === "+") {
      console.log(this.state.rezultat, this.state.unos);
      this.rezultat = this.state.unos;
      this.setState({
        unos: "",
        rezultat: this.state.rezultat
      });
      console.log(this.state.rezultat, this.state.unos);
    }
  };
  */
  equalButton = () => {
    if (this.state.ukljucen === true) {
      this.setState({
        rezultat: math.evaluate(this.state.unos)
      });
      console.log(this.state.rezultat);
    }
  };

  turnOnButton = () => {
    if (this.state.ukljucen === false) {
      this.setState({
        unos: "",
        rezultat: "0",
        pomocna: "0",
        ukljucen: true
      });
    }
  };
  turnOffButton = () => {
    this.setState({
      unos: "",
      rezultat: "",
      pomocna: "0",
      ukljucen: false
    });
  };

  render() {
    return (
      <div className="calculator">
        <div>
          <img className="cells" src="../solar.jpg" />
        </div>
        <Screen unos={this.state.unos} rezultat={this.state.rezultat} />
        <Keyboard
          onNumberClick={number => this.printNumber(number)}
          onClearClick={() => this.clearAll()}
          onBackClick={() => this.deleteLastNumber()}
          //onOperatorClick={operator => this.doOperation(operator)}
          onEqualClick={() => this.equalButton()}
          onOnClick={() => this.turnOnButton()}
          onOffClick={() => this.turnOffButton()}
        />
      </div>
    );
  }
}

export default Calculator;

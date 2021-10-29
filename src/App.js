import "./App.css";
import React, { useState } from "react";

function App() {
  let [operation, setOperation] = useState("");
  let [result, setResult] = useState("");
  let [op, setOp] = useState("");

  function calc(e) {
    setOp(e);
    setOperation((operation += e));
  }
  function calcMe() {
    setResult(eval(operation));
  }
  function clear() {
    setResult("");
    setOperation("");
  }

  function ret() {
    try {
      return eval(operation);
    } catch (SyntaxError) {
      console.log("j");
      return op;
    }
  }
  //to use keyboard buttons
  document.onkeydown = (e) => {
    let y = document.querySelectorAll(".num");
    for (let i = 0; i < y.length; i++) {
      if (e.keyCode == y[i].id) {
        document.getElementById(e.keyCode).click();
      }
    }
  };

  return (
    <React.Fragment>
      <div className="desc">
        this{" "}
        <a href="https://www.freecodecamp.org/learn" target="blank">
          freecodecamp
        </a>{" "}
        made by{" "}
        <a
          href="https://github.com/ashrafess00?tab=repositories"
          target="_blank"
        >
          Ashraf Essaoudi
        </a>
        , check the project on{" "}
        <a
          href="https://github.com/ashrafess00/react-calculator"
          target="_blank"
        >
          github
        </a>
      </div>
      <div className="calculator">
        <div className="num screen">
          <p className="op">{operation}</p>
          <p className="re">{ret()}</p>
        </div>
        <div className="num ac" onClick={() => clear()}>
          AC
        </div>
        <div className="num dev" id="111" onClick={(e) => calc("/")}>
          /
        </div>
        <div className="num mul" id="106" onClick={(e) => calc("*")}>
          x
        </div>
        <div className="num seven" id="103" onClick={(e) => calc("7")}>
          7
        </div>
        <div className="num eight" id="104" onClick={(e) => calc("8")}>
          8
        </div>
        <div className="num nine" id="105" onClick={(e) => calc("9")}>
          9
        </div>
        <div className="num min" id="109" onClick={(e) => calc("-")}>
          -
        </div>
        <div className="num four" id="100" onClick={(e) => calc("4")}>
          4
        </div>
        <div className="num five" id="101" onClick={(e) => calc("5")}>
          5
        </div>
        <div className="num six" id="102" onClick={(e) => calc("6")}>
          6
        </div>
        <div className="num add" id="107" onClick={(e) => calc("+")}>
          +
        </div>
        <div className="num one" id="97" onClick={(e) => calc("1")}>
          1
        </div>
        <div className="num two" id="98" onClick={(e) => calc("2")}>
          2
        </div>
        <div className="num three" id="99" onClick={(e) => calc("3")}>
          3
        </div>
        <div className="num equal" id="187" onClick={() => calcMe()}>
          =
        </div>
        <div className="num zero" id="96" onClick={(e) => calc("0")}>
          0
        </div>
        <div className="num dot" onClick={(e) => calc(".")}>
          .
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;

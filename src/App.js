import React from "react";
import "./app.css";

function App() {
  return (
    <div className="app">
      <div className="app-container">
        <h1>Calculadora IMC</h1>
        <span>Vamos calcular seu IMC</span>

        <div className="container-input">
          <input type="text"
            placeholder="Digite seu Peso" />
          <input type="text"
            placeholder="Digite sua Altura" />
          <button>Calcular</button>
        </div>

        <h2>Seu IMC foi "number", você está abaixo do peso</h2>

      </div>


    </div >
  );
}

export default App;

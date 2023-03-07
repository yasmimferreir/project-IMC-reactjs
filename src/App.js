import React from "react";
import { useState } from "react";
import "./app.css";
import imcImage from "./assets/imc-iphone.png";

function App() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [mensagem, setMensagem] = useState("");

  function calcularImc() {
    const alt = altura / 100;
    const imc = peso / (alt * alt);

    if (imc < 18.6) {
      setMensagem("Voce está abaixo do peso! Seu IMC é : " + imc.toFixed(2));
    } else if (imc >= 18.6 && imc < 24.9) {
      setMensagem("Peso ideal! Seu IMC é : " + imc.toFixed(2));
    } else if (imc >= 24.9 && imc < 34.9) {
      setMensagem("Voce está um pouco acima do peso! Seu IMC é : " + imc.toFixed(2));
    } else if (imc >= 34.9) {
      setMensagem("Voce está  acima do peso! Seu IMC é : " + imc.toFixed(2));
    }
  }

  return (
    <div className="app">
      <div className="container-image">
       <img src={imcImage}  alt="img-Imc"/>
      </div>


      <div className="app-container">
        <h1>
          Calculadora <span className="title-span"> imc</span>
        </h1>
        <span className="paragrafh">
          Preencha os dados do seu peso e altura 
        </span>

        <div className="container-input">
          <p>Peso</p>
          <input
            type="text"
            required="Preencha os dados"
            placeholder="digite seu peso"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
          />
          <p>Altura</p>
          <input
            type="text"
            
            placeholder="digite sua altura"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
            required="Preencha os dados"
          />

          <button onClick={calcularImc}>Calcular</button>
        </div>

        <h2 className="mensagem-imc">{mensagem}</h2>
      </div>
    </div>
  );
}

export default App;

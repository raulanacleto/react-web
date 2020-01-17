import React, { useState } from "react";
import Header from "./Header";

//componente: é um bloco isolado de html, css e js, o qual nao interfere no restante da aplicacao
//estado: informacoes mantidas pelo componente(lembrar: imutabilidade)
//propriedade: informacoes que um componente pai passa para o componente filho

function App() {
  const [counter, setCounter] = useState(0);

  function incrementCounter() {
    setCounter(counter + 1);
  }

  return (
    <>
      <Header title="DashBoard" />
      <Header title="DashBoard 2" />

      <h1>Contador: {counter}</h1>
      <button onClick={incrementCounter}>Incrementar</button>
    </>
  );
}

export default App;

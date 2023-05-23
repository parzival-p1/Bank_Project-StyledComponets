import React, { useState } from "react";

import GlobalStyle from "./GlobalStyles";
import { temaClaro, temaOscuro } from "./Components/UI/temas";
import { ThemeProvider } from "styled-components";
import Header from "./Components/Header";
import Container from "./Components/Container";
import { BtnTema } from "./Components/UI"
import SwitcherTema from "./Components/SwitcherTema";


console.log(temaClaro, temaOscuro);

function App() {
  const [tema, setTema] = useState(true);

  //* Cambio de Icono: claro / oscuro
  const toggleTema = () => {
    setTema(( tema ) => !tema)
  }
  
  return (
    <ThemeProvider theme={ tema ? temaClaro : temaOscuro }>
      <GlobalStyle />
      <BtnTema onClick={toggleTema}>
        <SwitcherTema tema={tema}/>
      </BtnTema>
      <Header />
      <Container />
    </ThemeProvider>
  );
}

export default App;

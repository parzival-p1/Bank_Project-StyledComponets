import React from "react";
import GlobalStyle from "./GlobalStyles";
import { temaClaro, temaOscuro } from "./Components/UI/temas";
import { ThemeProvider } from "styled-components";
import Header from "./Components/Header";
import Container from "./Components/Container";

console.log(temaClaro, temaOscuro);

function App() {
  return (
    <ThemeProvider theme={ temaClaro }>
      <GlobalStyle />
      <Header />
      <Container />
    </ThemeProvider>
  );
}

export default App;

import { ThemeProvider, styled } from "styled-components";
import { GlobalStyle } from "./style/globalStyle";
import { theme } from "./style/theme";
import Router from "./Router";

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </>
  );
}

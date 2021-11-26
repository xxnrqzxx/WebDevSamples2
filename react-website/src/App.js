import { Toggle } from "./elements/Buttons";
import { GlobalStyle } from "./elements/Body";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { LightTheme, DarkTheme } from "./theme/theme";
import Section from "./components/Section";

function App() {
  const [toggle, setToggle] = useState(false);
  const [theme, setTheme] = useState(LightTheme);
  const toggleTheme = () => {
    setToggle(!toggle);
    toggle ? setTheme(LightTheme) : setTheme(DarkTheme);
  };
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        <Toggle
          onClick={() => {
            toggleTheme();
          }}
        />
        <Section />
      </div>
    </ThemeProvider>
  );
}

export default App;

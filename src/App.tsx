import * as React from 'react';
import { ThemeProvider, CssBaseline } from "@mui/material";
import Header from './components/Header'
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Footer from "./components/Footer";

interface AppProps {
  theme: {
    palette: {
      primary: {
        main: string;
      };
      secondary: {
        main: string;
      };
      mode: string;
    };
  };
  colorMode: {
    toggleColorMode: () => void;
  };
};

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function App(props: AppProps) {

  return (
    <ColorModeContext.Provider value={props.colorMode}>
      <ThemeProvider theme={props.theme}>
        <CssBaseline />
        <Header onClick={props.colorMode.toggleColorMode} mode={props.theme.palette.mode}/>
        <Home />
        <Resume />
        <Contact />
        <Footer />
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App

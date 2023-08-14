import { ThemeProvider, CssBaseline } from "@mui/material";
import Header from './layout/Header'
import Home from "./layout/Home";
import Contact from "./layout/Contact";
import Resume from "./layout/Resume";
import Footer from "./layout/Footer";
import * as React from 'react';

interface AppProps {
  theme: any;
  colorMode: any;
}

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function App(props: AppProps) {

  return (
    <ColorModeContext.Provider value={props.colorMode}>
      <ThemeProvider theme={props.theme}>
        <CssBaseline />
        <Header onClick={props.colorMode.toggleColorMode} theme={props.theme}/>
        <Home />
        <Resume />
        <Contact />
        <Footer />
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App

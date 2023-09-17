import * as React from 'react';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import App from '../App';


function Theme() {
    const [mode, setMode] = React.useState<"light" | "dark">("dark");
    const colorMode = React.useMemo(
      () => ({
        toggleColorMode: () => {
          setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
        },
      }),
      [],
    );
  
    const theme = React.useMemo(
      () =>
        createTheme({
          palette: {
            primary: {
                main: "#000000",
              },
              secondary: {
                main: "#ffffff",
              },
            mode,
          },
        }),
      [mode],
    );
  
    return (
        <App theme={responsiveFontSizes(theme)} colorMode={colorMode}/>
    );
  }

export default Theme
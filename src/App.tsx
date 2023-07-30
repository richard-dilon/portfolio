import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import { enUS } from "@mui/material/locale";
import Header from './layout/Header'
import Home from "./layout/Home";
import Contact from "./layout/Contact";
import Resume from "./layout/Resume";
import Footer from "./layout/Footer";

const theme = createTheme(
  {
    palette: {
      primary: {
        main: "#000000",
      },
      secondary: {
        main: "#ffffff",
      },
      mode: "dark",
    },
  },
  enUS,
);

function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Home />
      <Resume />
      <Contact />
      <Footer />
    </ThemeProvider>
  )
}

export default App

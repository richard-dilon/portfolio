import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from "@mui/material/Container";
import { HashLink as Link } from "react-router-hash-link";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';


const navItems = [
  {
    button: "Home",
    page: "home"
  },
  {
    button: "Resume",
    page: "resume"
  },
  {
    button: "Contact",
    page: "contact"
  }
]

interface HeaderProps {
  onClick: any;
  theme: any;
}


export default function Header(props: HeaderProps) {

  return (
      <AppBar component="nav" color="primary" enableColorOnDark id="header">
        <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 0.48 }}>
            <Typography
              variant="h5"
              sx={{ flexGrow: 1 }}
            >
              Richard Dilon
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 0.5 }}>
            {navItems.map((item) => (
              <Button component={Link} to={`#${item.page}`} smooth key={item.button} sx={{ color: "#ffffff" }}>
                {item.button}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Button sx={{ ml: 1 }} onClick={props.onClick} color="inherit">
              {props.theme.palette.mode === "light" ? <Brightness7Icon /> : <Brightness4Icon />}
            </Button>
          </Box>
        </Toolbar>
        </Container>
      </AppBar>
  );
}
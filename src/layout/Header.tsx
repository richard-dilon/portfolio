import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { HashLink as Link } from "react-router-hash-link";


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


export default function Header() {

  return (
    <Box sx={{ display: "flex" }} id="home2">
      <AppBar component="nav" color="primary" enableColorOnDark>
        <Toolbar sx={{ justifyContent: "center" }}>
          <Box>
            <Typography
              variant="h5"
              sx={{ flexGrow: 1 }}
            >
              Ophis Ouroboros
            </Typography>
          </Box>
        </Toolbar>
        <Toolbar sx={{ justifyContent: "center", marginTop: "-25px", marginBottom: "-12px" }}>
            <Box sx={{ paddingTop: -5 }}>
              {navItems.map((item) => (
                <Button component={Link} to={`#${item.page}`} smooth key={item.button} sx={{ color: "#ffffff" }}>
                  {item.button}
                </Button>
              ))}
            </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
import * as React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { AppBar, Box, Toolbar, Typography, Button, Container, Menu, MenuItem } from "@mui/material";
import { Menu as MenuIcon, Brightness4 as Brightness4Icon, Brightness7 as Brightness7Icon } from "@mui/icons-material";


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
];

interface HeaderProps {
  onClick: () => void;
  mode: string;
};


export default function Header(props: HeaderProps) {

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [selected, setSelected] = React.useState("");

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleSelected = (item: string) => {
    setSelected(item);
  };

  return (
    <AppBar component="nav" color="primary" enableColorOnDark id="header">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none", flexGrow: 1 },
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Richard Dilon
          </Typography>

          <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
            <Button
              aria-label="responsive-menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </Button>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {navItems.map((item) => (
                <MenuItem key={item.button} component={Link} to={`#${item.page}`} onClick={handleCloseNavMenu} smooth sx={{ justifyContent: "center" }}>
                  <Typography textAlign="center">{item.button}</Typography>
                </MenuItem>
              ))}
              <Button sx={{ justifyContent: "right" }} onClick={props.onClick} color="inherit">
                {props.mode === "light" ? <Brightness7Icon /> : <Brightness4Icon />}
              </Button>
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex", flexGrow: 1 },
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Richard Dilon
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {navItems.map((item) => (
              <Button
                component={Link}
                to={`#${item.page}`}
                smooth
                key={item.button}
                onClick={() => handleSelected(item.page)}
                sx={{
                  color: "inherit",
                  ":hover": {
                    backgroundColor: "#ffffff",
                    color: "#000000"
                  },
                  border: selected === item.page ? 1 : 0,
                  borderColor: "#ffffff"
                }}
              >
                {item.button}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0.2, display: { xs: "none", md: "flex" } }}>
            <Button
              onClick={props.onClick}
              sx={{
                color: "inherit",
                ":hover": {
                  backgroundColor: "#ffffff",
                  color: "#000000"
                },
              }}
            >
              {props.mode === "light" ? <Brightness7Icon /> : <Brightness4Icon />}
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import TravelExploreTwoToneIcon from "@mui/icons-material/TravelExploreTwoTone";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Modal } from "@mui/material";
import Login from "../Login";
import { UserContext } from "../../App";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { fontSize } from "@mui/system";

const pages = [
  {title:"Home", link:"/"}, 
  {title:"Review", link: "/review"},
  {title:"Trips", link: "/trips"},
  {title: "Alerts", link: "/alets"}
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const { user, setUser, openModal, handleClose, handleOpen } =
    useContext(UserContext);
  // const [open, setOpen] = React.useState(false);
  // const onClick = () => setOpen(true);
  // const onClose = () => setOpen(false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };
const handleLogout = (oper)=>{
  if(oper === "Logout"){
    logout();
  }
  handleCloseUserMenu();

}
  return (
    <AppBar
      // position="static"
      sx={{ backgroundColor: "#2d394b", color: "#fff",  }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <TravelExploreTwoToneIcon
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            trxvl
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
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
              {pages.map((page) => (
               
                  <NavLink to={page.link} 
                  key={page}
                  onClick={handleCloseNavMenu}
                  style={{textDecoration: "none", margin:1, color: "#fff" }}
                    >
                  <Typography textAlign="center">{page.title}</Typography>
                  </NavLink>
              ))}
            </Menu>
          </Box>
          <TravelExploreTwoToneIcon
            sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            trxvl
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
                <NavLink 
                 key={page}
                onClick={handleCloseNavMenu} to={page.link} 
                style={{  textDecoration: "none", margin:"10px",color:"#fff",  backgroundColor:"transparent" }}>
                {page.title}
                </NavLink>
            
            ))}
          </Box>
          {/* Modal sign in & sign up */}
          {user ? (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="E_Tuvshin" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={()=>{handleLogout(setting)}} >
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          ) : (
            <Box>
              <Button onClick={handleOpen} sx={{fontWeight: "600", color:"#fff"}} >Sign in</Button>
            </Box>
          )}
          <Modal open={openModal} onClose={handleClose}>
            <Login/>
          </Modal>
          <Box>
            <ShoppingCartIcon sx={{ fontSize: "2rem", marginX: "1rem" }} />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;

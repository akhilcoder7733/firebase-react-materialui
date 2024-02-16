import {
  Box,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Button,
  Backdrop,
  Badge,
  Switch,
  Snackbar,
  Alert,
  Divider
} from "@mui/material";
import React, { useState } from "react";
import { styled } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";
import MiscellaneousServices from "@mui/icons-material/MiscellaneousServices";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import ContactsIcon from "@mui/icons-material/Contacts";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useFirebase } from "../../../FirebaseContext";
import { SyncLoader } from "react-spinners";
import { useCart } from "../../../CartContext";
import InfoIcon from '@mui/icons-material/Info';


const nav_titles = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "/pricing",
    display: "Pricing",
  },
  {
    path: "/orders",
    display: "Orders",
  },
  {
    path: "/contact",
    display: "Contact",
  },
  {
    path: "/about",
    display: "About",
  },
];

const NavBarBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: theme.spacing(3),
  padding: theme.spacing(3),
}));
const NavBarUserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: theme.spacing(3),
}));
const CustomMenuIcon = styled(MenuIcon)(({ theme, darkMode }) => ({
  display: "none",
  cursor: "pointer",
  marginRight: theme.spacing(2),
  [theme.breakpoints.down("md")]: {
    display: "block",
    color: darkMode ? "#fff" : "#111",
  },
}));
const StyledLogo = styled(Typography)(({ theme }) => ({
  display: "flex",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));
const NavBarLinksBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: theme.spacing(3),
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const NavBarLink = styled(Typography)(({ theme, darkMode }) => ({
  fontSize: "16px",
  color: darkMode ? "#fff" : "black", // Change color to white in dark mode
  fontWeight: "bold",
  cursor: "pointer",
  fontFamily:"Kanit, sans-serif",
  "&:hover, &:active": {
    color: "#6d78f2",
  },
}));



const StyledButton = styled(Button)(({ theme, darkMode }) => ({
  appearance: 'none',
  backgroundColor: 'transparent',
  border: darkMode ? "2px solid #fff" : "2px solid #3B3B3B",
  borderRadius: '15px',
  boxSizing: 'border-box',
  color: darkMode ? "#fff" : "#3B3B3B",
  cursor: 'pointer',
  display: 'inline-block',
  fontFamily: 'Roobert, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  fontSize: '16px',
  fontWeight: 600,
  lineHeight: 'normal',
  margin: 0,
  minHeight: '40px',
  minWidth: 0,
  outline: 'none',
  padding: '6px 15px',
  textAlign: 'center',
  textDecoration: 'none',
  transition: 'all 300ms cubic-bezier(.23, 1, 0.32, 1)',
  userSelect: 'none',
  WebkitUserSelect: 'none',
  touchAction: 'manipulation',
  width: '100%',
  willChange: 'transform',

  '&:disabled': {
    pointerEvents: 'none',
  },

  '&:hover': {
    color: '#fff',
    backgroundColor: "#1A1A1A",
    boxShadow: `rgba(0, 0, 0, 0.25) 0 8px 15px`,
    transform: 'translateY(-2px)',
  },

  '&:active': {
    boxShadow: 'none',
    transform: 'translateY(0)',
  },
}));


function Header({ darkMode, setDarkMode }) {
  const [mobileMenu, setMobileMenu] = useState({ left: false });
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { auth } = useFirebase();
  const { cartItems } = useCart();
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.type === "Tab" || event.type === "Shift")
    ) {
      return;
    }
    setMobileMenu({ ...mobileMenu, [anchor]: open });
  };


  const handleDarkModeToggle = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };


  const handleLogout = () => {
    // Implement Firebase sign-out logic here
    setOpen(true);
    auth
      .signOut()
      .then(() => {
        console.log("User signed out");
        setTimeout(() => {
          setOpen(false);
          navigate("/login");
        }, 3000);
        // Redirect or perform other actions after sign-out
      })
      .catch((error) => {
        console.error("Logout failed:", error.message);
      });
  };

  const handleClose = () => {
    setOpen(false);
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <Typography variant="body1" fontWeight={600} sx={{
          marginLeft:"20px", fontSize:"22px", textDecoration:"underline"
        }}>Links</Typography>
        {nav_titles.map((item, index) => (
          <ListItem
            key={item.index}
            disablePadding
            onClick={() => navigate(item.path)}
            data-aos="flip-up" data-aos-delay={index * 100} data-aos-duration="1000"
          >
            <ListItemButton >
              <ListItemIcon>
                {index === 0 && <HomeIcon />}
                {index === 1 && <MiscellaneousServices />}
                {index === 2 && <FeaturedPlayListIcon />}
                {index === 3 && <ContactsIcon />}
                {index === 4 && <InfoIcon />}
              </ListItemIcon>
              <ListItemText primary={item.display} />
            </ListItemButton>
                  </ListItem>
        ))}
        <Divider/>
        
      </List>
    </Box>
  );

  return (
    <NavBarBox>
      <Box sx={{ display: "flex", flexDirection: "row", gap: "2rem" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CustomMenuIcon onClick={toggleDrawer("left", true)} />
          <Drawer
            anchor="left"
            open={mobileMenu["left"]}
            onClose={toggleDrawer("left", false)}
          >
            {list("left")}
          </Drawer>
          <StyledLogo variant="h4" fontWeight={900}>
            Logo
          </StyledLogo>
        </Box>
        <NavBarLinksBox>
          {nav_titles.map((item, index) => (
            <NavBarLink darkMode={darkMode} variant="body2" onClick={() => navigate(item.path)}>
              {item.display}
            </NavBarLink>
          ))}
        </NavBarLinksBox>
      </Box>
      <NavBarUserBox>
        {auth.currentUser ? (
          <>
            <Switch checked={darkMode} onChange={handleDarkModeToggle} />
            <StyledButton darkMode={darkMode} onClick={handleLogout}>
              Logout
            </StyledButton>
            <Badge badgeContent={cartItems.length} color="primary">
              <AddShoppingCartIcon onClick={()=> navigate("/cart")} />
            </Badge>
          </>
        ) : (
          <>
            <Switch checked={darkMode} onChange={handleDarkModeToggle} />
            <StyledButton darkMode={darkMode} onClick={() => navigate("/login")}>
              SignIn
            </StyledButton>
            <StyledButton darkMode={darkMode} onClick={() => navigate("/register")}>
              SignUp
            </StyledButton>
          </>
        )}
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
          onClick={handleClose}
        >
          <SyncLoader color="#36d7b7" />
        </Backdrop>
      </NavBarUserBox>
      <Snackbar open={open} autoHideDuration={5000}>
        <Alert
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          User successfully Logged Out.!
        </Alert>
      </Snackbar>
    </NavBarBox>
  );
}

export default Header;

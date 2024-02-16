import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  CardActionArea,
  CardActions,
  Button,
  Tab,
  Tabs,
} from "@mui/material";
import { styled } from "@mui/system";
import productsData from "../../Json/ProductsDatas.json"; // Import your JSON data
import { useCart } from "../../../CartContext";
import { useFirebase } from "../../../FirebaseContext";
import LoginPopup from "./LoginPopup";

// Styled Card component
const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 200,
  margin: theme.spacing(3),
}));

const MainBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  flexDirection: "column",
}));

const StyledButton = styled(Button)(({ theme, darkMode }) => ({
  appearance: "none",
  backgroundColor: "transparent",
  border: darkMode
    ? `2px solid #fff`
    : `2px solid ${theme.palette.text.primary}`,
  borderRadius: "15px",
  boxSizing: "border-box",
  color: darkMode ? "#fff" : theme.palette.text.primary,
  cursor: "pointer",
  display: "inline-block",
  fontFamily:
    'Roobert, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  fontSize: "16px",
  fontWeight: 600,
  lineHeight: "normal",
  margin: 0,
  minHeight: "40px",
  minWidth: 0,
  outline: "none",
  padding: "6px 15px",
  textAlign: "center",
  textDecoration: "none",
  transition: "all 300ms cubic-bezier(.23, 1, 0.32, 1)",
  userSelect: "none",
  WebkitUserSelect: "none",
  touchAction: "manipulation",
  width: "100%",
  willChange: "transform",

  "&:disabled": {
    pointerEvents: "none",
  },

  "&:hover": {
    color: "#fff",
    backgroundColor: darkMode ? "#fff" : "#545353",
    boxShadow: `rgba(0, 0, 0, 0.25) 0 8px 15px`,
    transform: "translateY(-2px)",
  },

  "&:active": {
    boxShadow: "none",
    transform: "translateY(0)",
  },
}));

function Products({ darkMode, setDarkMode }) {
  const { addToCart } = useCart();
  const { auth } = useFirebase();
  const [loginPopupOpen, setLoginPopupOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All Products");

  const handleAddToCart = async (product) => {
    if (auth.currentUser) {
      addToCart(product);
    } else {
      // Show login popup
      setLoginPopupOpen(true);
    }
  };

  const closeLoginPopup = () => {
    setLoginPopupOpen(false);
  };

  const handleCategoryChange = (event, newValue) => {
    setSelectedCategory(newValue);
  };

  const filteredProducts =
    selectedCategory === "All Products"
      ? productsData
      : productsData.filter((product) => product.category === selectedCategory);

  return (
    <MainBox>
      <Tabs
        value={selectedCategory}
        onChange={handleCategoryChange}
        variant="scrollable"
        scrollButtons="auto"
        sx={{
          width: { xs: "100%", sm: "80%", lg: "50%" }, // Adjust width for small screens
          overflowX: "auto", // Add horizontal scroll for small screens
        }}
      >
        <Tab label="All Products" value="All Products" />
        <Tab label="Electronics" value="Electronics" />
        <Tab label="Footwear" value="Footwear" />
        <Tab label="Jewelry" value="Jewelry" />
        <Tab label="Fashion" value="Fashion" />
      </Tabs>
      <Grid container spacing={3} style={{ justifyContent: "center" }}>
        {filteredProducts.map((product) => (
          <Grid
            item
            key={product.id}
            data-aos="fade-in"
            data-aos-duration={`${product.id * 200}`}
          >
            <StyledCard>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={product.image}
                  alt={product.name}
                />
                <CardContent>
                  <Typography variant="h6">{product.name}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    {product.category}
                  </Typography>
                  <Typography variant="body1">
                    ${product.price.toFixed(2)}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {product.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <StyledButton
                  darkMode={darkMode}
                  fullWidth
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </StyledButton>
              </CardActions>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
      <LoginPopup open={loginPopupOpen} onClose={closeLoginPopup}/>
    </MainBox>
  );
}

export default Products;

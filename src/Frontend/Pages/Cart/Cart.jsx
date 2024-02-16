import React, { useState } from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Avatar,
  Card,
  Collapse,
  Button,
  Divider,
} from "@mui/material";
import { styled } from "@mui/system";
import DeleteIcon from "@mui/icons-material/Delete";
import { useCart } from "../../../CartContext";
import { useNavigate } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';

// Styled List component
const MainBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
}));
const MainSecondBox = styled(Box)(({ theme }) => ({
  display: "block",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  backgroundImage:"linear-gradient(45deg, rgba(179,177,180,1) 0%, rgba(136,137,139,1) 92%)",
  width:"70%",
  borderRadius:"30px",
  minHeight:"90vh",
  [theme.breakpoints.down("sm")]:{
    width:"100%"
  }
}));
const StyledList = styled(List)(({ theme }) => ({
  width: 500,
  margin: "auto",
  [theme.breakpoints.down("sm")]: {
    maxWidth: 360,
  },
}));
const StyledCard = styled(Card)(({ theme, darkMode }) => ({
  // marginBottom: "10px",
  // backgroundImage:
  //   "linear-gradient(45deg, rgba(188,254,187,1) 0%, rgba(160,236,255,1) 92%)",
  // border: "1px solid #111",
  // borderRadius:"20px",
  padding:"5px",
  color:"#fff",
  backgroundColor:"#fff",

}));
const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: "70px",
  height: "70px",
  marginRight: "15px",
  border: "2px solid #fff",
}));

const AddMoreButton = styled(Button)(({ theme }) => ({
  border: "2px solid #24b4fb",
  backgroundColor: "#24b4fb",
  borderRadius: "0.9em",
  padding: "0.8em 1.2em 0.8em 1em",
  transition:" all ease-in-out 0.2s",
  fontSize: "16px",
  color:"#fff",
  fontWeight:"bold",
  "&:hover": {
    backgroundColor:"#0071e2",
  },
}));

const BuyNowButton = styled(Button)(({ theme }) => ({
  position: "relative",
  display: "inline-block",
  // margin: "15px",
  padding: "3px 10px",
  textAlign: "center",
  fontSize: "16px",
  letterSpacing: "1px",
  textDecoration: "none",
  color: "#725AC1",
  background: "transparent",
  cursor: "pointer",
  transition: "ease-out 0.5s",
  border: "2px solid #725AC1",
  borderRadius: "10px",
  boxShadow: "inset 0 0 0 0 #725AC1",

  "&:hover": {
    color: "white",
    boxShadow: "inset 0 -100px 0 0 #725AC1",
  },

  "&:active": {
    transform: "scale(0.9)",
  },
  [theme.breakpoints.down("sm")]:{
    fontSize: "16px",
    letterSpacing: 0,
    padding: "1px 2px",
  }
}));

const CustomListItemSecondaryAction =styled(ListItemSecondaryAction)(({theme}) =>({
  display:"flex",
  flexDirection:"column",
}))

const Cart = ({darkMode}) => {
  const { cartItems, removeFromCart } = useCart();
  const [removedItemId, setRemovedItemId] = useState(null);
  const navigate = useNavigate();

  const handleRemoveItem = (productId) => {
    setRemovedItemId(productId);
    // Use a timeout to simulate the animation duration
    setTimeout(() => {
      removeFromCart(productId);
      setRemovedItemId(null);
    }, 500); // Adjust the duration as needed
  };



  return (
    <MainBox>
     <MainSecondBox>
     <Box>
      <Box>
      <Typography variant="h4" mb={2} textAlign="center" pt={5}>
        Your Cart
      </Typography>
      </Box>
      <Box sx={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
      }}>
        <AddMoreButton onClick={()=>navigate("/products")}><AddIcon/>Add More Products</AddMoreButton>
      </Box>
     </Box>

      {cartItems.length === 0 ? (
        <Typography variant="body1" textAlign="center">Your cart is empty.</Typography>
        ) : (
          <StyledList>
            <BuyNowButton onClick={()=>navigate("/checkout")} >Buy Now</BuyNowButton>
          {cartItems.map((item) => (
            <Collapse
              key={item.id}
              in={!removedItemId || removedItemId !== item.id}
              timeout={500}
              unmountOnExit
            >
              <StyledCard>
                <ListItem>
                  <StyledAvatar alt={item.name} src={item.image} />
                  {/* Display item image */}
                  <ListItemText
                    primary={item.name}
                    secondary={`$${item.price.toFixed(2)}`}
                    primaryTypographyProps={{
                      style: {
                        color: darkMode ? "#111" : "#111", // Change primary text color
                      },
                    }}
                    secondaryTypographyProps={{
                      style: {
                        color: darkMode ? "#111" : "#111", // Change secondary text color
                      },
                    }}
                  />
                  <CustomListItemSecondaryAction>
                    <IconButton
                      edge="end"
                      aria-label="delete"
                      onClick={() => handleRemoveItem(item.id)}
                      >
                      <DeleteIcon style={{color:darkMode ? "#111" : "#545454"}} />
                    </IconButton>
                  </CustomListItemSecondaryAction>
                </ListItem>
              </StyledCard>
              <Divider/>
            </Collapse>
          ))}
        </StyledList>
      )}

     </MainSecondBox>
    </MainBox>
  );
};

export default Cart;
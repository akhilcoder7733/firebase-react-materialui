import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  Backdrop,
  Select,
  MenuItem,
} from "@mui/material";
import { styled } from "@mui/system";
import { useCart } from "../../../CartContext";
import ConfirmationPage from "../ConfirmationPage/ConfirmationPage";
import { SyncLoader } from "react-spinners";

const MainBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  marginTop: theme.spacing(5),
}));

const CheckoutButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(3),
}));

const StyledSelect = styled(Select)(({ theme }) => ({
  minWidth: 200,
  marginBottom: theme.spacing(2),
}));

const CheckoutPage = () => {
  const { cartItems } = useCart();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [checkoutCompleted, setCheckoutCompleted] = useState(false);
  const [payment, setPayment] = useState("");

  const handleChange = (event) => {
    setPayment(event.target.value);
  };

  const handleCheckout = () => {
    setOpen(true);
    // Simulate processing time with a delay
    setTimeout(() => {
      setOpen(false);
      setCheckoutCompleted(true);
    }, 2000);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <MainBox>
      {checkoutCompleted ? (
        <ConfirmationPage
          name={name}
          address={address}
          phoneNumber={phoneNumber}
        />
      ) : (
        <>
          <Typography variant="h4" mb={2}>
            Checkout
          </Typography>

          {cartItems.length === 0 ? (
            <Typography variant="body1">Your cart is empty.</Typography>
          ) : (
            <>
              <Typography variant="body1">
                Review your items before proceeding to checkout:
              </Typography>

              <Box>
                {cartItems.map((item) => (
                  <div key={item.id}>
                    <Typography>{item.name}</Typography>
                    <Typography>{item.price.toFixed(2)}/-</Typography>
                  </div>
                ))}
              </Box>

              <Box mt={3}>
                <Typography>
                  Total Price: {cartItems.reduce((total, item) => total + item.price, 0).toFixed(2)}/-
                </Typography>
                <Typography>Total Items: {cartItems.length}</Typography>
              </Box>

              <Box mt={3}>
                Payment Method : 
                <StyledSelect
                  labelId="payment-label"
                  id="payment"
                  value={payment}
                  label="Payment Method"
                  onChange={handleChange}
                >
                  <MenuItem value="" style={{color:"red"}}>Select Payment Method</MenuItem>
                  <MenuItem value="Credit Card">Credit Card</MenuItem>
                  <MenuItem value="PayPal">PayPal</MenuItem>
                  <MenuItem value="Google Pay">Google Pay</MenuItem>
                  <MenuItem value="Cash on Delivery">Cash on Delivery</MenuItem>
                </StyledSelect>
              </Box>

              <Box mt={3}>
                <TextField
                  label="Name"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <TextField
                  label="Address"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
                <TextField
                  label="Phone Number"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </Box>

              <CheckoutButton variant="contained" onClick={handleCheckout}>
                Proceed to Checkout
              </CheckoutButton>
              <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
                onClick={handleClose}
              >
                <SyncLoader color='#36d7b7'/>
              </Backdrop>
            </>
          )}
        </>
      )}
    </MainBox>
  );
};

export default CheckoutPage;

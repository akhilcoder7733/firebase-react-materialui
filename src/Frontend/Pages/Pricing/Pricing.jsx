import { Box, Switch, Typography } from "@mui/material";
import React, { useState } from "react";
import { styled } from "@mui/system";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { useNavigate } from "react-router-dom";

const MainBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  marginTop: theme.spacing(1),
  minHeight: "90vh",
}));

const HeadingBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  marginTop: theme.spacing(5),
  flexWrap: "wrap",
  [theme.breakpoints.down("sm")]: {
    textAlign: "center",
  },
}));

const CardBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap",
  [theme.breakpoints.down("sn")]:{
    flexDirection:"column",
  }
}));

const StyledCardBox = styled(Box)(({ theme }) => ({
  margin: theme.spacing(2),
  marginBottom: theme.spacing(10),
  width: "250px",
  height: "400px",
  backgroundColor: "transparent",
  borderRadius: "20px",
  transition: "0.5s ease-out",
  position: "relative",
  border: "2px solid #c3c6ce",
  overflow: "visible",
  "&:hover": {
    borderColor: "#008bf8",
    boxShadow: "0 4px 18px 0 rgba(0, 0, 0, 0.25)",
  },
  "&:hover .card-button": {
    transform: "translate(-50%, 50%)",
    opacity: 1,
  },
  [theme.breakpoints.down("sm")]:{
    margin: theme.spacing(1),
  marginBottom: theme.spacing(2),
  }
}));

const StyledCardDetails = styled(Box)(({ theme, darkMode }) => ({
  width: "100%",
  height: "100%",
  display: "flex",
  placeContent: "center",
  borderRadius: "20px",
  flexDirection: "column",
  "&:hover": {
    backgroundColor: darkMode ? "#242424" : "#c3c6ce",
  },
}));

const StyledCardHeading = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "20%",
  backgroundColor: "rgba(109, 136, 181, 0.3)",
  borderTopLeftRadius: "18px",
  borderTopRightRadius: "18px",
}));

const StyledCardList = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "80%",
  borderRadius: "20px",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  gap: theme.spacing(2),
}));

const ListBox = styled(Box)(({ theme }) => ({
  width: "70%",
  display: "flex",
  alignItems: "center",
  gap: "10px",
}));

const StyledCardButton = styled(Box)(({ theme }) => ({
  transform: "translate(-50%, 125%)",
  width: "60%",
  borderRadius: "1rem",
  border: "none",
  backgroundColor: "#008bf8",
  color: "#fff",
  fontSize: "1rem",
  padding: ".5rem 1rem",
  position: "absolute",
  left: "50%",
  bottom: 0,
  opacity: 0,
  transition: "0.3s ease-out",
  textAlign: "center",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "#5a52f2",
  },
}));

const StyledSwitch = styled(Switch)(({ theme }) => ({
  padding: "5px",
  "&.Mui-checked": {
    transform: "translateX(16px)",
    color: "#fff",
    "& .MuiSwitch-thumb": {
      boxSizing: "border-box",
      width: 22,
      height: 22,
    },
  },
}));

function Pricing({ darkMode }) {
  const navigate = useNavigate();
  const [yearly, setYearly] = useState(false);

  const handleSwitchChange = () => {
    setYearly((prevYearly) => !prevYearly);
  };

  return (
    <MainBox>
      <HeadingBox>
        <Typography variant="h3" fontWeight={600}>
          Choose Your Pricing Plan
        </Typography>
        <Typography variant="body1">
          All Plans FREE for the first 30 days.
        </Typography>
        <Box>
          Monthly <StyledSwitch onChange={handleSwitchChange} /> Yearly
        </Box>
      </HeadingBox>

      <CardBox>
        <StyledCardBox
          className="card"
          data-aos="flip-left"
          data-aos-delay="100"
        >
          <StyledCardDetails darkMode={darkMode} className="card-details">
            <StyledCardHeading>
              <Typography
                variant="h3"
                style={{
                  fontWeight: "bolder",
                  color: "#c3c6cu",
                  textAlign: "center",
                  marginTop: "10px",
                }}
              >
                Free
              </Typography>
            </StyledCardHeading>
            <StyledCardList>
              <ListBox>
                <Typography
                  variant="h2"
                  style={{
                    fontWeight: "bolder",
                    color: "#c3c6cu",
                    textAlign: "center",
                  }}
                >
                  {yearly ? "0.00/-" : "0.00/-"}
                </Typography>
              </ListBox>
              <ListBox>
                <BookmarkBorderIcon />
                500 Request
              </ListBox>
              <ListBox>
                <BookmarkBorderIcon />
                Free Delivery
              </ListBox>
              <ListBox>
                <BookmarkBorderIcon />
                Paid visits
              </ListBox>
              <ListBox>
                <BookmarkBorderIcon />
                Advertisements
              </ListBox>
              <ListBox>
                <BookmarkBorderIcon />
                Paid Partners
              </ListBox>
            </StyledCardList>
          </StyledCardDetails>
          <StyledCardButton
            className="card-button"
            onClick={() => navigate("/login")}
          >
            Start Free
          </StyledCardButton>
        </StyledCardBox>


        <StyledCardBox
          className="card"
          data-aos="flip-left"
          data-aos-delay="200"
        >
          <StyledCardDetails darkMode={darkMode} className="card-details">
            <StyledCardHeading style={{ backgroundColor: "#21cf47" }}>
              <Typography
                variant="h3"
                style={{
                  fontWeight: "bolder",
                  color: "#c3c6cu",
                  textAlign: "center",
                  marginTop: "10px",
                }}
              >
                Basic
              </Typography>
            </StyledCardHeading>
            <StyledCardList>
              <ListBox>
                <Typography
                  variant="h2"
                  style={{
                    fontWeight: "bolder",
                    color: "#c3c6cu",
                    textAlign: "center",
                  }}
                >
                  {yearly ? "79.99/-" : "16.99/-"}
                </Typography>
              </ListBox>
              <ListBox>
                <BookmarkBorderIcon />
                {yearly ? "3500 Request" : "2000 Request"}
              </ListBox>
              <ListBox>
                <BookmarkBorderIcon />
                {yearly ? "Free Delivery" : "Paid Delivery"}
              </ListBox>
              <ListBox>
                <BookmarkBorderIcon />
                {yearly ? "Advertisements Free" : "Paid Advertisements"}
              </ListBox>
              <ListBox>
                <BookmarkBorderIcon />
                {yearly ? "Uncontrolled visits" : "Controlled visits"}
              </ListBox>
              <ListBox>
                <BookmarkBorderIcon />
                {yearly ? "Free Partners" : "Paid Partners"}
              </ListBox>
            </StyledCardList>
          </StyledCardDetails>
          <StyledCardButton
            className="card-button"
            style={{ backgroundColor: "#21cf47", color: "#111" }}
            onClick={() => navigate("/login")}
          >
            {yearly ? "Get Yearly" : "Get Started"}
          </StyledCardButton>
        </StyledCardBox>
        <StyledCardBox
          className="card"
          data-aos="flip-left"
          data-aos-delay="300"
        >
          <StyledCardDetails darkMode={darkMode} className="card-details">
            <StyledCardHeading>
              <Typography
                variant="h3"
                style={{
                  fontWeight: "bolder",
                  color: "#c3c6cu",
                  textAlign: "center",
                  marginTop: "10px",
                }}
              >
                Advanced
              </Typography>
            </StyledCardHeading>
            <StyledCardList>
              <ListBox>
                <Typography
                  variant="h2"
                  style={{
                    fontWeight: "bolder",
                    color: "#c3c6cu",
                    textAlign: "center",
                  }}
                >
                  {yearly ? "79.99/-" : "33.99/-"}
                </Typography>
              </ListBox>
              <ListBox>
                <BookmarkBorderIcon />
                {yearly ? "6000 Request" : "5000 Request"}
              </ListBox>
              <ListBox>
                <BookmarkBorderIcon />
                Free Delivery
              </ListBox>
              <ListBox>
                <BookmarkBorderIcon />
                Unlimited visits
              </ListBox>
              <ListBox>
                <BookmarkBorderIcon />
                No Advertisements
              </ListBox>
              <ListBox>
                <BookmarkBorderIcon />
                Free Partners
              </ListBox>
            </StyledCardList>
          </StyledCardDetails>
          <StyledCardButton
            className="card-button"
            onClick={() => navigate("/login")}
          >
            Start Advanced
          </StyledCardButton>
        </StyledCardBox>
      </CardBox>
    </MainBox>
  );
}

export default Pricing;

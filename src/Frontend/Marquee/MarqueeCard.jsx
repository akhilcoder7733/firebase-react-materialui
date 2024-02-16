import { styled } from "@mui/system";
import {
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";

const MainBox = styled(Box)(({ theme }) => ({
  minHeight: "60vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#282c34",
  color: "#61dafb",
  // padding: "20px",
  marginTop: theme.spacing(2),
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

const ClipBox = styled(Box)(({ theme }) => ({
  minHeight: "60vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  // backgroundColor: "#FFF",
  color: "#61dafb",
  width: "20%",
  [theme.breakpoints.down("sm")]: {
    minHeight: "10vh",
    width: "100%",
  },
}));

const CustomCard = styled(Card)(({ theme }) => ({
  width: 220,
  height: 300,
  margin: "16px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  transition: "transform 0.3s, box-shadow 0.3s",
  borderRadius: "20px",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
  },
}));

const FavouriteIconButton = styled(IconButton)(({ theme, isClicked }) => ({
  color: isClicked ? "red" : "black",
  transition: "color 0.3s",
}));


const cardData = [
  {
    imageUrl: "https://source.unsplash.com/800x1200/?web",
    name: "David Outango",
    subHeading: "WWE",
    detail: "More details",
  },
  {
    imageUrl: "https://source.unsplash.com/800x1200/?sea",
    name: "Mark Henry",
    subHeading: "WWE",
    detail: "More details",
  },
  {
    imageUrl: "https://source.unsplash.com/800x1200/?technology",
    name: "John Cena",
    subHeading: "WWE",
    detail: "More details",
  },
  {
    imageUrl: "https://source.unsplash.com/800x1200/?sun",
    name: "Randy Orton",
    subHeading: "WWE",
    detail: "More details",
  },
  {
    imageUrl: "https://source.unsplash.com/800x1200/?wwe",
    name: "H H H",
    subHeading: "WWE",
    detail: "More details",
  },
  {
    imageUrl: "https://source.unsplash.com/800x1200/?class",
    name: "Arya Butt",
    subHeading: "WWE",
    detail: "More details",
  },
];

function MarqueeCard() {
  const [isFavouriteClicked, setFavouriteClicked] = useState(
    Array(cardData.length).fill(false)
  );

  const handleFavouriteClick = (index) => {
    const updatedState = [...isFavouriteClicked];
    updatedState[index] = !updatedState[index];
    setFavouriteClicked(updatedState);
  };

  return (
    <MainBox>
      <ClipBox>
        <Typography variant="h4" fontWeight={600}>
          Get it now!
        </Typography>
      </ClipBox>
      <Marquee
        speed={200}
        pauseOnHover
        style={{
          clipPath: "polygon(15% 0, 100% 0%, 100% 99%, 0% 100%)",
        
        }}
      >
        {cardData.map((item, index) => (
          <CustomCard key={index}>
            <CardActionArea>
              <CardHeader title={item.name} subheader={item.subHeading} />
              <CardMedia
                component="img"
                height="160"
                alt={item.name}
                src={item.imageUrl}
              />
              <CardActions disableSpacing>
                <FavouriteIconButton
                  aria-label="add to favorites"
                  onClick={() => handleFavouriteClick(index)}
                  isClicked={isFavouriteClicked[index]}
                >
                  <FavoriteIcon />
                </FavouriteIconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
              </CardActions>
            </CardActionArea>
          </CustomCard>
        ))}
      </Marquee>
    </MainBox>
  );
}

export default MarqueeCard;

import React, { useState } from 'react';
import { Box, Grid, Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';

const MainBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '80vh',
  flexDirection: 'column',
  gap: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    minHeight: '40vh'
  }
}));

const CustomCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  borderRadius: "15px",
  height: 'auto',
  '&:hover .ima-card': {
    transform: 'scale(1.3) translateY(10%)',
    transition: 'transform 0.3s ease-in-out'
  }
}));

const CustomCardContent = styled(CardContent)(({ theme }) => ({
  flexGrow: 1
}));

const ShowMoreButton = styled(Button)(({ theme }) => ({
  padding: '1em 2em',
  border: 'none',
  borderRadius: '5px',
  fontWeight: 'bold',
  letterSpacing: '5px',
  textTransform: 'uppercase',
  cursor: 'pointer',
  color: '#2c9caf',
  transition: 'all 900ms',
  fontSize: '15px',
  position: 'relative',
  overflow: 'hidden',
  outline: '2px solid #2c9caf',

  '&:hover': {
    color: '#ffffff',
    transform: 'scale(1.1)',
    outline: '2px solid #70bdca',
    boxShadow: '4px 5px 17px -4px #268391',
  },

  '&::before': {
    content: '""',
    position: 'absolute',
    left: '-50px',
    top: 0,
    width: 0,
    height: '100%',
    backgroundColor: '#2c9caf',
    transform: 'skewX(45deg)',
    zIndex: -1,
    transition: 'width 1000ms',
  },

  '&:hover::before': {
    width: '250%',
  },
}));

const unsplashImages = [
  'https://source.unsplash.com/random/300x200',
  'https://source.unsplash.com/random/400x200',
  'https://source.unsplash.com/random/300x300',
  'https://source.unsplash.com/random/400x300',
  'https://source.unsplash.com/random/300x400',
  'https://source.unsplash.com/random/400x400',
  'https://source.unsplash.com/random/300x200',
  'https://source.unsplash.com/random/400x200',
  'https://source.unsplash.com/random/300x300',
  'https://source.unsplash.com/random/400x300',
  'https://source.unsplash.com/random/300x400',
  'https://source.unsplash.com/random/400x400',
];

function GridPage() {
  const [showMore, setShowMore] = useState(false);
  const initialVisibleImages = showMore ? unsplashImages.length : 3;
  const visibleImages = unsplashImages.slice(0, initialVisibleImages);

  const handleShowMore = () => {
    setShowMore(true);
  };

  return (
    <MainBox>
      <Grid container spacing={3}>
        {visibleImages.map((imageUrl, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} data-aos="fade-up" data-aos-delay={`${index * 100}`}>
            <CustomCard>
              <CardMedia component="img" src={imageUrl} alt={`Image ${index}`} className='ima-card' />
              <CustomCardContent>
                <Typography variant="body2" color="textSecondary">
                  Some description about the image
                </Typography>
              </CustomCardContent>
            </CustomCard>
          </Grid>
        ))}
      </Grid>
      {!showMore && (
        <ShowMoreButton onClick={handleShowMore} variant="contained" color="primary">
          Show More
        </ShowMoreButton>
      )}
    </MainBox>
  );
}

export default GridPage;

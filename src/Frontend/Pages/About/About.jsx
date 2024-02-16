import { Box, Card, CardContent, CardMedia, IconButton, Typography } from '@mui/material'
import React from 'react'
import { styled } from "@mui/system";
import AboutIm from "../../../assets/team.svg";
import TeamImg1 from "../../../assets/new.jpg";
import TeamImg2 from "../../../assets/newpinsta.jpg";
import TeamImg3 from "../../../assets/new.jpg";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';

const MainBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "80vh",
  flexDirection: "column",
  gap: theme.spacing(2),
  [theme.breakpoints.down("sm")]: {
    minHeight: "40vh"
  }
}));

const MainHeadingBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "20vh",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

const MainHeading = styled(Typography)(({ theme }) => ({
  fontSize: "52px",
  fontWeight: 600,
}));

const AboutImageStyle = styled("img")(({ theme }) => ({
  width: "300px",
  [theme.breakpoints.down("sm")]: {
    width: "80%",
  },
}));

const MainCardBox = styled(Box)(({ theme }) => ({
  width: "100%",
  minHeight: "50vh",

  padding: theme.spacing(2),
  [theme.breakpoints.down("sm")]: {

  },
}));

const HeadCard = styled(Box)(({ theme }) => ({
  minHeight: "15vh",
  [theme.breakpoints.down("sm")]: {

  },
}));

const CardBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap:theme.spacing(3),
  [theme.breakpoints.down("sm")]: {
flexDirection:"column"
  },
}));

const StyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: 250,
  height: 350,
  backgroundColor: "#4158D0",
  backgroundImage: "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
  transition: "transform 0.3s ease-out",
  "&:hover": {
    transform: "translateY(-10px)",
  },
  [theme.breakpoints.down("sm")]: {

  },
}));

const IconBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  gap: theme.spacing(3),
  marginTop: theme.spacing(1)
}));

const StyledIconButton = styled(IconButton)(({ theme, bcolor }) => ({
  border: '1px solid #5e5e5e',
  padding: '10px',
  width: "45px",
  height: "45px",
  transition: "transform 0.3s ease-out",
  color: "#fff",
  '&:hover': {
    color: bcolor,
    transform: "scale(1.2)"
  },
}));

const team = [
  {
    image: TeamImg1,
    name: "Akhil John",
    position: "Web Developer",
  },
  {
    image: TeamImg2,
    name: "John Kennedy",
    position: "React Developer",
  },
  {
    image: TeamImg3,
    name: "Sabu Kuriakose",
    position: "Python Developer",
  },
]

function About() {
  return (
    <MainBox>
      <MainHeadingBox>
        <MainHeading data-aos="fade-up" data-aos-delay="100">
          About Us
        </MainHeading>
      </MainHeadingBox>
      <AboutImageStyle
        data-aos="fade-up"
        data-aos-delay="200"
        src={AboutIm}
        alt="contactim"
      />

      <MainCardBox>
        <HeadCard>
          <Typography variant='h3' style={{ textAlign: "center", fontWeight: 600, fontFamily: "Kanit, sans-serif" }}>Our Team</Typography>
          <Typography variant='body1' style={{ textAlign: "center", fontWeight: 600, fontFamily: "Kanit, sans-serif" }}>We stand for your stability</Typography>
        </HeadCard>
        <CardBox>
          {team.map((member, index) => (
            <StyledCard key={index} data-aos="flip-right" data-aos-delay={`${index * 200}`}>
              <CardContent>
                <CardMedia
                  component="img"
                  src={member.image}
                  alt='cardim'
                  height={190}
                  width={100}
                  style={{ borderRadius: "100%", backgroundColor: "#fff" }}
                  className='cardim'
                />
                <Typography variant='h5' style={{ textAlign: "center", fontWeight: 600, fontFamily: "Kanit, sans-serif" }}>{member.name}</Typography>
                <Typography variant='body1' style={{ textAlign: "center", fontWeight: 600, fontFamily: "Kanit, sans-serif" }}>{member.position}</Typography>
                <IconBox>
                  <StyledIconButton bcolor="#1b59f5">
                    <FacebookIcon />
                  </StyledIconButton>
                  <StyledIconButton bcolor="#bf2c73">
                    <InstagramIcon />
                  </StyledIconButton>
                  <StyledIconButton bcolor="#7cbf9a">
                    <GoogleIcon />
                  </StyledIconButton>
                </IconBox>
              </CardContent>
            </StyledCard>
          ))}
        </CardBox>
      </MainCardBox>
      
    </MainBox>
  )
}

export default About

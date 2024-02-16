import React, { useEffect } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import { useNavigate } from 'react-router-dom';
import { styled } from "@mui/system";

const MainBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "60vh",
  flexDirection: "column",
  marginTop:theme.spacing(4),
  gap: theme.spacing(2),
  padding:theme.spacing(1),
  [theme.breakpoints.down("sm")]:{
    minHeight:"40vh"
  }
}));

const SubBox1 = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "40vh",
  width:"100%",
  gap: theme.spacing(1),
  [theme.breakpoints.down("sm")]:{
    flexDirection:"column",
  }
}));

const SubBox2 = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "20vh",
  width:"100%",
  gap: theme.spacing(1),
  [theme.breakpoints.down("sm")]:{
    minHeight: "10vh",
  }
}));

const Inner1 = styled(Box)(({ theme }) =>({
    width:"60%",
    minHeight:"100%",
    padding:theme.spacing(2),
    [theme.breakpoints.down("sm")]:{
      // flexDirection:"column",

      width:"100%",
    }

}))
const Inner2 = styled(Box)(({ theme }) =>({
    width:"40%",
    minHeight:"100%",
    [theme.breakpoints.down("sm")]:{
      // flexDirection:"column",

      width:"100%",
      display:"flex",
      justifyContent: "center",
  alignItems: "center",
  flexDirection:"column",
    }
}))

const IconBox = styled(Box)(({ theme }) =>({
    display:"flex",
    justifyContent: "center",
    alignItems: "center",
    width:"100%",
    gap:theme.spacing(3),
    marginTop:theme.spacing(1)
}))

const StyledIconButton = styled(IconButton)(({ theme, bcolor }) => ({
    border: '1px solid #5e5e5e',
    padding: '10px',
    width:"45px",
    height:"45px",
    transition:"transform 0.3s ease-out",
    '&:hover': {
      color: bcolor,
      transform:"scale(1.2)"
    },
  }));

const NavBarLinksBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    height:"25vh",
    flexDirection:"column",
    gap: theme.spacing(2),
    flexWrap:"wrap",
    [theme.breakpoints.down("md")]: {
      display: "flex",
      height:"35vh",
      alignItems:"center"
    },
  }));

const NavBarLink = styled(Typography)(({ theme, darkMode }) => ({
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    "&:hover, &:active": {
      color: "#6d78f2",
    },
  }));

const StylTyp = styled(Typography)(({ theme, darkMode }) => ({
  textAlign:"start",

  [theme.breakpoints.down("sm")]:{
    textAlign:"center",
    marginBottom:theme.spacing(1)
  }
   
  }));
const footer_links = [
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
      path: "/products",
      display: "Products",
    },
    {
      path: "/welcome",
      display: "Welcome",
    },
    {
      path: "/subscribe",
      display: "Subscribe",
    },
    {
      path: "/subscribe",
      display: "Join Us",
    },
  ];

function Footer() {
    const navigate = useNavigate();

    useEffect(() => {
        const handleLinkClick = () => {
            window.scrollTo(0, 0);
        };

        // Attach event listener to all navbar links
        footer_links.forEach(item => {
            const link = document.getElementById(`footer-link-${item.display.toLowerCase().replace(" ", "-")}`);
            if (link) {
                link.addEventListener('click', handleLinkClick);
            }
        });

        return () => {
            // Cleanup event listeners
            footer_links.forEach(item => {
                const link = document.getElementById(`footer-link-${item.display.toLowerCase().replace(" ", "-")}`);
                if (link) {
                    link.removeEventListener('click', handleLinkClick);
                }
            });
        };
    }, []);

    return (
        <MainBox>
            <SubBox1>
                <Inner1>
                    <StylTyp variant='h4' fontWeight={600} style={{fontFamily:"Kanit, sans-serif"}} >Everything is Real.!</StylTyp>
                    <StylTyp variant='body2' style={{ flexWrap:"wrap", fontFamily:"Kanit, sans-serif", }}  >
                    To style the ShowMoreButton component using the provided CSS styles, you can apply the styles directly in the styled function for the button. 
                    </StylTyp>
                    <Typography variant='body1' textAlign="center" style={{fontFamily:"Kanit, sans-serif"}}>Connect me:</Typography>
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
                </Inner1>
                <Inner2>
                    <Typography variant='h4' style={{ fontWeight:600, fontFamily:"Kanit, sans-serif"}}>Links</Typography>
                    <Typography variant='body1' style={{fontWeight:600, fontFamily:"Kanit, sans-serif", fontSize:"18px"}}>Navigations</Typography>
                    <NavBarLinksBox>
                        {footer_links.map((item, index) => (
                            <NavBarLink id={`footer-link-${item.display.toLowerCase().replace(" ", "-")}`} variant="body2" onClick={() => navigate(item.path)}>
                                {item.display}
                            </NavBarLink>
                        ))}
                    </NavBarLinksBox>
                </Inner2>
            </SubBox1>
            <SubBox2>
                <Typography variant='body2'>This website is copyrighted by Akhil. Terminal Wizard</Typography>
            </SubBox2>
        </MainBox>
    )
}

export default Footer;

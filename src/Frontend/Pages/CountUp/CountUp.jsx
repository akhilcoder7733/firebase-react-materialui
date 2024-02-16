import React, { useRef } from "react";
import CountUp from "react-countup";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

function CountUpComponent() {
  const ordersRef = useRef(null);
  const usersRef = useRef(null);
  const visitsRef = useRef(null);

  const MainBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "80vh",
    flexDirection: "column",
    gap: theme.spacing(4),
  }));

  const HeadingBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(2),
    textAlign: "center",
  }));

  const CountBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    gap: theme.spacing(10),
    width:"90%",
    [theme.breakpoints.down("sm")]:{
      flexDirection:"column",
      gap: theme.spacing(1),
    }
  }));

  const CountSingleBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: theme.spacing(1),
    width:"30%",
  }));

  const StyledTypo = styled(Typography)(({ theme }) => ({
    fontSize: "42px",
    fontWeight: "bolder",
    textAlign: "center",
    backgroundImage:
      "linear-gradient(45deg, rgba(38,115,236,1) 0%, rgba(137,50,213,1) 92%)",
    color: "transparent",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    fontFamily:"Kanit, sans-serif"
  }));

  return (
    <MainBox>
      <HeadingBox>
        <Typography variant="h3" fontWeight={600} data-aos="fade-up" data-aos-delay="100" style={{ textAlign: "center", fontWeight: "bold",fontFamily:"Kanit, sans-serif" }}>
          Everything under one click!
        </Typography>
        <Typography variant="body1" data-aos="fade-up" data-aos-delay="200" style={{ textAlign: "center",fontFamily:"Kanit, sans-serif" }}>
          We import CountUp from react-countup and useRef, useEffect from React.
        </Typography>
        <Typography variant="body1" data-aos="fade-up" data-aos-delay="300" style={{ textAlign: "center",fontFamily:"Kanit, sans-serif" }}>
          We create three useRef hooks to reference each count-up element.
        </Typography>
      </HeadingBox>
      <CountBox>
        <CountSingleBox data-aos="fade-up" data-aos-delay="400">
          <StyledTypo>
            Orders 
          </StyledTypo>
          <CountUp start={0} end={1068} duration={2} ref={ordersRef} style={{fontSize:"53px", fontWeight:"bolder",fontFamily:"Kanit, sans-serif"}} />
        </CountSingleBox>
        <CountSingleBox data-aos="fade-up" data-aos-delay="500">
          <StyledTypo>
            Users           
          </StyledTypo>
          <CountUp start={0} end={2040} duration={3} ref={usersRef} style={{fontSize:"53px", fontWeight:"bolder",fontFamily:"Kanit, sans-serif"}} />
        </CountSingleBox>
        <CountSingleBox data-aos="fade-up" data-aos-delay="600">
          <StyledTypo>
            Visits 
          </StyledTypo>
          <CountUp start={3000} end={4054} duration={4} ref={visitsRef} style={{fontSize:"53px", fontWeight:"bolder",fontFamily:"Kanit, sans-serif"}} />
        </CountSingleBox>
      </CountBox>
    </MainBox>
  );
}

export default CountUpComponent;

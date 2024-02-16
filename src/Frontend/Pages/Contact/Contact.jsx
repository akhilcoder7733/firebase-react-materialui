import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { styled } from "@mui/system";
import ContactIm from "../../../assets/Contactus.svg";
import ContactIm2 from "../../../assets/UseContact.jpg";
import CheckIm2 from "../../../assets/check.svg";
import { JackInTheBox } from "react-awesome-reveal";

const MainBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  // marginTop: theme.spacing(1),
  minHeight: "90vh",
  flexDirection: "column",
  gap: theme.spacing(2),
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

const MainHeadingBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  // marginTop: theme.spacing(1),
  minHeight: "20vh",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

const MainHeading = styled(Typography)(({ theme }) => ({
  fontSize: "52px",
  fontWeight: 600,
}));

const InfoBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "90%",
  minHeight: "70vh",
  gap: theme.spacing(2),
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    width: "100%",
  },
}));

const SmaillBox1 = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "50%",
  height: "auto",
  gap: theme.spacing(2),
  flexDirection: "column",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    width: "90%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));
const SmaillBox2 = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "45%",
  height: "70vh",
  borderRadius: "20px",
  overflow: "hidden",
  transition: "transform 0.3s ease-out",
  "&:hover .contact-imag": {
    transform: "scale(1.2)",
  },
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    width: "80%",
    height: "auto",
  },
}));

const SmallImage = styled("img")(({ theme }) => ({
  objectFit: "fill",
  objectPosition: "center",
  width: "100%",
  borderRadius: "20px",
  transition: "transform 0.3s ease-out",
  "&:hover": {
    transform: "scale(1.2)",
  },
}));

const ContactImageStyle = styled("img")(({ theme }) => ({
  width: "600px",
  [theme.breakpoints.down("sm")]: {
    width: "80%",
  },
}));

const TypoContent = styled(Typography)(({ theme }) => ({
  fontFamily: "Kanit, sans-serif",
  flexWrap: "wrap",
  [theme.breakpoints.down("sm")]: {
    textAlign: "center",
  },
}));

const FormContentBox = styled(Box)(({ theme }) => ({
  width: "70%",
  minHeight: "40vh",
  padding: theme.spacing(2),
  flexDirection: "column",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    width: "90%",
  },
}));

const CustomTextField = styled(TextField)(({ theme }) => ({
  width: "500px",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  "--color": "#0077ff", // Custom property
  fontFamily: "inherit",
  display: "inline-block",
  width: "16em",
  height: "2.6em",
  // lineHeight: '2.5em',
  overflow: "hidden",
  cursor: "pointer",
  margin: "20px",
  fontSize: "17px",
  zIndex: "1",
  color: "var(--color)",
  border: "2px solid var(--color)",
  borderRadius: "6px",
  position: "relative",
  "&::before": {
    position: "absolute",
    content: '""',
    background: "var(--color)",
    width: "350px",
    height: "200px",
    zIndex: "-1",
    borderRadius: "30%",
    top: "100%",
    left: "100%",
    transition: "0.6s all",
  },
  "&:hover": {
    color: "white",
    "&::before": {
      top: "-30px",
      left: "-30px",
    },
  },
}));

const ModalBox = styled(Box)(({ theme }) => ({
  width: "400px",
  minHeight: "300px",
  position: "absolute",
  top: "20%",
  left: "35%",
  transform: "translate(0%, 50%)",
  borderRadius: "20px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  gap: theme.spacing(1),
  padding: theme.spacing(2),
  backgroundImage:
    "linear-gradient(352deg, rgba(236,38,138,1) 0%, rgba(50,209,213,1) 100%)",
    [theme.breakpoints.down("sm")]:{
      top: "30%",
  left: "1.2%",
    }
}));

function Contact() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <MainBox>
      <MainHeadingBox>
        <MainHeading data-aos="fade-up" data-aos-delay="100">
          Contact Us
        </MainHeading>
      </MainHeadingBox>
      <ContactImageStyle
        data-aos="fade-up"
        data-aos-delay="200"
        src={ContactIm}
        alt="contactim"
      />
      <InfoBox>
        <SmaillBox1>
          <Typography
            variant="h4"
            fontWeight={600}
            style={{ fontFamily: "Kanit, sans-serif" }}
            data-aos="fade-up"
            data-aos-delay="300"
          >
            About Us!
          </Typography>
          <TypoContent
            variant="subtitle1"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Contact Form: A contact form allows visitors to send you messages
            directly from your website. It typically includes fields for the
            visitor's name, email address, subject, and message. Make sure the
            form is easy to fill out and submit. Email Address: Provide an email
            address where visitors can reach you directly. You can display it as
            a clickable link or as plain text. Email Address: Provide an email
            address where visitors can reach you directly. You can display it as
            a clickable link or as plain text. Phone Number: If applicable,
            include a phone number where visitors can contact you by phone. Make
            sure to include the appropriate country or area code if your
            audience is international. Phone Number: If applicable, include a
            phone number where visitors can contact you by phone. Make sure to
            include the appropriate country or area code if your audience is
            international.
          </TypoContent>
        </SmaillBox1>
        <SmaillBox2>
          <JackInTheBox>
            <SmallImage
              className="contact-imag"
              src={ContactIm2}
              alt="cintactun2"
              data-aos="fade-up"
              data-aos-delay="500"
            />
          </JackInTheBox>
        </SmaillBox2>
      </InfoBox>
      <FormContentBox>
        <Typography
          variant="h4"
          fontWeight={600}
          style={{ fontFamily: "Kanit, sans-serif" }}
          data-aos="fade-up"
          data-aos-delay="600"
        >
          Connect Me!
        </Typography>
        <CustomTextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          margin="normal"
        />
        <CustomTextField
          id="outlined-multiline-static"
          label="Write here"
          multiline
          rows={4}
          margin="normal"
        />
        <StyledButton onClick={handleOpen}>Submit</StyledButton>
      </FormContentBox>
      <Modal open={open} onClose={handleClose} closeAfterTransition>
        <ModalBox data-aos="fade-up">
          <Typography
            variant="h5"
            fontWeight={600}
            style={{ fontFamily: "Kanit, sans-serif" }}
          >
            Hurrayy..!
          </Typography>
          <img
            src={CheckIm2}
            alt="check"
            style={{ width: "90px" }}
            data-aos="fade-up"
            data-aos-delay="100"
          />
          <Typography
            variant="body1"
            fontWeight={400}
            style={{ fontFamily: "Kanit, sans-serif" }}
          >
            Our team will contact you soon.
          </Typography>
          <Typography
            variant="body1"
            fontWeight={600}
            style={{ fontFamily: "Kanit, sans-serif" }}
          >
            Thank you.
          </Typography>
          <StyledButton
            onClick={handleClose}
            style={{ fontFamily: "Kanit, sans-serif" }}
          >
            Close
          </StyledButton>
        </ModalBox>
      </Modal>
    </MainBox>
  );
}

export default Contact;

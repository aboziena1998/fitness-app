import {
  Box,
  Stack,
  Typography,
  Button,
  outlinedInputClasses,
} from "@mui/material";
import heroBannerImg from "../assets/images/banner.png";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { sm: "50px" },
      }}
      position="relative"
    >
      <Typography color="#ff2265" fontWeight="600" fontSize="26px">
        Fitness Club
      </Typography>

      <Typography
        fontWeight="700"
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        mb={"23px"}
        mt={"30px"}
      >
        Sweat, Smille <br /> and Repeat
      </Typography>

      <Typography lineHeight="35px" fontSize="22px" mb={4}>
        Check out the most effictive excercises
      </Typography>
      <Typography
        fontWeight={"600"}
        color={"#ff2625"}
        sx={{ opacity: 0.1, display: { lg: "block", xs: "none" } }}
        fontSize={"200px"}
      >
        Exercises
      </Typography>
      <Button
        variant="contained"
        sx={{ backgroundColor: "#ff2625", padding: "10px" }}
        href="#exercises"
      >
        Explore Exercises
      </Button>
      <img src={heroBannerImg} alt="banner" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;

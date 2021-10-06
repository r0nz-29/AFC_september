import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Button, Typography } from "@mui/material";
import "./styles.css";

const HeroSection = () => {
  return (
    <div className="home-image-container">
      <div className="hero-text">
        <Typography
          className="title"
          variant="h3"
          sx={{
            paddingBottom: (theme) => theme.spacing(3),
          }}
        >
          Lorem ipsum dolor sit amet, consectetur.
        </Typography>
        <Typography className="description" variant="h6">
          Raesent ultrices dolor velit, sed facilisis velit fermentum et, Sed
          mattis scelerisque ipsum et mattis.
        </Typography>
        <Button
          variant="contained"
          endIcon={<ChevronRightIcon />}
          sx={{
            width: "40%",
            marginTop: (theme) => theme.spacing(8),
            py: (theme) => theme.spacing(2),
          }}
        >
          Get Started Now
        </Button>
      </div>
    </div>
  );
};
export default HeroSection;

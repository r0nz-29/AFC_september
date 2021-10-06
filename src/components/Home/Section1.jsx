import {
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { images } from "../../images";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import "./styles.css";

const Section1 = () => {
  return (
    <Box className="section1-wrapper" sx={{ py: (theme) => theme.spacing(20) }}>
      <Typography variant="h3" sx={{ fontWeight: "900" }}>
        Mauris eu lectus interdum
      </Typography>
      <Typography
        variant="h6"
        sx={{
          fontWeight: "100",
          color: "gray",
          py: (theme) => theme.spacing(3),
          textAlign: "center",
        }}
      >
        Sed euismod dolor mauris, id pulvinar libero semper fermentum, Etiam
        finibus,
        <br /> lacus velit finibus ante, sed commodo ex
      </Typography>
      <Box
        className="cards-container"
        sx={{ py: (theme) => theme.spacing(12) }}
      >
        {[
          {
            title: "Digital Marketing",
            img: images.card1,
          },
          {
            title: "Content Writing",
            img: images.card2,
          },
          {
            title: "Graphic Design",
            img: images.card3,
          },
          {
            title: "SEO for Business",
            img: images.card4,
          },
        ].map((card, ndx) => {
          console.log(card);
          return (
            <Card key={ndx} sx={{ boxShadow: (theme) => theme.shadows[8] }}>
              <CardMedia
                sx={{ width: "15vw", height: "20vh" }}
                component="img"
                image={card.img}
              />
              <CardContent
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography variant="body1">{card.title}</Typography>
                <IconButton>
                  <ChevronRightIcon />
                </IconButton>
              </CardContent>
            </Card>
          );
        })}
      </Box>
    </Box>
  );
};
export default Section1;

import { Typography } from "@mui/material";
import { Box } from "@mui/system";

const Counters = () => {
  return (
    <div className="counters-container">
      {[
        {
          bold: "1M+",
          description: "Mauris eu lectus interdum, tincidunt erat sed",
        },
        {
          bold: "93%",
          description: "Mauris eu lectus interdum, tincidunt erat sed",
        },
        {
          bold: "4.9",
          description: "Mauris eu lectus interdum, tincidunt erat sed",
        },
      ].map((counter, ndx) => {
        return (
          <Box
            sx={{ py: (theme) => theme.spacing(8) }}
            className="counter-wrapper"
            key={ndx}
          >
            <Typography
              variant="h2"
              sx={{
                fontWeight: "900",
                paddingRight: (theme) => theme.spacing(3),
              }}
            >
              {counter.bold}
            </Typography>
            <Typography color="gray">{counter.description}</Typography>
          </Box>
        );
      })}
    </div>
  );
};

export default Counters;

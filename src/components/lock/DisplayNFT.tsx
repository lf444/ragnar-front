import { CardMedia, Grid } from "@mui/material";

const DisplayNFT = ({ test }: { test: any[] }) => {
  /*   console.log(test); */
  return (
    <>
      <Grid container>
        {test.map((e) => {
          return (
            <Grid item xs>
              <CardMedia
                component="img"
                sx={{
                  maxHeight: { xs: 250, md: 250 },
                  maxWidth: { xs: 200, md: 200 },
                }}
                src={e.image}
              />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default DisplayNFT;

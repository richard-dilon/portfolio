import { Grid, ImageList, ImageListItem } from '@mui/material';

export default function Home() {

  return (
      <Grid 
        container
        id="home"
        sx={{
          height:"100vh",
          maxWidth:"100% !important",
          display:"flex",
          flexDirection:"column",
          justifyContent:"center",
          alignContent:"center",
          alignSelf:"center",
          textAlign:"center",
        }}
      >
        <ImageList sx={{ gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))!important" }}>
          <ImageListItem sx={{ height: "100% !important"}}>
            <img src="giphy.gif" className="gg" alt="gg" />
          </ImageListItem>
        </ImageList>
        <h1>LogouT é o CARA</h1>
      </Grid>
  );
}
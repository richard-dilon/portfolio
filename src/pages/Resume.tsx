import { Grid, ImageList, ImageListItem } from '@mui/material';

export default function Resume() {

  return (
    <Grid 
      container
      id="resume"
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
          <img src="hello_there.gif" className="gg" />
        </ImageListItem>
      </ImageList>
      <h4>Hello There!</h4>
    </Grid>
  );
}
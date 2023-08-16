import { ImageList, ImageListItem, Container } from '@mui/material';

export default function Contact() {

  return (
    <Container
      id="contact"
      sx={{
        height:"80vh",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignContent:"center",
        alignSelf:"center",
        textAlign:"center",
      }}
    >
      <ImageList
        gap={12}
        sx={{
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))!important",
        }}>
        <ImageListItem sx={{ height: "100% !important"}}>
          <img src="look_at_me.gif" className="gg" alt="gg" style={{ cursor: "pointer" }}/>
        </ImageListItem>
        <ImageListItem sx={{ height: "100% !important"}} style={{ cursor: "pointer" }}>
          <img src="look_at_me.gif" className="gg" alt="gg" />
        </ImageListItem>
        <ImageListItem sx={{ height: "100% !important"}} style={{ cursor: "pointer" }}>
          <img src="look_at_me.gif" className="gg" alt="gg" />
        </ImageListItem>
      </ImageList>
      <h4>CONTACT</h4>
    </Container>
  );
}
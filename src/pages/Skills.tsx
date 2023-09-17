import { ImageList, ImageListItem, Card, Container, Typography, Tooltip } from '@mui/material';
import { skillImages } from '../components/Images';


export default function Skills() {

  return (
    <Container
      id="skills"
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        alignSelf: "center",
        textAlign: "center",
      }}
    >
      <Typography variant="h5">Some of my technologies!</Typography>
      <ImageList
        gap={12}
        cols={4}
        sx={{
          gridTemplateColumns: "repeat(auto-fill, minmax(120px, 2fr))!important"
        }}
      >
        {skillImages.map((item) =>
          <Tooltip title={item.name}>
            <Card key={item.name} sx={{ borderRadius: "5%", ":hover": { opacity: 0.8, cursor: "pointer" } }}>
              <ImageListItem sx={{ height: "100% !important" }}>
                <img src={item.image} alt={item.name} loading="lazy" />
              </ImageListItem>
            </Card>
          </Tooltip>
        )}
      </ImageList>
    </Container>
  );
}
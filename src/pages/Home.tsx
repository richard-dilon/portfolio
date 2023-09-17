import { Grid, Typography } from '@mui/material';
import { EmphasizedText } from '../components/styles';

export default function Home() {

  return (
    <Grid
      container
      id="home"
      sx={{
        height: "100vh",
        maxWidth: "100% !important",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        alignSelf: "center",
        textAlign: "center",
      }}
    >
      <Typography variant="h2" sx={{ mb: 3, typography: { sm: "h2", xs: "h4" } }}>
        Hello, I'm {<EmphasizedText text="Richard Dilon" textColor="red" textWeight="bold" />}!
      </Typography>
      <Typography variant="h6" sx={{ mb: 2, typography: { sm: "h5", xs: "h" } }}>
        I'm an IT professional with knowledge and experience in 
        {<EmphasizedText text=" software development" textColor="red" textWeight="bold" />}, 
        {<EmphasizedText text=" business intelligence" textColor="red" textWeight="bold" />} and 
        {<EmphasizedText text=" IT infraestructure" textColor="red" textWeight="bold" />}.
      </Typography>
      <Typography variant="h6" sx={{ textDecoration: "underline" }}>
        This website was made utilizing Material UI 5 and Vite.
      </Typography>
    </Grid>
  );
}
import { Box } from "@mui/material";
import { Image } from "mui-image";


export default function Footer() {

  return (
    <Box display="flex" flexDirection="column" justifyContent="center" alignContent="center" alignSelf="center" textAlign="center" id="resume" sx={{ paddingBottom: 2 }}>
      <h3>Website still under construction! :D</h3>
      <Box display="flex" flexDirection="column" justifyContent="center" alignContent="center" alignSelf="center" textAlign="center">
      <Image src="bob-the-builder-fix-it.gif" width={100} height={80} />
      </Box>
    </Box>
  );
}
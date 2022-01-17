import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import PropTypes from "prop-types";
import MKTypography from "../../components/MKTypography";
import MKBox from "../../components/MKBox";

const LandingWallpaper = ({ wallpaper = "" }) => (
  <>
    <MKBox
      minHeight="75vh"
      width="100%"
      sx={{
        backgroundImage: `url(${wallpaper})`,
        backgroundSize: "cover",
        backgroundPosition: "top",
        display: "grid",
        placeItems: "center",
      }}
    >
      <Container>
        <Grid container item xs={12} lg={7} justifyContent="center" mx="auto">
          <MKTypography
            variant="h1"
            color="white"
            mt={-6}
            mb={1}
            sx={({ breakpoints, typography: { size } }) => ({
              [breakpoints.down("md")]: {
                fontSize: size["3xl"],
              },
            })}
          >
            Individuum Dental Clinic{" "}
          </MKTypography>
          <MKTypography
            variant="body1"
            color="white"
            px={{ xs: 6, lg: 12 }}
            textAlign="center"
            mt={1}
          >
            Best quality and service you can imagine
          </MKTypography>
        </Grid>
      </Container>
    </MKBox>
  </>
);
LandingWallpaper.defaultProps = { wallpaper: "" };

LandingWallpaper.propTypes = {
  wallpaper: PropTypes.string,
};

export default LandingWallpaper;

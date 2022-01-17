import NavBarRoutes from "./routes";
import DefaultNavbar from "../../examples/Navbars/DefaultNavbar";

const IndividuumNavigationBar = () => (
  <>
    <DefaultNavbar
      routes={NavBarRoutes}
      // action={{
      //   type: "external",
      //   route: "https://www.creative-tim.com/product/material-kit-react",
      //   label: "free download",
      //   color: "info",
      // }}
      brand="Individuum Dental Clinic"
      transparent={false}
      relative={false}
      light={false}
      center={false}
      sticky
    />
  </>
);

export default IndividuumNavigationBar;

// import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import SwiperCore, { Navigation } from "swiper";
import Card from "@mui/material/Card";
import "swiper/swiper-bundle.css";
import { HomeCounter } from "./components";
import wallpaper from "../../assets/individuumImages/Home-Landing-Wallpaper.jpg";
import {
  Footer,
  IndividuumNavigationBar,
  LandingWallpaper,
  SimpleSwiper,
} from "../../IndividuumComponents";

SwiperCore.use([Navigation]);
const Home = () => (
  <div>
    <IndividuumNavigationBar />
    <LandingWallpaper wallpaper={wallpaper} />
    <Card
      sx={{
        p: 2,
        mx: { xs: 2, lg: 3 },
        mt: -8,
        mb: 4,
        backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
        backdropFilter: "saturate(200%) blur(30px)",
        boxShadow: ({ boxShadows: { xxl } }) => xxl,
      }}
    >
      <HomeCounter />
      <SimpleSwiper />
      <div>About Us Section</div>
      <div>Our Doctors</div>
      <div>Our Services</div>
      <div>Contacts</div>
    </Card>
    <Footer />
  </div>
);

export default Home;

// import { LandingWallpaper, IndividuumNavigationBar } from "../../IndividuumComponents";

import wallpaper from "../../assets/individuumImages/About-Us-Landing-Wallpaper.jpeg";

import { Footer, IndividuumNavigationBar, LandingWallpaper } from "../../IndividuumComponents";

const AboutUs = () => (
  <>
    <IndividuumNavigationBar />
    <LandingWallpaper wallpaper={wallpaper} />
    <div>Landing Wallpaper Section</div>
    <div>Motto & Goals</div>
    <div>Doctors Swiper with Flipping Cards</div>
    <div>Review Section</div>
    <Footer />
  </>
);

export default AboutUs;

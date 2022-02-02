import React from "react";

import "./footer.css";
import IndividuumImage from "assets/individuumImages/Individuum.jpg";
import MKSocialButton from "../../components/MKSocialButton";

const Footer = () => (
  <div className="wrapper center">
    <div className="content center flexColumnSpaceAround">
      <div className="footerName flexRowCenter">
        <div>
          <img src={IndividuumImage} className="footerContentImage" alt="Individuum" />
        </div>
        <div className="center flexColumnCenter">
          <p>Individuum Dental Clinic</p>
        </div>
      </div>
      <div className="flexRowSpaceAround socials">
        <div className="flexCenter">
          <MKSocialButton
            component="a"
            href="https://www.instagram.com/individuum_dental_clinic/?hl=en"
            target="_blank"
            color="instagram"
            sx={{ mr: 1 }}
          >
            <i className="fab fa-instagram" />
            &nbsp;Instagram
          </MKSocialButton>
          <MKSocialButton
            component="a"
            href="https://www.facebook.com/Individuumdentalclinic"
            target="_blank"
            color="facebook"
            sx={{ mr: 1 }}
          >
            <i className="fab fa-facebook" />
            &nbsp;Facebook
          </MKSocialButton>
        </div>
      </div>
    </div>
    <div className="copyright center">
      <p className="">All rights reserved. Copyright © 2022 App by Nelson Mkrtchyan.</p>
    </div>
  </div>
);

export default Footer;

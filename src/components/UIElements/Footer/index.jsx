import React from "react";
import eyeIcon from "@/images/eyeIcon.svg";
import FooterItem from "./FooterItem/FooterItem";
import Slider from "react-slick";

import styles from "./Footer.module.scss";

const Footer = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: `${styles.FooterDots} slick-dots`,
  };
  return (
    <Slider {...settings}>
      <FooterItem
        thumbnail="https://storage.googleapis.com/whitelabel-assets-staging/staging/single/ironman/f4f5159b-ee60-4186-bfb5-af2556fd7128.png"
        info=" This is a locked video with 2 lines of title"
        keyIcon={eyeIcon}
        keyInfo="Time elapsed"
        ValueInfo="05m:32s"
        buttonText="Join Now"
      />
      <FooterItem
        thumbnail="https://storage.googleapis.com/whitelabel-assets-staging/staging/single/ironman/f4f5159b-ee60-4186-bfb5-af2556fd7128.png"
        info=" This is a locked video with 2 lines of title"
        // keyIcon={eyeIcon}
        // keyInfo="Time elapsed"
        // ValueInfo="05m:32s"
        // buttonText="Join Now"
      />
      <FooterItem
        thumbnail="https://storage.googleapis.com/whitelabel-assets-staging/staging/single/ironman/f4f5159b-ee60-4186-bfb5-af2556fd7128.png"
        info=" This is a locked video with 2 lines of title"
        // keyIcon={eyeIcon}
        // keyInfo="Time elapsed"
        // ValueInfo="05m:32s"
        buttonText="Join Now"
      />
    </Slider>
  );
};

export default Footer;

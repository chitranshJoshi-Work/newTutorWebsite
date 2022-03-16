import React, { useEffect } from "react";
// import './navbar.scss';
import LeftArrow from "@/images/Navbarback.svg";
import Info from "@/images/NavbarShare.svg";
import Image from "next/image";
const NavBar = () => {
  useEffect(() => {
    // window.onMobileUpdate = () => {
    //   handleBack();
    // };
  }, []);
  const handleBack = () => {
    // routeSwitchCases(0, 1);
  };

  // console.log(location);
  const renderNavBarText = () => {
    // return routeSwitchCases(1, 0);
  };
  const changeRouteToHow = () => {
    if (location.pathname !== "/how") {
      // history.push('/how');
    }
  };
  return (
    <div className="Navbar">
      {console.log("inside navbar print")}
      <div className="Navbar__Left" onClick={handleBack}>
        <Image src={LeftArrow} alt="ar" />
      </div>
      <div className="Navbar__Middle">{renderNavBarText()}</div>
      <div className="Navbar__Right" onClick={changeRouteToHow}>
        <Image src={Info} alt="in" />
      </div>
    </div>
  );
};

export default NavBar;

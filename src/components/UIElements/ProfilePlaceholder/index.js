import React, { useEffect, useState } from "react";

// import './style.scss';

function ProfilePlaceholder({ name }) {
  const [colorSet, setColorSet] = useState([
    "#0083C1",
    "#8DBD5D",
    "#F83F7E",
    "#FFAE39",
    "#333333",
  ]);
  const [randomColor, setRandomColor] = useState("#e5e5e5");

  useEffect(() => {
    if (colorSet) {
      setRandomColor(colorSet[Math.floor(Math.random() * 5)]);
    }
  }, [colorSet]);
  return (
    <div
      className="ProfilePlaceholder"
      style={{ backgroundColor: randomColor }}
    >
      {name && name[0]}
    </div>
  );
}

export default ProfilePlaceholder;

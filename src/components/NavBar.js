import React from "react";

function NavBar({ list, active }) {
  return (
    <div className="NavBar">
      <div className="NavBar__List">
        {list?.map((item) => (
          <div
            key={item?.id}
            className="NavBar__List--Item"
            style={
              item?.id === active
                ? {
                    backgroundColor: "#009ae0",
                    color: "#ffffff",
                  }
                : { backgroundColor: "#ffffff", color: "#000000" }
            }
          >
            {item?.label}
          </div>
        ))}
      </div>
    </div>
  );
}

export default NavBar;

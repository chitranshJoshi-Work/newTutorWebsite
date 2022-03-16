import React from "react";

function TabBar({ list, active, setTab }) {
  return (
    <div className="TabBar blockSlide">
      <div className="TabBar__List">
        {list?.map((item) => (
          <div
            key={item?.id}
            className="TabBar__List--Item"
            onClick={() => setTab(item?.id)}
            style={
              item?.id === active
                ? {
                    backgroundColor: "var(--appAccentColor)",
                    color: "#ffffff",
                  }
                : { backgroundColor: "#ffffff", color: "#3C4852" }
            }
          >
            {item?.label}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TabBar;

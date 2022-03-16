import Image from "next/image";
import RightArrowIcon from "@/AccentIcons/RightArrowIcon";
import Button from "../UIElements/Button";

const TabSectionCard = ({
  backgroundColor,
  mainHeading,
  mainHeadingColor,
  subText,
  subTextColor,
  viewAllText,
  viewAllTextColor,
  btnClickHandler,
  children,
  className,
}) => {
  const buttonHandler = () => {
    if (btnClickHandler) {
      btnClickHandler();
    }
  };
  return (
    <div style={{ background: backgroundColor }} className={className}>
      <div className="OverviewSectionContainer">
        <div className="OverviewSectionContainer__Head">
          {mainHeading && (
            <h2 style={{ color: mainHeadingColor }}>{mainHeading}</h2>
          )}
          {viewAllText ? (
            <Button
              className="OverviewSectionContainer__Head__Button"
              style={viewAllTextColor ? { color: viewAllTextColor } : {}}
              onClick={buttonHandler}
            >
              {viewAllText}
              <RightArrowIcon color={viewAllTextColor} />
            </Button>
          ) : (
            ""
          )}
        </div>
        {subText && (
          <h3
            className="OverviewSectionContainer__SubHead"
            style={{ color: subTextColor }}
          >
            {subText}
          </h3>
        )}
      </div>

      <div className="OverviewSectionContainer__Body">{children}</div>
    </div>
  );
};

export default TabSectionCard;

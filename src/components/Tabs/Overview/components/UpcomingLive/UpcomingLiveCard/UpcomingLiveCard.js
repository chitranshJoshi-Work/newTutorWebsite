import Image from "next/image";
import Random from "@/images/Vector.svg";
import { useEffect, useState } from "react";
import { directDeepLink } from "@/root/src/common/deepLinks";
import { useTranslation } from "react-i18next";

const UpcomingLiveCard = ({ upcomingClass, index, deeplink }) => {
  const { t } = useTranslation();
  const [disableButton, setDisableButton] = useState(true);

  useEffect(() => {
    console.log("SETTIMEOUT__BUTTONSTATE");
    if (index === 0 && upcomingClass?.scheduleTime) {
      if (upcomingClass?.scheduleTime - new Date().getTime() <= 86400000) {
        setTimeout(() => {
          setDisableButton(false);
        }, upcomingClass?.scheduleTime - new Date().getTime());
      }
    }
    console.log("SETTIMEOUT__BUTTONSTATE", disableButton);
  }, [index, upcomingClass?.scheduleTime]);

  const classTime = new Date(upcomingClass?.scheduleTime)?.toLocaleString(
    "en-US",
    {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    }
  );

  const date = new Date(upcomingClass.scheduleTime);
  const upcomingClassDate = date.getDate();
  const upcomingClassMonth = date.toLocaleString("en-us", { month: "short" });

  return (
    <div className="UpcomingLiveCard">
      <div className="UpcomingLiveCard__image">
        <Image src={Random} alt="like" />
        <div className="UpcomingLiveCard__image__date">
          <p>{upcomingClassDate}</p>
          <p>{upcomingClassMonth}</p>
        </div>
      </div>
      <div className="UpcomingLiveCard__item1">
        <p className="UpcomingLiveCard__item1__para">{classTime}</p>
        <div className="UpcomingLiveCard__item1__content">
          <p className="UpcomingLiveCard__item1__content__para1">
            {upcomingClass.title}
          </p>
          <button
            className="UpcomingLiveCard__item1__content__para2"
            disabled={disableButton}
            onClick={directDeepLink(deeplink, "SOURCE_WEBVIEW")}
          >
            {t(
              "components.bottomSheets.components.upcomingLiveCard.upcomingLiveCard.joinClass",
              "Join Class"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpcomingLiveCard;

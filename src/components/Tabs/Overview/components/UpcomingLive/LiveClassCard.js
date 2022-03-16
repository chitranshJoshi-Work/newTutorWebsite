import { directDeepLink } from "@/root/src/common/deepLinks";
import { getAwsAssets } from "@/root/src/utils";
import { t } from "i18next";
import Image from "next/image";
import React from "react";
import { useEffect, useState } from "react";

function LiveClassCard({
  liveEmblem,
  scheduleEmblem,
  trialEmblem,
  title,
  time,
  scheduleTime,
  index,
  deeplink,
}) {
  const [disableButton, setDisableButton] = useState(true);

  useEffect(() => {
    if (index === 0 && scheduleTime) {
      if (scheduleTime - new Date().getTime() <= 86400000) {
        setTimeout(() => {
          setDisableButton(false);
        }, scheduleTime - new Date().getTime());
      }
    }
  }, [index, scheduleTime]);

  let emblems = [
    disableButton ? scheduleEmblem : liveEmblem,
    ...(trialEmblem ? [trialEmblem] : []),
  ];

  // console.log("SETTIMEOUT--deeplink", deeplink);

  return (
    <div className="LiveClassCard">
      <div className="LiveClassCard__Tags">
        {emblems?.map((emblem, i) => (
          <span key={i} className="LiveClassCard__Tags--Emblem">
            <Image
              src={emblem?.icon}
              alt="X"
              width="70px"
              height="16px"
              layout="fixed"
              objectFit="cover"
            />
            {/* {emblem?.text} */}
          </span>
        ))}
      </div>
      <div className="LiveClassCard__Title">{title}</div>
      <div className="LiveClassCard__Bottom">
        <div className="LiveClassCard__Bottom--Time">
          <Image
            src={getAwsAssets("Clock.svg", "Overview")}
            alt="X"
            width="12px"
            height="12px"
            layout="fixed"
            objectFit="cover"
          />
          <span>{time}</span>
        </div>
        <button
          className="LiveClassCard__Bottom--CTA"
          disabled={disableButton}
          onClick={directDeepLink(deeplink, "SOURCE_WEBVIEW")}
        >
          {t(
            "components.Tabs.Overview.components.UpcomingLive.LiveClassCard.join",
            "Join Class"
          )}
        </button>
      </div>
    </div>
  );
}

export default LiveClassCard;

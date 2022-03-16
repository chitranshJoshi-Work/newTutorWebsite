import { getAwsAssets } from "@/utils/index";
import { t } from "i18next";
import Image from "next/image";
import React from "react";
import styles from "../../styles/NoContentScreen.module.scss";

const NoContentScreen = () => {
  return (
    <div className={styles.noContentScreen}>
      <Image
        src={getAwsAssets("booksStacked.svg", "content")}
        alt="noContentScreenThumbnail"
        height={140}
        width={140}
      />
      <h4>
        {t(
          "components.tabs.content.components.contentList.noContentScreen.noContentScreenHeading",
          "No content here!"
        )}
      </h4>
      <p>
        {t(
          "components.tabs.content.components.contentList.noContentScreen.noContentScreenPara",
          "Looks like we created this folder in a hurry! Go back and continue learning."
        )}
      </p>
    </div>
  );
};

export default NoContentScreen;

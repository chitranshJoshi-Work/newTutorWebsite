import { getAwsAssets } from "@/root/src/utils";
import { t } from "i18next";
import Image from "next/image";
import React from "react";
import styles from "../../styles/ContentList.module.scss";

const TestContentCases = ({ content }) => {
  // if (content?.isLocked && content?.isScheduled && content?.scheduledFromDate && content?.scheduledToDate) {
  // }
  // else if (content?.isLocked && content?.isScheduled) {
  //   // * Locked by your tutor
  // }
  return content?.isLocked && content?.isScheduled ? (
    <React.Fragment>
      {content?.scheduledFromDateText && content?.scheduledToDateText && (
        <p style={{ width: "110%" }}>
          {content?.scheduledFromDateText} - {content?.scheduledToDateText}
        </p>
      )}
    </React.Fragment>
  ) : (
    <React.Fragment>
      {content?.scoredMarks || content?.scoredMarks === 0 ? (
        <div className={styles.contentList__item__content__marks}>
          <Image
            src={getAwsAssets("starIcon.svg", "content")}
            alt="starIcon"
            height={16}
            width={16}
          />
          <p>
            {t(
              "components.tabs.content.components.contentList.testContentCases.marksText",
              "Marks"
            )}
            : <span>{content?.scoredMarks}</span>/{content?.maxMarks}
          </p>
        </div>
      ) : (
        <React.Fragment>
          {!content?.isLocked && content?.numberOfAttemptsRemaining ? (
            <div className={styles.contentList__item__content__attempts}>
              {t(
                "components.tabs.content.components.contentList.testContentCases.attemptsAllowedText",
                "Attempts allowed"
              )}
              : <span>{content?.numberOfAttemptsRemaining}</span>
            </div>
          ) : (
            <div className={styles.contentList__item__content__attempts}>
              <i>
                *{" "}
                {t(
                  "components.tabs.content.components.contentList.testContentCases.submittedText",
                  "Submitted"
                )}
              </i>
            </div>
          )}
          {!content?.isLocked && content?.totalAttempts == -1 && (
            <div className={styles.contentList__item__content__attempts}>
              {t(
                "components.tabs.content.components.contentList.testContentCases.attemptsAllowedText",
                "Attempts allowed"
              )}
              :{" "}
              <span>
                {t(
                  "components.tabs.content.components.contentList.testContentCases.unlimitedText",
                  "Unlimited"
                )}
              </span>
            </div>
          )}
          {content?.isLocked && content?.isScheduled ? (
            <div className={styles.contentList__item__content__attempts}>
              <i>
                *{" "}
                {t(
                  "components.tabs.content.components.contentList.testContentCases.tutorLockedText",
                  "Locked by your tutor"
                )}
              </i>
            </div>
          ) : null}
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default TestContentCases;

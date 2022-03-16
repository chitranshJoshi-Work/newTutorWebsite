import React from "react";
import Button from "@/UIElements/Button";
import styles from "../../styles/TestStatsCard.module.scss";
import Image from "next/image";
import { getAwsAssets } from "@/root/src/utils";
import { t } from "i18next";
import { CONTENT_DEEPLINK_ACTIONS } from "../../store/constants";
import { hitContentDeeplinkOld } from "../../helpers/hitContentDeeplink";

const TestStatsCard = ({
  cardHeading,
  scoredMarks,
  maxMarks,
  maxScoredMarks,
  timeTaken,
  avgTimeTaken,
  rank,
  projectedRank,
  projectedRankDiff,
  projectedRankUp,
  yourGrade,
  solutionUrl,
  solutionUrlText,
}) => {
  // VIEW TEST REPORT DEEPLINK HIT
  const viewTestReportDeeplink = (solutionUrl) => {
    const paramObj = {
      paramOne: solutionUrl,
    };
    hitContentDeeplinkOld(CONTENT_DEEPLINK_ACTIONS.UTIL_TEST, paramObj);
    // window?.mobile?.onDeeplinkExecutedV2(deeplinkObject);
  };

  return (
    <div className={styles.testStatsCard}>
      <div className={styles.testStatsCard__separator}></div>
      {scoredMarks || scoredMarks === 0 ? null : (
        <div className={styles.testStatsCard__evalLabel}>
          {t(
            "components.tabs.content.components.testStats.testStatsCard.resultInEvaluationText",
            "Result will be shown after your answers are evaluated"
          )}
        </div>
      )}
      {cardHeading && (
        <h1 className={styles.testStatsCard__heading}>{cardHeading}</h1>
      )}
      <div className={styles.testStatsCard__card}>
        {scoredMarks || scoredMarks === 0 ? (
          <div className={styles.testStatsCard__card__cardDetails}>
            {(scoredMarks || scoredMarks === 0) && (
              <div className={styles.testStatsCard__card__cardDetails__item}>
                <div
                  className={
                    styles.testStatsCard__card__cardDetails__item__title
                  }
                >
                  {t(
                    "components.tabs.content.components.testStats.testStatsCard.yourScoreText",
                    "Your score"
                  )}
                </div>
                <div
                  className={
                    styles.testStatsCard__card__cardDetails__item__content
                  }
                >
                  {scoredMarks}
                  <span>/{maxMarks}</span>
                </div>
              </div>
            )}
            {maxScoredMarks && (
              <div className={styles.testStatsCard__card__cardDetails__item}>
                <div
                  className={
                    styles.testStatsCard__card__cardDetails__item__title
                  }
                >
                  {t(
                    "components.tabs.content.components.testStats.testStatsCard.highestScoreText",
                    "Highest score"
                  )}
                </div>
                <div
                  className={
                    styles.testStatsCard__card__cardDetails__item__content
                  }
                >
                  {maxScoredMarks}
                  <span>/{maxMarks}</span>
                </div>
              </div>
            )}
            {timeTaken && (
              <div className={styles.testStatsCard__card__cardDetails__item}>
                <div
                  className={
                    styles.testStatsCard__card__cardDetails__item__title
                  }
                >
                  {t(
                    "components.tabs.content.components.testStats.testStatsCard.timeTakenText",
                    "Time taken"
                  )}
                </div>
                <div
                  className={
                    styles.testStatsCard__card__cardDetails__item__content
                  }
                >
                  {timeTaken}
                </div>
              </div>
            )}
            {avgTimeTaken && (
              <div className={styles.testStatsCard__card__cardDetails__item}>
                <div
                  className={
                    styles.testStatsCard__card__cardDetails__item__title
                  }
                >
                  {t(
                    "components.tabs.content.components.testStats.testStatsCard.avgTimeTakenText",
                    "Avg. time taken"
                  )}
                </div>
                <div
                  className={
                    styles.testStatsCard__card__cardDetails__item__content
                  }
                >
                  {avgTimeTaken}
                </div>
              </div>
            )}
            {rank && (
              <div className={styles.testStatsCard__card__cardDetails__item}>
                <div
                  className={
                    styles.testStatsCard__card__cardDetails__item__title
                  }
                >
                  {t(
                    "components.tabs.content.components.testStats.testStatsCard.yourRankText",
                    "Your rank"
                  )}
                </div>
                <div
                  className={
                    styles.testStatsCard__card__cardDetails__item__content
                  }
                >
                  {rank}
                </div>
              </div>
            )}
            {projectedRank && (
              <div className={styles.testStatsCard__card__cardDetails__item}>
                <div
                  className={
                    styles.testStatsCard__card__cardDetails__item__title
                  }
                >
                  {t(
                    "components.tabs.content.components.testStats.testStatsCard.projectedRankText",
                    "Projected rank"
                  )}
                </div>
                <div
                  className={
                    styles.testStatsCard__card__cardDetails__item__content
                  }
                >
                  {projectedRank} <span>{projectedRankDiff}</span>{" "}
                  <Image
                    src={getAwsAssets(
                      projectedRankUp
                        ? "greenTriangleUp.svg"
                        : "redTriangleDown.svg",
                      "content"
                    )}
                    alt="projectedRankIcon"
                    width={12}
                    height={10}
                  />
                </div>
              </div>
            )}
            {yourGrade && (
              <div className={styles.testStatsCard__card__cardDetails__item}>
                <div
                  className={
                    styles.testStatsCard__card__cardDetails__item__title
                  }
                >
                  {t(
                    "components.tabs.content.components.testStats.testStatsCard.yourGradeText",
                    "Your grade"
                  )}
                </div>
                <div
                  className={
                    styles.testStatsCard__card__cardDetails__item__content
                  }
                >
                  {yourGrade}
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className={styles.testStatsCard__card__testSubmitted}>
            <div
              className={styles.testStatsCard__card__testSubmitted__tickIcon}
            >
              <Image
                src={getAwsAssets("tickIcon.svg", "content")}
                alt="tickIcon"
                height={22}
                width={17}
              />
            </div>
            <h4>
              {t(
                "components.tabs.content.components.testStats.testStatsCard.answersSubmittedHeading",
                "Answers Submitted"
              )}
            </h4>
            <p>
              {t(
                "components.tabs.content.components.testStats.testStatsCard.answersSubmittedPara",
                "Your answers for this test have been submitted successfully"
              )}
            </p>
            <p>
              {t(
                "components.tabs.content.components.testStats.testStatsCard.submittedOnText",
                "Submitted on"
              )}{" "}
              15 Sep 2021, 05:30 PM
            </p>
          </div>
        )}
        {solutionUrl && solutionUrlText ? (
          <div className={styles.testStatsCard__card__button}>
            <Button
              filled
              padding6
              onClick={() => viewTestReportDeeplink(solutionUrl)}
            >
              {solutionUrlText}
            </Button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default TestStatsCard;

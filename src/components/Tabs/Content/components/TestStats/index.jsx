import Button from "@/UIElements/Button";
import { getAwsAssets } from "@/root/src/utils";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCourseContentTestStatsAction } from "../../store/actions";
import styles from "../../styles/TestStats.module.scss";
import TestStatsCard from "./TestStatsCard";
import TestStatsShimmer from "./TestStatsShimmer";
import { setPageHeadingAction } from "@/root/src/layout/store/actions";
import { t } from "i18next";

const TestStats = () => {
  // NEXTJS ROUTER
  const router = useRouter();

  // REDUX DISPATCH
  const dispatch = useDispatch();

  // FETCHING STATES FROM REDUCER
  const testStats = useSelector(
    (state) => state?.courseContentReducer?.apiResGET_COURSE_CONTENT_TEST_STATS
  );
  const testStatsLoading = useSelector(
    (state) =>
      state?.courseContentReducer?.loadingStateGET_COURSE_CONTENT_TEST_STATS
  );

  // UPDATING PAGE TITLE ON TEST NAME CHANGE
  React.useEffect(() => {
    if (testStats?.testName) {
      dispatch(setPageHeadingAction(testStats?.testName));
    }
    return () => {
      dispatch(setPageHeadingAction());
    };
  }, [testStats?.testName]);

  // FUNCTION TO FETCH TEST STATS
  const fetchTestStats = () => {
    dispatch(
      getCourseContentTestStatsAction({
        courseId: router?.query?.courseId,
        testId: router?.query?.testId,
        contentId: router?.query?.contentId,
      })
    );
  };

  // FETCHING TEST STATS
  React.useEffect(() => {
    // if courseId testId contentId
    // if first time ka sochna hai // TODO
    if (
      router?.query?.courseId &&
      router?.query?.testId &&
      router?.query?.contentId
    ) {
      fetchTestStats();
    }
  }, [router?.query?.contentId]);

  // FUNCTION TO REATTEMPT TEST
  const handleAttemptTest = (attemptUrl) => {
    alert("Reattempt test");
    // handleViewContentItem(content);
  };

  return (
    <div className={styles.testStats}>
      {testStatsLoading ? (
        <TestStatsShimmer />
      ) : (
        <React.Fragment>
          <div className={styles.testStats__header}>
            {testStats?.testThumbnail && (
              <div className={styles.testStats__header__thumbnail}>
                <Image
                  src={testStats?.testThumbnail}
                  alt="thumbnail"
                  width={38}
                  height={38}
                />
              </div>
            )}
            <div className={styles.testStats__header__title}>
              {testStats?.testName}
            </div>
            {testStats?.attemptUrl && (
              <div className={styles.testStats__header__button}>
                <Button
                  small
                  outline
                  onClick={() => handleAttemptTest(testStats?.attemptUrl)}
                >
                  {t(
                    "components.tabs.content.components.testStats.index.reattemptText",
                    "Reattempt"
                  )}
                </Button>
              </div>
            )}
          </div>
          {testStats?.firstAttempt ? (
            <TestStatsCard
              cardHeading={t(
                "components.tabs.content.components.testStats.index.firstAttemptText",
                "First Attempt"
              )}
              scoredMarks={testStats?.firstAttempt?.scoredMarks}
              maxMarks={testStats?.firstAttempt?.maxMarks}
              maxScoredMarks={testStats?.firstAttempt?.maxScoredMarks}
              timeTaken={testStats?.firstAttempt?.timeTaken}
              avgTimeTaken={testStats?.firstAttempt?.avgTimeTaken}
              rank={testStats?.firstAttempt?.rank}
              yourGrade={testStats?.firstAttempt?.yourGrade}
            />
          ) : null}
          {testStats?.lastAttempt ? (
            <TestStatsCard
              cardHeading={t(
                "components.tabs.content.components.testStats.index.latestAttemptText",
                "Latest Attempt"
              )}
              scoredMarks={testStats?.lastAttempt?.scoredMarks}
              maxMarks={testStats?.lastAttempt?.maxMarks}
              timeTaken={testStats?.lastAttempt?.timeTaken}
              projectedRank={testStats.lastAttempt.rank}
              projectedRankDiff={Math.abs(
                testStats.lastAttempt.rank - testStats.firstAttempt.rank
              )}
              projectedRankUp={
                testStats.lastAttempt.rank < testStats.firstAttempt.rank
              }
              yourGrade={testStats?.lastAttempt?.yourGrade}
            />
          ) : null}
          {testStats?.attemptsLeft ? (
            <div className={styles.testStats__attemptsLeft}>
              <Image
                src={getAwsAssets("cautionIcon.svg", "content")}
                height={16}
                width={16}
              />
              <p>
                {t(
                  "components.tabs.content.components.testStats.index.youHaveText",
                  "You have"
                )}{" "}
                {testStats?.attemptsLeft}{" "}
                {t(
                  "components.tabs.content.components.testStats.index.moreAttemptsLeftText",
                  "more attempts left"
                )}
              </p>
            </div>
          ) : null}
        </React.Fragment>
      )}
    </div>
  );
};

export default TestStats;

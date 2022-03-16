import React from "react";
import styles from "../../../styles/FreeContentPage.module.scss";
import { useRouter } from "next/router";
import { wrapper } from "@/store/index";

import {
  getFreeCourseContentAction,
  getFreeCourseContentLoadMoreAction,
} from "../../../store/actions";
import { useSelector, useDispatch } from "react-redux";
import ContentList from "../../ContentList";
import { CONTENT_LIMIT } from "../../../store/constants";
import { setPageHeadingAction } from "@/root/src/layout/store/actions";

const FreeContentPage = () => {
  // NEXTJS ROUTER
  const router = useRouter();

  // REDUX DISPATCH
  const dispatch = useDispatch();

  // FETCHING STATES FROM REDUCER
  const contentList = useSelector(
    (state) => state?.courseContentReducer?.apiResGET_FREE_COURSE_CONTENT
  );
  const contentLoading = useSelector(
    (state) => state?.courseContentReducer?.loadingStateGET_FREE_COURSE_CONTENT
  );
  const contentHasMore = useSelector(
    (state) => state?.courseContentReducer?.hasMoreGET_FREE_COURSE_CONTENT
  );
  const contentListLastOffset = useSelector(
    (state) => state?.courseContentReducer?.lastOffsetGET_FREE_COURSE_CONTENT
  );
  const contentListLength = useSelector(
    (state) => state?.courseContentReducer?.lenGET_FREE_COURSE_CONTENT
  );

  // FETCHING CONTENT WHEN COURSE ID CHANGES
  React.useEffect(() => {
    router?.query?.courseId &&
      dispatch(
        getFreeCourseContentAction({
          courseId: router?.query?.courseId,
          limit: CONTENT_LIMIT,
        })
      );
  }, [router?.query?.courseId, router?.asPath]);

  // HANDLE LOAD MORE CONTENT WHEN USER REACHES END OF LIST
  const handleLoadMoreContent = () => {
    dispatch(
      getFreeCourseContentLoadMoreAction({
        courseId: router?.query?.courseId,
        offset: contentListLastOffset + CONTENT_LIMIT,
        limit: CONTENT_LIMIT,
      })
    );
  };

  return (
    <div className={styles.freeContentPage}>
      <ContentList
        contentList={contentList}
        contentListLength={contentListLength}
        contentLoading={contentLoading}
        contentHasMore={contentHasMore}
        handleLoadMoreContent={handleLoadMoreContent}
      />
    </div>
  );
};

export default FreeContentPage;

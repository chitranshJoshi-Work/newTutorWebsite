// import ContentHome from "@/tabs/Content/components/ContentHome";
import React from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { setPageHeadingAction } from "@/root/src/layout/store/actions";

const ContentHome = dynamic(() =>
  import("@/tabs/Content/components/ContentHome")
);

const CourseFolder = () => {
  // NEXTJS ROUTER
  const router = useRouter();

  // REDUX DISPATCH
  const dispatch = useDispatch();

  // FETCHING CURRENT FOLDER NAME FROM REDUCER
  const currentFolderName = useSelector(
    (state) =>
      state?.courseContentReducer?.currentFolderGET_COURSE_CONTENT?.folderName
  );

  // SETTTING PAGE TITLE ON PAGE MOUNT AND CLEARING ON UNMOUNT
  React.useEffect(() => {
    dispatch(setPageHeadingAction(currentFolderName || ""));
    return () => {
      dispatch(setPageHeadingAction());
    };
  }, [currentFolderName]);

  return <ContentHome folderId={router?.query?.folderId} folderRoute />;
};

CourseFolder.getLayoutProps = () => ({
  accent: true,
  noBuyNow: true,
  blockHeader: true,
});

export const getServerSideProps = async (context) => {
  // REDIRECTING TO CONTENT TAB IF FOLDER ID IS ZERO
  if (context?.params?.folderId == 0) {
    return {
      redirect: {
        permanent: true,
        destination: `/${context.params.courseId}/2`,
      },
    };
  } else return { props: {} };
};

export default CourseFolder;

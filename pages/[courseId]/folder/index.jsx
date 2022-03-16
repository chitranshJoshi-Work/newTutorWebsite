import { useRouter } from "next/router";
import React from "react";

const FolderHome = () => {
  // NEXTJS ROUTER
  const router = useRouter();

  return <h1>CourseId:{router.query.courseId}</h1>;
};

export const getServerSideProps = async (context) => {
  return {
    redirect: {
      permanent: true,
      destination: `/${context.params.courseId}/2`,
    },
  };
};

export default FolderHome;

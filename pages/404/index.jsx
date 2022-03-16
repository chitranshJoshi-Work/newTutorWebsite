// import ErrorFallbacks from "@/components/ErrorFallbacks";
import React from "react";
import dynamic from "next/dynamic";

const ErrorFallbacks = dynamic(() => import("@/components/ErrorFallbacks"));

const PageNotFound = () => {
  return <ErrorFallbacks statusCode={404} />;
};

export default PageNotFound;

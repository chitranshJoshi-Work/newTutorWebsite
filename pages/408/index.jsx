// import ErrorFallbacks from "@/components/ErrorFallbacks";
import React from "react";
import dynamic from "next/dynamic";

const ErrorFallbacks = dynamic(() => import("@/components/ErrorFallbacks"));

const NoInternetPage = () => {
  return <ErrorFallbacks statusCode={500} />;
};

export default NoInternetPage;

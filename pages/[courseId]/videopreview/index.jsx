// import VideoPreview from "@/tabs/Content/components/VideoPreview";
import React from "react";
import dynamic from "next/dynamic";

const VideoPreview = dynamic(() =>
  import("@/tabs/Content/components/VideoPreview")
);

const VideoPreviewPage = () => {
  return <VideoPreview />;
};

// DEFINING LAYOUT PROPERTIES FOR THIS PAGE
VideoPreviewPage.getLayoutProps = () => ({
  blockHeader: true,
});

export default VideoPreviewPage;

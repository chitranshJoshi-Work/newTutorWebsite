import React, { useRef, useEffect } from "react";

function InfiniteScroll({
  loading,
  loader,
  children,
  hasMore,
  loadMore,
  threshold,
  //   lastRow
}) {
  const contentRef = useRef(null);

  const layoutContent = document.querySelector("#layoutContent");

  useEffect(() => {
    layoutContent.addEventListener("scroll", function () {
      console.log(
        "INFINITESCROLL",
        layoutContent?.scrollHeight -
          layoutContent?.offsetHeight -
          layoutContent?.scrollTop <=
          threshold
      );
      getMore();
    });
  }, [layoutContent]);

  const getMore = () => {
    // if (!loading && hasMore) {
    if (
      layoutContent?.scrollHeight -
        layoutContent?.offsetHeight -
        layoutContent?.scrollTop <=
      threshold
    ) {
      //   alert("hello");
      loadMore && loadMore();
      //   }
    }
  };

  return (
    <div className="InfiniteScroll" ref={contentRef}>
      {children}
      {loading ? <div className="InfiniteScroll__Loading">{loader}</div> : null}
    </div>
  );
}

InfiniteScroll.defaultProps = {
  threshold: 1,
  loader: <p>Loading...</p>,
};

export default InfiniteScroll;

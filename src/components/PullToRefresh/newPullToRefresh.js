// import React, { useRef, useEffect } from 'react';
// import { isTreeScrollable } from './isScrollable';

// const PullToRefresh = ({
//   isPullable = true,
//   canFetchMore = false,
//   onRefresh,
//   onFetchMore,
//   refreshingContent = <div />,
//   pullingContent = <div />,
//   children,
//   pullDownThreshold = 67,
//   resistance = 1,
//   fetchMoreThreshold = 100,
//   maxPullDownDistance = 95, // max distance to scroll to trigger refresh
//   backgroundColor,
//   className = '',
// }) => {
//   const containerRef = useRef(null);
//   const childrenRef = useRef(null);
//   const pullDownRef = useRef(null);
//   const fetchMoreRef = useRef(null);
//   let pullToRefreshThresholdBreached = false;
//   let fetchMoreTresholdBreached = false; // if true, fetchMore loader is displayed
//   let isDragging = false;
//   let startY = 0;
//   let currentY = 0;

//   useEffect(() => {
//     if (!isPullable || !childrenRef || !childrenRef.current) return;
//     const childrenEl = childrenRef.current;
//     childrenEl.addEventListener('touchstart', onTouchStart, { passive: true });
//     childrenEl.addEventListener('mousedown', onTouchStart);
//     childrenEl.addEventListener('touchmove', onTouchMove, { passive: false });
//     childrenEl.addEventListener('mousemove', onTouchMove);
//     window.addEventListener('scroll', onScroll);
//     childrenEl.addEventListener('touchend', onEnd);
//     childrenEl.addEventListener('mouseup', onEnd);
//     document.body.addEventListener('mouseleave', onEnd);

//     return () => {
//       childrenEl.removeEventListener('touchstart', onTouchStart);
//       childrenEl.removeEventListener('mousedown', onTouchStart);
//       childrenEl.removeEventListener('touchmove', onTouchMove);
//       childrenEl.removeEventListener('mousemove', onTouchMove);
//       window.removeEventListener('scroll', onScroll);
//       childrenEl.removeEventListener('touchend', onEnd);
//       childrenEl.removeEventListener('mouseup', onEnd);
//       document.body.removeEventListener('mouseleave', onEnd);
//     };
//   }, [
//     children,
//     isPullable,
//     onRefresh,
//     pullDownThreshold,
//     maxPullDownDistance,
//     canFetchMore,
//     fetchMoreThreshold,
//   ]);

//   /**
//    * Check onMount / canFetchMore becomes true
//    *  if fetchMoreThreshold is already breached
//    */
//   useEffect(() => {
//     /**
//      * Check if it is already in fetching more state
//      */
//     if (!containerRef?.current) return;
//     const isAlreadyFetchingMore = containerRef.current.classList.contains(
//       'ptr--fetch-more-treshold-breached'
//     );
//     if (isAlreadyFetchingMore) return;
//     /**
//      * Proceed
//      */
//     if (canFetchMore && getScrollToBottomValue() < fetchMoreThreshold && onFetchMore) {
//       containerRef.current.classList.add('ptr--fetch-more-treshold-breached');
//       fetchMoreTresholdBreached = true;
//       onFetchMore().then(initContainer).catch(initContainer);
//     }
//   }, [canFetchMore, children]);

//   /**
//    * Returns distance to bottom of the container
//    */
//   const getScrollToBottomValue = () => {
//     if (!childrenRef || !childrenRef.current) return -1;
//     const scrollTop = window.scrollY; // is the pixels hidden in top due to the scroll. With no scroll its value is 0.
//     const scrollHeight = childrenRef.current.scrollHeight; // is the pixels of the whole container
//     return scrollHeight - scrollTop - window.innerHeight;
//   };

//   const initContainer = () => {
//     requestAnimationFrame(() => {
//       /**
//        * Reset Styles
//        */
//       if (childrenRef.current) {
//         childrenRef.current.style.overflowX = 'hidden';
//         childrenRef.current.style.overflowY = 'auto';
//         childrenRef.current.style.transform = `translate(0px, 0px)`;
//       }
//       if (pullDownRef.current) {
//         pullDownRef.current.style.opacity = '0';
//       }
//       if (containerRef.current) {
//         containerRef.current.classList.remove('ptr--pull-down-treshold-breached');
//         containerRef.current.classList.remove('ptr--dragging');
//         containerRef.current.classList.remove('ptr--fetch-more-treshold-breached');
//       }

//       if (pullToRefreshThresholdBreached) pullToRefreshThresholdBreached = false;
//       if (fetchMoreTresholdBreached) fetchMoreTresholdBreached = false;
//     });
//   };

//   const onTouchStart = (e) => {
//     isDragging = false;
//     if (e instanceof MouseEvent) {
//       startY = e.pageY;
//     }
//     if (window.TouchEvent && e instanceof TouchEvent) {
//       startY = e.touches[0].pageY;
//     }
//     currentY = startY;
//     // Check if element can be scrolled
//     if (e.type === 'touchstart' && isTreeScrollable(e.target, DIRECTION.UP)) {
//       return;
//     }
//     // Top non visible so cancel
//     if (childrenRef.current!.getBoundingClientRect().top < 0) {
//       return;
//     }
//     isDragging = true;
//   };

//   const onTouchMove = (e) => {
//     if (!isDragging) {
//       return;
//     }

//     if (window.TouchEvent && e instanceof TouchEvent) {
//       currentY = e.touches[0].pageY;
//     } else {
//       currentY = (e).pageY;
//     }

//     containerRef.current!.classList.add('ptr--dragging');

//     if (currentY < startY) {
//       isDragging = false;
//       return;
//     }

//     if (e.cancelable) {
//       e.preventDefault();
//     }

//     const yDistanceMoved = Math.min((currentY - startY) / resistance, maxPullDownDistance);

//     // Limit to trigger refresh has been breached
//     if (yDistanceMoved >= pullDownThreshold) {
//       isDragging = true;
//       pullToRefreshThresholdBreached = true;
//       containerRef.current!.classList.remove('ptr--dragging');
//       containerRef.current!.classList.add('ptr--pull-down-treshold-breached');
//     }

//     // maxPullDownDistance breached, stop the animation
//     if (yDistanceMoved >= maxPullDownDistance) {
//       return;
//     }
//     pullDownRef.current!.style.opacity = ((yDistanceMoved) / 65).toString();
//     childrenRef.current!.style.overflow = 'visible';
//     childrenRef.current!.style.transform = `translate(0px, ${yDistanceMoved}px)`;
//     pullDownRef.current!.style.visibility = 'visible';
//   };

//   const onScroll = (e) => {
//     /**
//      * Check if component has already called onFetchMore
//      */
//     if (fetchMoreTresholdBreached) return;
//     /**
//      * Check if user breached fetchMoreThreshold
//      */
//     if (canFetchMore && getScrollToBottomValue() < fetchMoreThreshold && onFetchMore) {
//       fetchMoreTresholdBreached = true;
//       containerRef.current!.classList.add('ptr--fetch-more-treshold-breached');
//       onFetchMore().then(initContainer).catch(initContainer);
//     }
//   };

//   const onEnd = () => {
//     isDragging = false;
//     startY = 0;
//     currentY = 0;

//     // Container has not been dragged enough, put it back to it's initial state
//     if (!pullToRefreshThresholdBreached) {
//       if (pullDownRef.current) pullDownRef.current.style.visibility = 'hidden';
//       initContainer();
//       return;
//     }

//     if (childrenRef.current) {
//       childrenRef.current.style.overflow = 'visible';
//       childrenRef.current.style.transform = `translate(0px, ${pullDownThreshold}px)`;
//     }
//     onRefresh().then(initContainer).catch(initContainer);
//   };

//   return (
//     <div className={`ptr ${className}`} style={{ backgroundColor }} ref={containerRef}>
//       <div className="ptr__pull-down" ref={pullDownRef}>
//         <div className="ptr__loader ptr__pull-down--loading">{refreshingContent}</div>
//         <div className="ptr__pull-down--pull-more">{pullingContent}</div>
//       </div>
//       <div className="ptr__children" ref={childrenRef}>
//         {children}
//         <div className="ptr__fetch-more" ref={fetchMoreRef}>
//           <div className="ptr__loader ptr__fetch-more--loading">{refreshingContent}</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PullToRefresh;

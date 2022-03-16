import React, { useState, useEffect, useRef, useCallback } from "react";
const pullDownThreshold = 67;
const resistance = 18;
const maxPullDownDistance = 90;
import { useDispatch, useSelector } from "react-redux";
import { getCourseDetailsAction } from "../tabs/Overview/store/actions";
import usePrevious from "@/hooks/usePrevious";
import { useRouter } from "next/router";
const One = () => {
  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);
  const router = useRouter();
  const startTouchPoint = useRef();
  let overviewScreen;
  let a = 0;
  let bottomStates = useSelector((state) => state?.bottomSheetReducer);

  // console.log(bottomStates, "bootom", "18");
  // console.log(overviewScreen, "overViewScreen,--------------------");
  const refreshContainerRef = useRef();
  const spinnerRef = useRef();
  //   const refreshContainer = document.querySelector(".refresh-container");
  //   const spinner = document.querySelector(".spinner");
  let bottomStatesValues = Object.values(bottomStates);
  let isLoading = false;
  let pStartY = 0;
  let pCurrentY = 0;
  const dispatch = useDispatch();
  const loadInit = () => {
    refreshContainerRef?.current?.classList?.add("load-init");
    // setClassName("load-init");
    isLoading = true;
  };

  const swipeStart = (e) => {
    overviewScreen;
    // forceUpdate();
    // console.log(bottomStatesValues, "bootom", "9", "swipestart");
    // console.log(overviewScreen?.getBoundingClientRect()?.top);
    startTouchPoint.current = overviewScreen?.scrollTop;
    if (overviewScreen?.scrollTop > 0) return;
    if (bottomStatesValues?.includes(true)) return;
    if (!isLoading) {
      let touch = e.targetTouches[0];
      pStartY = touch.screenY;
    }
  };

  const swipe = (e) => {
    // console.log(a, "previous");
    console.log(
      //   overviewScreen?.getBoundingClientRect(),
      //   overviewScreen?.scrollTop
      // );
      // console.log(startTouchPoint.current, "startTouchPoint.current");
      // console.log(
      bottomStatesValues,
      "bootom",
      bottomStates,
      bottomStatesValues?.includes(true)
    );
    if (overviewScreen?.scrollTop > 0) return;
    if (startTouchPoint?.current > 0) return;
    if (bottomStatesValues?.includes(true)) {
      // console.log(bottomStates);
      // alert(bottomStatesValues?.includes(true));
      return;
    }
    // console.log("bootom", false, "after return");
    if (!isLoading) {
      let touch = e.changedTouches[0];
      pCurrentY = touch.screenY;
      console.log(touch);
      let changeY = pStartY < pCurrentY ? Math.abs(pStartY - pCurrentY) : 0;
      console.log(pCurrentY, pStartY);
      const yDistanceMoved = Math.min(
        (pCurrentY - pStartY) / resistance,
        maxPullDownDistance
      );
      // console.log(yDistanceMoved, "------------**********************",pullDownThreshold);
      // console.log(changeY, yDistanceMoved);

      if (
        changeY < 260 &&
        changeY > 0 &&
        yDistanceMoved > 6 &&
        spinnerRef?.current
      ) {
        // refreshContainerRef.current.style.marginTop = `${changeY/3}px`;
        // spinnerRef.current.style.transform = `rotate(${(changeY/3) * 13.5}deg)`;
        spinnerRef.current.style.opacity = `${changeY / 90}`;

        if (changeY <= 100) {
          // console.log("100 1", `${changeY / 28}px`);
          refreshContainerRef.current.style.marginTop = `${changeY / 28}px`;
          spinnerRef.current.style.transform = `rotate(${changeY * 13.5}deg)`;
        }
        if (changeY >= 110) {
          // console.log("100 2", `${changeY / 28}px`);
          // console.log(`${changeY / 6}px`);
          refreshContainerRef.current.style.marginTop = `${changeY / 30}px`;
          spinnerRef.current.style.transform = `rotate(${changeY * 13.5}deg)`;
        }
        if (changeY >= 120) {
          // console.log("100 3", `${changeY / 24}px`);
          refreshContainerRef.current.style.marginTop = `${changeY / 24}px`;
          spinnerRef.current.style.transform = `rotate(${changeY * 13.5}deg)`;
        }
        if (changeY >= 130) {
          // console.log("100 4", `${changeY / 10}px`);
          refreshContainerRef.current.style.marginTop = `${changeY / 20}px`;
          spinnerRef.current.style.transform = `rotate(${changeY * 13.5}deg)`;
        }
        if (changeY >= 140) {
          // console.log("100 5", `${changeY / 8}px`);
          refreshContainerRef.current.style.marginTop = `${changeY / 17}px`;
          spinnerRef.current.style.transform = `rotate(${changeY * 13.5}deg)`;
        }
        if (changeY >= 150) {
          // console.log("100 6", `${changeY / 6}px`);
          refreshContainerRef.current.style.marginTop = `${changeY / 15}px`;
          spinnerRef.current.style.transform = `rotate(${changeY * 13.5}deg)`;
        }
        if (changeY >= 160) {
          // console.log("100 7", `${changeY / 4.7}px`);
          refreshContainerRef.current.style.marginTop = `${changeY / 12}px`;
          spinnerRef.current.style.transform = `rotate(${changeY * 13.5}deg)`;
        }
        if (changeY >= 170) {
          // console.log("100 8", `${changeY / 4.4}px`);
          refreshContainerRef.current.style.marginTop = `${changeY / 10}px`;
          spinnerRef.current.style.transform = `rotate(${changeY * 13.5}deg)`;
        }
        if (changeY >= 180) {
          // console.log("100 9", `${changeY / 4.3}px`);
          refreshContainerRef.current.style.marginTop = `${changeY / 8.5}px`;
          spinnerRef.current.style.transform = `rotate(${changeY * 13.5}deg)`;
        }
        if (changeY >= 190) {
          // console.log("100 10", `${changeY / 4.4}px`);
          refreshContainerRef.current.style.marginTop = `${changeY / 6.2}px`;
          spinnerRef.current.style.transform = `rotate(${changeY * 13.5}deg)`;
        }
        if (changeY >= 200) {
          // console.log("100 11", `${changeY / 4.4}px`);
          refreshContainerRef.current.style.marginTop = `${changeY / 5.5}px`;
          spinnerRef.current.style.transform = `rotate(${changeY * 13.5}deg)`;
        }
        if (changeY >= 210) {
          // console.log("100 12", `${changeY / 4.4}px`);
          refreshContainerRef.current.style.marginTop = `${changeY / 4.6}px`;
          spinnerRef.current.style.transform = `rotate(${changeY * 13.5}deg)`;
        }
        if (changeY >= 220) {
          // console.log("100 13", `${changeY / 4.4}px`);
          refreshContainerRef.current.style.marginTop = `${changeY / 3.9}px`;
          spinnerRef.current.style.transform = `rotate(${changeY * 13.5}deg)`;
        }
        if (changeY >= 230) {
          // console.log("100 14", `${changeY / 4.4}px`);
          refreshContainerRef.current.style.marginTop = `${changeY / 2.9}px`;
          spinnerRef.current.style.transform = `rotate(${changeY * 13.5}deg)`;
        }
        if (changeY >= 240) {
          // console.log("100 15", `${changeY / 4.4}px`);
          refreshContainerRef.current.style.marginTop = `${changeY / 2.2}px`;
          spinnerRef.current.style.transform = `rotate(${changeY * 13.5}deg)`;
        }
        if (changeY >= 250) {
          // console.log("100 16", `${changeY / 4.4}px`);
          refreshContainerRef.current.style.marginTop = `${changeY / 2}px`;
          spinnerRef.current.style.transform = `rotate(${changeY * 13.5}deg)`;
        }
      }
      if (changeY >= 260) return loadInit();
    }
  };

  const swipeEnd = (e) => {
    let touch = e.changedTouches[0];
    pCurrentY = touch.screenY;
    a = overviewScreen?.scrollTop;
    // console.log(a, "current");
    // if (overviewScreen?.scrollTop > 0) return;
    if (isLoading && refreshContainerRef?.current) {
      // setClassName("load-start");
      setTimeout(() => {
        isLoading = false;
        refreshContainerRef.current.style.marginTop = "-40px";
        refreshContainerRef.current.classList.remove("load-init");
        refreshContainerRef.current.classList.remove("load-start");
        spinnerRef.current.classList.add("closing-spinner");
        spinnerRef.current.style.transform = `rotate(0deg)`;
        // write code here to refresh the contents
        // setClassName("");
      }, 2200);
      setTimeout(() => {
        spinnerRef.current.classList.remove("closing-spinner");
      }, 3900);
      setTimeout(() => {
        refreshContainerRef.current.classList.add("load-start");
        dispatch(
          getCourseDetailsAction({
            courseId: router?.query?.courseId,
            isLoading: false,
            isDelay: true,
          })
        );
      }, 70);
    }

    if (!isLoading) {
      refreshContainerRef.current.style.marginTop = "-40px";
      spinnerRef.current.style.transform = `rotate(0deg)`;
    }
  };
  useEffect(() => {
    overviewScreen = document.querySelector("#layoutContent");
    document.addEventListener("touchstart", swipeStart, {
      passive: true,
    });
    document.addEventListener("touchmove", swipe);
    document.addEventListener("touchend", swipeEnd);
    return () => {
      document.removeEventListener("touchstart", swipeStart);
      document.removeEventListener("touchmove", swipe);
      document.removeEventListener("touchend", swipeEnd);
    };
  });
  // console.log("rendering swipedown");
  return (
    <div>
      <div className={`refresh-container`} ref={refreshContainerRef}>
        <svg className="spinner" ref={spinnerRef}>
          <use href="#spinner"></use>
        </svg>
      </div>
      <div>
        <svg style={{ display: "none" }}>
          <symbol id="spinner" viewBox="0 0 24 24">
            <path d="M13.146 11.0499L12.9717 9.05752L15.3463 8.84977C14.4472 7.98322 13.2243 7.4503 11.877 7.4503C9.11553 7.4503 6.87695 9.68888 6.87695 12.4503C6.87695 15.2117 9.11553 17.4503 11.877 17.4503C13.6977 17.4503 15.2912 16.4771 16.1655 15.0224L18.1682 15.5231C17.0302 17.8487 14.6406 19.4503 11.877 19.4503C8.01096 19.4503 4.87695 16.3163 4.87695 12.4503C4.87695 8.58431 8.01096 5.4503 11.877 5.4503C13.8234 5.4503 15.5843 6.24474 16.8531 7.52706L16.6078 4.72412L18.6002 4.5498L19.1232 10.527L13.146 11.0499Z" />
          </symbol>
        </svg>
      </div>
    </div>
  );
};

export default One;

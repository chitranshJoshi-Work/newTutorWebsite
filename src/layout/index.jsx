import React, { useEffect, useRef, useState } from "react";
import { getAwsAssets } from "@/utils/index";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { checkPaymentStatusGetService } from "@/src/PaymentService/services";
import handleBackEvent from "../utils/goBack";
// ACTIONS
import * as actionCreator from "../components/BottomSheets/store/actions";

import { directDeepLink } from "../common/deepLinks";
// COMPONENTS
import LayoutFooter from "./LayoutFooter";
import Image from "next/image";
// STY:ES
import styles from "./Layout.module.scss";

const Layout = ({
  layoutProps: { noHeader, accent, title, blockHeader, handleBack, noFooter },
  children,
}) => {
  const dispatch = useDispatch();
  console.log("PAGETITLE", title);
  // REF FOR LAYOUT FOOTER
  const headerRef = useRef();
  const contentRef = useRef();
  const footerRef = useRef();

  // NEXTJS ROUTER
  const router = useRouter();

  // SELECTOR

  const pageHeading = useSelector((state) => state?.layoutReducer?.heading);
  const graphCouponListData = useSelector(
    (state) => state?.overviewReducer?.graphCourseCouponListData
  );

  const currentCouponCode =
    graphCouponListData?.coupons && graphCouponListData?.coupons?.[0];

  console.log("currentCouponCode", currentCouponCode);

  const state = useSelector(
    (state) => state?.overviewReducer?.overViewDetails?.course
  );
  // STATES
  const [headerHeight, setHeaderHeight] = useState(0);
  const [footerHeight, setFooterHeight] = useState(0);
  const [marginTop, setMarginTop] = useState(0);
  const lastScrollTop = useRef(0);

  useEffect(() => {
    setFooterHeight(footerRef?.current?.offsetHeight || 0);
  }, [footerRef?.current?.offsetHeight]);

  useEffect(() => {
    setHeaderHeight(headerRef?.current?.offsetHeight);
  }, [headerRef?.current?.offsetHeight]);

  useEffect(() => {
    contentRef.current.scrollTo(0, 0);
    setMarginTop(0);
  }, [router.asPath]);

  const handleLayoutScroll = () => {
    const currScroll = contentRef.current.scrollTop;
    const lastScroll = lastScrollTop.current;

    if (
      !blockHeader &&
      contentRef?.current?.scrollHeight -
        (contentRef?.current?.offsetHeight + contentRef?.current?.scrollTop) >
        60
    ) {
      if (marginTop <= 0 && marginTop >= -60) {
        // if (router?.query?.tabId == 1) {
        // OVERVIEW
        // if (currScroll > lastScroll) {
        //   // SCROLLUP
        //   // if (currScroll > 100 && currScroll < 250) {
        //   //   if (!layoutTitle) {
        //   //     setLayoutTitle(title || pageHeading);
        //   //   }
        //   // } else
        //   if (currScroll > 250) {
        //     if (marginTop > -60) {
        //       setMarginTop(marginTop - 5);
        //     }
        //   }
        //   // SCROLLUP
        // } else {
        //   // SCROLLDOWN
        //   if (marginTop < 0) {
        //     setMarginTop(marginTop + 5);
        //   }

        //   // if (currScroll < 200) {
        //   //   setLayoutTitle(null);
        //   // }
        //   // SCROLLDOWN
        // }
        // OVERVIEW
        // } else {
        // OTHER TABS

        if (currScroll > lastScroll) {
          if (marginTop > -60) {
            setMarginTop(marginTop - 5);
          }
        } else {
          if (marginTop < 0) {
            setMarginTop(marginTop + 5);
          }
        }
        // OTHER TABS
        // }
      }

      // TOP - BOTTOM;
      if (currScroll === 0) {
        setMarginTop(0);
      }
      // else if (
      //   contentRef?.current?.offsetHeight + contentRef?.current?.scrollTop ===
      //     contentRef?.current?.scrollHeight &&
      //   currScroll !== 0
      // ) {
      //   setMarginTop(-60);
      // }

      // UPDATION
      lastScrollTop.current = currScroll;
    }
  };

  useEffect(() => {
    window.onMobileBackPressed = () => {
      alert("onMobileBackPressed");
      handleBackEvent(handleBack);
    };

    window.onMobileUpdate = (dataObj) => {
      let data = JSON.parse(dataObj);
      alert(JSON.stringify(dataObj));
      if (data?.status == 1) {
        //Payment success
        alert("Payment Success");

        let orderId = window.localStorage.getItem("orderId");
        checkPaymentStatusGetService(orderId);
      } else {
        //Payment failed

        dispatch(actionCreator.showPaymentFailedBottomSheetAction(true));
        alert("Payment Failed");
      }
    };
  });
  const socialLinks = useSelector(
    (state) => state?.overviewReducer?.overViewDetails?.course?.socialLinks
  );
  const checkForBuyNow = () => {
    console.log("check");
    if (
      state?.installments?.paidInstallmentSummary?.isPaymentComplete === 0 &&
      state?.metaData?.isPurchased === 0
    ) {
      console.log("check");

      return false;
    } else if (
      state?.installments?.paidInstallmentSummary?.isPaymentComplete === 0 &&
      state?.metaData?.isPurchased === 1
    ) {
      console.log("check");

      return false;
    } else if (
      state?.installments?.paidInstallmentSummary?.isPaymentComplete === 1 ||
      state?.metaData?.isPurchased === 1
    ) {
      return true;
    } else if (state?.metaData?.isPurchased) {
      return true;
    }
    return false;
  };

  return (
    <div className={styles.layout}>
      {!noHeader && (
        <div
          className={`${styles.layout__header} ${
            accent && styles["layout__header--accent"]
          }`}
          ref={headerRef}
          style={{ marginTop: `${marginTop}px` }}
        >
          <Image
            onClick={() => handleBackEvent(handleBack)}
            src={getAwsAssets(
              `leftArrowIcon${accent ? "Accent" : ""}.svg`,
              "layout"
            )}
            alt="leftArrowIcon"
            height={16}
            width={16}
            layout="fixed"
          />
          <h1>{pageHeading}</h1>
          {router?.query?.tabId && (
            <Image
              src={getAwsAssets(`shareIcon.svg`, "layout")}
              alt="shareIcon"
              height={24}
              width={24}
              layout="fixed"
              onClick={() =>
                // dispatch(
                //   actionCreator.showShareContentViaBottomSheetAction(true)
                // )
                directDeepLink(
                  {
                    // shareUrl: item?.shareUrl,
                    action: "ACTION_SHARE_COURSE",
                  },
                  "UTIL_BROWSER",
                  false
                )({ shareUrl: socialLinks })
              }
            />
          )}
        </div>
      )}
      <div
        className={styles.layout__content}
        style={{
          height: `calc(100vh - ${
            footerHeight + headerHeight
          }px - ${marginTop}px)`,
        }}
        ref={contentRef}
        onScroll={handleLayoutScroll}
        id="layoutContent"
      >
        {children}
      </div>

      <div className={styles.layout__footer} ref={footerRef}>
        {!noFooter ? <LayoutFooter /> : null}
      </div>
    </div>
  );
};

export default Layout;

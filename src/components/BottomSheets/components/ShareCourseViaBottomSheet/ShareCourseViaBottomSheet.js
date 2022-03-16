import React from "react";
import styles from "./ShareCourseViaBottomSheet.module.scss";
import Image from "next/image";
import Modal from "@/root/src/components/UIElements/Modal";
import { useDispatch, useSelector } from "react-redux";
import * as actionCreator from "../../store/actions";
import { useRef } from "react";
import { getAwsAssets } from "@/root/src/utils";
import { directDeepLink } from "@/deepLinks/index.js";
import { useTranslation } from "react-i18next";

const ShareCourseViaBottomSheet = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const state = useSelector(
    (state) => state?.bottomSheetReducer?.showShareContentViaBottomSheet
  );
  const socialLinks = useSelector(
    (state) => state?.overviewReducer?.overViewDetails?.course?.socialLinks
  );

  let d = [
    {
      type: "WHATSAPP",
      iconUrl:
        "https://dtxqtzf8mpl38.cloudfront.net/cams/store/icon/icon_whatsap.png",
      shareUrl:
        "https://api.whatsapp.com/send?text=Hey!%20I%E2%80%99m%20learning%20with%20BnN%20Classes%20and%20you%20can%20too.%20Here%E2%80%99s%20a%20course%20you%20might%20like:%20Payment%20Course%20101%20by%20string.%0A%20%20https://tutorwebsite.staging.classplus/1600?",
      shareText:
        "Hey! I’m learning with BnN Classes and you can too. Here’s a course you might like: Payment Course 101 by string.\n  https://tutorwebsite.staging.classplus/1600?",
      appName: "WhatsApp",
    },
    {
      type: "FACEBOOK",
      iconUrl:
        "https://dtxqtzf8mpl38.cloudfront.net/cams/store/icon/icon_fb.png",
      shareUrl:
        "https://www.facebook.com/sharer/sharer.php?u=https://tutorwebsite.staging.classplus/1600?",
      shareText:
        "Hey! I’m learning with BnN Classes and you can too. Here’s a course you might like: Payment Course 101 by string.\n  https://tutorwebsite.staging.classplus/1600?",
      appName: "Facebook",
    },
    {
      type: "TELEGRAM",
      iconUrl:
        "https://dtxqtzf8mpl38.cloudfront.net/cams/store/icon/icon_telegram.png",
      shareUrl:
        "https://t.me/share/url?url=https://tutorwebsite.staging.classplus/1600&text=Hey!%20I%E2%80%99m%20learning%20with%20BnN%20Classes%20and%20you%20can%20too.%20Here%E2%80%99s%20a%20course%20you%20might%20like:%20Payment%20Course%20101%20by%20string.%0A%20%20https://tutorwebsite.staging.classplus/1600?",
      shareText:
        "Hey! I’m learning with BnN Classes and you can too. Here’s a course you might like: Payment Course 101 by string.\n  https://tutorwebsite.staging.classplus/1600?",
      appName: "Telegram",
    },
    {
      type: "LINKEDIN",
      iconUrl:
        "https://dtxqtzf8mpl38.cloudfront.net/cams/store/icon/icon_linkedIn.png",
      shareUrl:
        "https://www.linkedin.com/shareArticle?mini=true&url=https://tutorwebsite.staging.classplus/1600?",
      shareText:
        "Hey! I’m learning with BnN Classes and you can too. Here’s a course you might like: Payment Course 101 by string.\n  https://tutorwebsite.staging.classplus/1600?",
      appName: "LinkedIn",
    },
  ];
  console.log("state2 data", socialLinks);
  console.log(state);
  const copyTextHandler = () => {
    var elem = document.createElement("textarea");
    document.body.appendChild(elem);
    elem.value = `${socialLinks?.copyUrl}`;
    elem.select();
    document.execCommand("copy");
    document.body.removeChild(elem);
    directDeepLink(socialLinks?.copyUrl, "UTIL_COPY", false)();
  };
  return (
    <Modal
      showModal={state}
      handleClose={() => {
        dispatch(actionCreator.showShareContentViaBottomSheetAction(false));
      }}
      header={
        <div className="UpcomingLive__ModalHeader">
          {t(
            "components.bottomSheets.components.shareCourseBottomSheet.shareCourseVia",
            "Share Course Via"
          )}
        </div>
      }
    >
      <div className={styles.ShareCourseViaBottomSheet}>
        <div className={styles.ShareCourseViaBottomSheet__socialIcons}>
          {d.map((item, i) => (
            <div
              className={
                styles.ShareCourseViaBottomSheet__socialIcons__singleIcon
              }
              key={`${i}share`}
            >
              <div
                className={
                  styles.ShareCourseViaBottomSheet__socialIcons__singleIcon__image
                }
                onClick={
                  () =>
                    item.type == "WHATSAPP"
                      ? directDeepLink(
                          {},
                          "UTIL_WHATSAPP",
                          false
                        )({
                          paramOne: item.shareUrl,
                          paramTwo: item.shareText,
                        })
                      : directDeepLink(
                          {
                            shareUrl: item?.shareUrl,
                            action: "ACTION_SHARE_COURSE",
                          },
                          "UTIL_BROWSER",
                          false
                        )({ shareUrl: item?.shareUrl })
                  // alert(item?.shareUrl)
                }
              >
                <Image
                  src={item.iconUrl}
                  width="30px"
                  height="30px"
                  alt={"icon"}
                />
              </div>
              <p
                className={
                  styles.ShareCourseViaBottomSheet__socialIcons__singleIcon__image__para
                }
              >
                {item.appName}
              </p>
            </div>
          ))}

          <div
            className={
              styles.ShareCourseViaBottomSheet__socialIcons__singleIcon
            }
            onClick={() => directDeepLink({}, "UTIL_SHARE", false)()}
          >
            <div
              className={
                styles.ShareCourseViaBottomSheet__socialIcons__singleIcon__image
              }
            >
              <Image
                src={getAwsAssets("moreAppsIcon.svg", "bottomSheets")}
                width="22px"
                height="22px"
                alt={t(
                  "components.bottomSheets.components.shareCourseBottomSheet.moreAppsAlt",
                  "MoreAppsAlt"
                )}
              />
            </div>
            <p
              className={
                styles.ShareCourseViaBottomSheet__socialIcons__singleIcon__image__para
              }
            >
              {t(
                "components.bottomSheets.components.shareCourseBottomSheet.moreApps",
                "More Apps"
              )}
            </p>
          </div>
        </div>
        <p className={styles.ShareCourseViaBottomSheet__divider}>
          {t(
            "components.bottomSheets.components.shareCourseBottomSheet.OR",
            "OR"
          )}
        </p>
        <div className={styles.ShareCourseViaBottomSheet__UrlCopy}>
          <p>{socialLinks?.copyUrl}</p>
          <div>
            <button onClick={copyTextHandler}>
              {t(
                "components.bottomSheets.components.shareCourseBottomSheet.copy",
                "COPY"
              )}
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ShareCourseViaBottomSheet;

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Modal from "../../../UIElements/Modal";
import * as actionCreator from "../../store/actions";
import { useTranslation } from "react-i18next";

const AboutCourseBottomSheet = (props) => {
  const { t } = useTranslation();
  const state = useSelector(
    (state) => state?.bottomSheetReducer?.showAboutThisCourseBottomSheet
  );
  const descriptionContent = useSelector(
    (state) => state?.overviewReducer?.overViewDetails?.course
  );
  console.log(descriptionContent, "descriptionContent");
  const dispatch = useDispatch();

  const data = {
    details: {
      appLink: "http://on-app.in/app/oc/1750/clp",
      courseExpiresAt: "2022-03-11T00:00:00.000Z",
      description:
        "Useful for: cet, ssc, bank, cds, afcat\nRailway, defence, police,\nCsat, navy & other exams.\n\n120+ hours video lectures\ngrammar & vocabulary\nconcept oriented teaching\nexam oriented strategies\n\nlatest previous papers (2017 - 2020)\ntopic wise pdf material ...It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
      duration: "",
      imageUrl: "",
      isWebVideoAllowed: 1,
      name: "Jan28 payment in the testing region to make this in demo",
      shareStatus: "",
      shareUrl: "https://tutorwebsite.staging.classplus/1750",
      strip: null,
      tncUrl: "https://www.google.com",
    },
    auxiliaryData: {
      description: `Useful for: cet, ssc, bank, cds, afcat Railway, defence, police,
Csat, navy & other exams.
120+ hours video lectures
grammar & vocabulary
concept oriented teaching
exam oriented strategies

latest previous papers (2017 - 2020)
topic wise pdf material ...It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`,
    },
    categories: [
      { id: 1, name: "Uncategorized" },
      { id: 2, name: "Banking" },
      { id: 4, name: "Csir- UGC NET" },
      { id: 6, name: "GMAT" },
      { id: 6506, name: "Banking" },
      { id: 6520, name: "pearson" },
      { id: 6557, name: "ww" },
      { id: 6601, name: "bvhv" },
      { id: 6619, name: "RKUGFHF" },
    ],
  };

  const renderCategories = () => {
    let names = data?.categories?.map((c) => c.name);
    return (
      <p className="OverView__Categories__text modal">
        {descriptionContent?.categoryList?.join(" • ")}
      </p>
    );
  };

  return (
    <Modal
      showModal={state}
      handleClose={() => {
        dispatch(actionCreator.showAboutThisCourseBottomSheetAction(false));
      }}
      header={
        <div className="AboutCourseBottomSheet__TempModalComponentData__Head">
          {t(
            "components.bottomSheets.components.aboutCourseBottomSheet.aboutThisCourse",
            "About this Course"
          )}
        </div>
      }
    >
      <div className="AboutCourseBottomSheet__TempModalComponentData">
        <div className="OverView__Heading__Left CourseName">
          {descriptionContent?.details?.name}
        </div>

        <section>{renderCategories()}</section>
        <hr className="AboutCourse__hr" />
        <section className="AboutCourseBottomSheet__TempModalComponentData__text">
          {descriptionContent?.details?.description}
        </section>
      </div>
    </Modal>
  );
};

export default AboutCourseBottomSheet;

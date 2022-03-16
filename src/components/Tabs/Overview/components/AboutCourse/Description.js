import React, { useRef, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { showAboutThisCourseBottomSheetAction } from "src/components/BottomSheets/store/actions.js";
function Description({ desc, setShowModal }) {
  console.log("calli", desc);
  const dispatch = useDispatch();
  const state = useSelector(
    (state) => state?.overviewReducer?.overViewDetails?.course
  );
  const containerRef = useRef();
  const [showReadMore, setShowReadMore] = useState(false);
  const [isOpen, setisOpen] = useState(false);

  useEffect(() => {
    let viewportHeight = document.body.clientHeight;
    if (containerRef.current.clientHeight > viewportHeight / 10) {
      setShowReadMore(true);
      setisOpen(false);
    }
  }, [desc]);

  // useEffect(()=>{
  //   if(isOpen)
  //     return
  //   let {scrollHeight, clientHeight} = containerRef.current
  //   let {scrollTop} = document.scrollingElement

  //   document.scrollingElement.scrollTop = scrollTop + clientHeight - scrollHeight
  // }, [isOpen])

  return (
    <div className={isOpen ? "box open" : "box"}>
      <div
        ref={containerRef}
        // style={{ minHeight: isOpen ? "auto" : "2vh", maxHeight: "14vh" }}
        className={isOpen ? "text open" : "text"}
      >
        {/* kfnjkdn ajsdnf djan fadjs fdajns fjnads fjnds sdh fhdf dsahbkf adsbhkjf
        sahbdf sbahdf hsbad fhbasd fhbdsa fhbsa dfhbsad fhsad fhbsa dfhbads
        fhbdsa fhsad fhbdsa fhbasd fhbsad fhbsad fhiasdbfabfiyhbf saidgh
        fshiagdf aisdgyhf adsihgf aisdhfbasouhdfbasdhf adsuofhasdkjf
        sadhfbuosadfb isajdhf sadhfbasdjfds fhsadbfousadfb sadhf sadhfjsa
        dfkhasdbfjsd fhksda fhsdabfj sadhfb sadkfh sdkhbf sahdf shadf ihsdaf
        sdhf dhsbf dhsif dsihf disfhb sdfghi sdfhs dah */}
        {desc}
      </div>
      {showReadMore && (
        <div>
          <div
            className="box__ReadMore"
            onClick={() => dispatch(showAboutThisCourseBottomSheetAction(true))}
          >
            Read {isOpen ? "Less" : "More"}
          </div>
        </div>
      )}
    </div>
  );
}
export default React.memo(Description);

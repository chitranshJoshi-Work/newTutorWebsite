import React from "react";
import { useSelector } from "react-redux";
const BuyNow = () => {
  const state = useSelector(
    (state) => state?.overviewReducer?.overViewDetails?.course
  );
  return (
    <div className="BuyNow__Container">
      <div className="BuyNow__Left">
        <div className="BuyNow__Left__Top">
          ₹{Math.round(state?.priceDetails?.totalPayableAmount) / 100}/-
        </div>
        <div className="BuyNow__Left__Bottom">
          <div className="BuyNow__Left__Bottom__OriginalPrice">
            ₹{state?.priceDetails?.price}/-
          </div>
          <div className="BuyNow__Left__Bottom__Discount">
            {state?.priceDetails?.discountPercentage}% OFF
          </div>
        </div>
      </div>
      <div className="BuyNow__Right">
        <div className="BuyNow__Right__Button">Buy Now</div>
      </div>
    </div>
  );
};

export default BuyNow;

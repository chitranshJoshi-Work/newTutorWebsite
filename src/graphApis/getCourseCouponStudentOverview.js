export default `query ($token: String!, $courseIds: [String], $primaryCourseId: String, $isBundlingCourse: Boolean) {
  withAuth(token: $token) {
    user{
      region
coursePrice(courseIds: $courseIds, primaryCourseId:$primaryCourseId, isBundlingCourse: $isBundlingCourse) {
  id
  handlingFactor
  ifFeeHandledByTutor
  redeemableAmount
  discount
  price
  name
}
      student {
        hashCoupons : coupons(limit:1,offset: 0){
          id
        }
      }
      redeems(courseIds: $courseIds, state: CLAIMED) {
        id
        coupon {
          id
          code
          name
          amount
          discountType
          couponType
          maxAmount
          totalLimit
          userLimit
          startDateTime
          endDateTime
          courseIds
          totalRedeem: redeemCount(notInState: REVERSED,isTotalCount: true)
          redeemCount(notInState: REVERSED,isTotalCount: false)
          isApplicableToAllCourses
        }
      }
    }
  }
}
mapper<safejs-
const hashCoupon = data.withAuth.user.student.hashCoupons.length > 0;
const coupon = data.withAuth.user.redeems && data.withAuth.user.redeems.length ? [data.withAuth.user.redeems[0].coupon] : null;
const redeemId = data.withAuth.user.redeems && data.withAuth.user.redeems.length ? data.withAuth.user.redeems[0].id : null;
data = courseOverview(coupon, data.withAuth.user.coursePrice, 0, true, hashCoupon, "", 0, data.withAuth.user.region);
if(redeemId){
data.label.redeemId = redeemId
data.coupons[0].coupon.redeemId = redeemId
  
}
-js>

`;

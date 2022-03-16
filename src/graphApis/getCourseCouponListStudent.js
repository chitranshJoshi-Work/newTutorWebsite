export default `query ($token: String!,$courseId:String!,$limit: Int, $offset: Int){
  withAuth(token: $token) {
    user {
      id
      region
      student {
        id
        coupons(limit:$limit, offset:$offset, courseIds:[$courseId]) {
          id
          code
          amount
          discountType
          maxAmount
          couponType
          name
          endDateTime
        }
      }
      redeems(courseIds:[$courseId], state: CLAIMED) {
        id
        coupon {
          id
          code
          amount
          discountType
          maxAmount
          couponType
          name
        }
      }
    }
  }
}
mapper<safejs-
const redeems = data.withAuth.user.redeems &&  data.withAuth.user.redeems.length ? data.withAuth.user.redeems[0] : {coupon: null, id: null};
const totalCount = data["student_"+data.withAuth.user.student.id+"_coupons_total"];
data = couponApplyAndRemove(data.withAuth.user.student.coupons, redeems.coupon, redeems.id, totalCount,data.withAuth.user.region, 1);
data.totalCount = totalCount;
-js>`;

export default `query ($token: String!, $uniqueId: String!){
  withAuth(token: $token ) {
    user {
      student {
        mapAnonymousCoupon(uniqueId :$uniqueId) {
          id
        }
      }
    }
  }
 }

mapper <safejs-

const redeemId = data && data.withAuth && data.withAuth.user && data.withAuth.user.student  && data.withAuth.user.student.mapAnonymousCoupon && data.withAuth.user.student.mapAnonymousCoupon.id ;
data.redeemId = redeemId;
-js>
`;

export default `mutation ($token: String! $code:String,$courseId: [String],$redeemId: String, $cartId: String, $isBundlingCourse: Boolean){
  mutationWithAuth(token: $token) {
    update {
     coupon(code:$code){
    		redeem(courseIds:$courseId,redemptionId: $redeemId, cartId: $cartId,isBundlingCourse: $isBundlingCourse ) {
        id

      }
    }
    }
  }
}`;

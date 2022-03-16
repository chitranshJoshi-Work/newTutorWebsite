export default `query($token: String!){
  withoutAuth{
    anonymousUser(token: $token){
      tutor{
        banner{
          banners{
                  url
                      landingScreenType
                      courseIds
                      categoryIds
                      isExpired
            link

                }
                  isPublished
                  isActive
      }
    }
  }
}
}
mapper<safejs-
        data.images = [];
        if (data.withoutAuth && data.withoutAuth.anonymousUser && data.withoutAuth.anonymousUser.tutor.banner && data.withoutAuth.anonymousUser.tutor.banner.banners && data.withoutAuth.anonymousUser.tutor.banner.banners.length && data.withoutAuth.anonymousUser.tutor.banner.isPublished) {
            let banners = data.withoutAuth.anonymousUser.tutor.banner.banners;
            for (let i = 0; i < banners.length; i++) {
              if (banners[i].isExpired) {
                continue;
            }
            switch(banners[i].landingScreenType) {
                case 'NONE':
                  data.images.push({
                        bgImage: banners[i].url,
                        heading: '',
                            textColor: '#99000000',
                    cta: {
                      text: '',
                    textColor: '#99000000',
                  deeplink: null,
                  },
                    })
                  break;
              case 'STORE_TAB':
                  data.images.push({
                        bgImage: banners[i].url,
                        heading: '',
                            textColor: '#99000000',
                    cta: {
                      text: '',
                                textColor: '#99000000',
                     deeplink: {
                          screen: 'SCREEN_STORE',
                        paramOne: '',
                        paramTwo: '',
                        paramThree: '',
                        paramTracking : 'jee'
                    },
                  },
                    })
                  break;
              case 'SPECIFIC_COURSE':
                    let courseIdInNum = [];
                    banners[i].courseIds.forEach((e) => {
                    courseIdInNum.push(parseInt(e));
                })
                  data.images.push({
                        bgImage: banners[i].url,
                        heading: '',
                            textColor: '#99000000',
                    cta: {
                      text: '',
                                textColor: '#99000000',
                     deeplink: {
                          screen: 'SCREEN_STORE_LISTING',
                        paramOne: 'tabCategoryId=2&requiredFilters=[1,4,5,20]&courseIds=['+courseIdInNum.join(',')+']',
                        paramTwo: '2',
                        paramThree: '',
                        paramTracking : 'CodingStoreListHomTut'
                    },
                  },
                    })
                  break;
              case 'CATEGORY_OF_COURSES':
                    let categoryIdInNum = [];
                    banners[i].categoryIds.forEach((e) => {
                    categoryIdInNum.push(parseInt(e));
                })
                    data.images.push({
                        bgImage: banners[i].url,
                        heading: '',
                            textColor: '#99000000',
                    cta: {
                      text: '',
                                textColor: '#99000000',
                     deeplink: {
                          screen: 'SCREEN_STORE_LISTING',
                        paramOne: 'tabCategoryId=2&requiredFilters=[1,4,5,20]&categoryId=['+categoryIdInNum.join(',')+']',
                        paramTwo: '2',
                        paramThree: '',
                        paramTracking : 'CodingStoreListHomTut'
                    },
                  },
                    })
                  break;
              case 'EXTERNAL_LINK':
                  
                data.images.push({
                    bgImage: banners[i].url,
                    heading: '',
                          textColor: '#99000000',
                  cta: {
                  text: '',
                              textColor: '#99000000',
                   deeplink: {
                      screen: 'UTIL_BROWSER',
                      paramOne: banners[i].link,
                      paramTwo: '',
                      paramThree: '',
                      paramTracking : ''
                  },
                },
                  })
                break;
          case 'YOUTUBE_LINK':
                  
                data.images.push({
                    bgImage: banners[i].url,
                    heading: '',
                          textColor: '#99000000',
                  cta: {
                  text: '',
                              textColor: '#99000000',
                   deeplink: {
                      screen: 'UTIL_WEBVIEW',
                      paramOne: banners[i].link,
                      paramTwo: '',
                      paramThree: '',
                      paramTracking : ''
                  },
                },
                  })
                break;
              case 'FREE_STUDY_MATERIAL':
                  
                data.images.push({
                    bgImage: banners[i].url,
                    heading: '',
                          textColor: '#99000000',
                  cta: {
                  text: '',
                              textColor: '#99000000',
                   deeplink: {
                      screen: 'SCREEN_MATERIAL',
                      paramOne: '',
                      paramTwo: '',
                      paramThree: '',
                      paramTracking : ''
                  },
                },
                  })
                break;
            }
          }
        }
        delete data.withoutAuth;
        -js>`;

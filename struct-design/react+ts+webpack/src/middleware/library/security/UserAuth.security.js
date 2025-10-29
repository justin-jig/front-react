
// 1. 인증을 안 했을 때 ==> (adult_yn,phone_yn ===N) 
// 팝업 : "해당 서비스를 이용하기 위해서는 본인인증이 필요합니다."
// action : mypage 프로필 페이지 이동

// 2. 인증을 했는데 성인이 아닐 때 (adult_yn ===N, phone_yn ===Y)
// 팝업 : "청소년보호법에 따라 해당 서비스의 이용이 제한됩니다."
// action :  페이지 유지

// 3. 인증을 했는데 성인일 때 (adult_yn ===Y,phone_yn ===Y)
// action : 페이지 접근 가능 컨텐츠 볼 수 있음

//피드,프로젝트,밋업 
class _UserAuth {

    UserCardAuthCheck(userAuthState, kind) {
        const userAuth = userAuthState;
        const BMkind = kind;
        if (userAuth.phone_yn === 'N' || userAuth.phone_yn === 'N' && userAuth.adult_yn === 'N') {
            // 1. 인증을 안 했을 때 ==> (adult_yn,phone_yn ===N) 
            // 팝업 : "해당 서비스를 이용하기 위해서는 본인인증이 필요합니다."
            // action : mypage 프로필 페이지 이동
            return '본인인증필요'
        } else if (userAuth.phone_yn === 'Y' && userAuth.adult_yn === 'N') {
            // 2. 인증을 했는데 성인이 아닐 때 (adult_yn ===N, phone_yn ===Y)
            // 팝업 : "청소년보호법에 따라 해당 서비스의 이용이 제한됩니다."
            // action :  페이지 유지

            // project,meetup 만 성인인증 컨탠츠 있으므로
            if (BMkind === 'project' || BMkind === 'meetup') {

                return '미성년'
            } else {
                return '전체이용가능'
            }
        } else if (userAuth.phone_yn === 'Y' && userAuth.adult_yn === 'Y') {
            // 3. 인증을 했는데 성인일 때 (adult_yn ===Y,phone_yn ===Y)
            // action : 페이지 접근 가능 컨텐츠 볼 수 있음
            return true
        }

    }
    
    UserAuthLinkTo() {
      
    }


}

export const UserAuth = new _UserAuth();
/** module import */
import Cookies from 'js-cookie';
import { axios } from '../AxiosModule'
/** service import */
import { PopupService } from '../../../library/method/Popup.method';

class __SignInService {

        /** 로그인 성공*/
        login(uuid, etk) {

            PopupService.callAlertPopup(['로그인 성공'], () => {
                localStorage.setItem('uuid', uuid);
                if (etk) Cookies.set('etk', etk);
                window.location.href = '/';
            })

            setTimeout(() => {
                localStorage.setItem('uuid', uuid);
                if (etk) Cookies.set('etk', etk);
                window.location.href = '/';
            }, [3000])
        }
        postLoginFilter(email, password) {
        
            if (!email) return PopupService.callAlertPopup(['이메일을 입력해주세요.']);
            if (!password) return PopupService.callAlertPopup(['비밀번호를 입력해주세요.']);


            this.login('test','test')
            

            /** http  */
            // const requestParam = {
            //     URL: `${process.env.ADDRESS}`, // RESTFul url
            //     DATA: {
            //         email: email,
            //         password: password
            //     }
            // }
            // // for dev 
            // if (process.env.NODE_ENV === 'development') {
            //     requestParam.DATA.SIGNIN_PASSWORD = process.env.SIGNIN_PASSWORD;
            // }

            // axios.post(requestParam)
            //     .then(res => {

            //     })
            //     .catch(err => {
            //         PopupService.callAlertPopup(['일치하지 않은 정보입니다.'])
            //     })

        }
}

export const SignInService = new __SignInService();
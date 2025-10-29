/** module import */
import Cookies from 'js-cookie';

class __SignOutMethod {

    async signOut() {

        let signOut = '';


        if (Cookies.get("etk")) { // etk 쿠키가 있으면 지움
            Cookies.remove("etk")
            window.location.href = `/`;
        }

 
    }

}

export const SignOutService = new __SignOutMethod();
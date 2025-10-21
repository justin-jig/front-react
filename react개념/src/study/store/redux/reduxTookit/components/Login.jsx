
import { useSelector, useDispatch } from "react-redux" 
import { authActions } from '../store/auth'

export default function Login () {

    const login = useSelector((state) => state.auth?.lsLogin);

    console.log('login', login)
    const dispatch = useDispatch();

    const loginFunc = () => {
        dispatch(authActions.login());
    }
    const logOut = () => {
        dispatch(authActions.logout());
    }

    return (
        <>
            {login ?
                    (
                        <>
                            <div>로그인 하셨습니다.</div>
                            <button onClick={() => logOut()}>로그아웃</button>
                        </>
                    )
                   
                :   (
                    <>
                        <div>로그 아웃 하셨습니다.</div>
                        <button onClick={() => loginFunc()}>로그인</button>
                     </>
                    )
            }
        </>
       
    )
}
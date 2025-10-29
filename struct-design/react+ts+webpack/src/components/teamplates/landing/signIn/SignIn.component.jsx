import React from 'react'



/** css import */
import styles from "./SignIn.component.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);


/** 
   @param  propsMethord
    1. signInFilter : 로그인 필터 매서드
    2. signOnChange : 
 */
const SignIn = (props) => {

    const {propsMethod} = props;
   
    return(
            <div className={cx('signin_div_section')}>
                    <div className={cx('signin_div_email')}>
                        <label>이메일</label>
                        <input  onChange={(e) => {propsMethod.sigInOnchange('email', e.target.value)}} type='text' placeholder='이메일을 입력하세요.'
                                onKeyPress={(e) => { e.charCode === 13 ?propsMethod.signInFilter(): ''}}
                        />
                    </div>

                    <div className={cx('signin_div_password')}>
                        <label>비밀번호</label>
                        <input  onChange={(e) => {propsMethod.sigInOnchange('password', e.target.value)}} type='password' placeholder='비밀번호를 입력하세요.'
                                onKeyPress={(e) => { e.charCode === 13 ? propsMethod.signInFilter() : ''}}
                        ></input>
                    </div>
                    <div className={cx('signin_div_signinButtonWrap')}>
                        <button onClick={() => {propsMethod.signInFilter()}} id='signin-button-signinButton'>로그인</button>
                    </div>
                   
        </div>
    )

}
export default SignIn
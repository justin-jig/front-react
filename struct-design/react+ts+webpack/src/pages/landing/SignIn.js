import React,{useEffect,useState} from 'react'


import SignIn from '../../components/teamplates/landing/signIn/SignIn.component.jsx';

import { SignInService } from '../../middleware/data/http/landing/SignIn.service'

const _SignIn = () => {

    //이곳에서 state생성 및 컴포넌트 생명주기 관리한다.
    // props로 넘겨 data flow 설계한다.

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const sigInOnchange = (kind, value) => {
        if(kind === 'email') setEmail(value);
        else if (kind ==='password') setPassword(value);
    }

    const signInFilter = () => {
            SignInService.postLoginFilter(email,password)
    }

    return (
        <SignIn propsMethod={{ signInFilter:() => { signInFilter() }, sigInOnchange:(kind,value) => { sigInOnchange(kind,value) }}} />
    )
}

export default _SignIn
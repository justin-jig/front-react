import React,{useEffect,useState} from 'react'


/**import teplate render */
import HomeRender from '../../components/teamplates/platform/home/Home.component.jsx'

import { SignInService } from '../../middleware/data/http/landing/SignIn.service';

const Home = () => {

    //이곳에서 state생성 및 컴포넌트 생명주기 관리한다.
    // props로 넘겨 data flow 설계한다.

    const [inputValue, setInputValue] = useState('');

    const onChangeValue = (value) =>{

        setInputValue(value)
    }

    return (
        <HomeRender  onChangeValue={(value)=>{onChangeValue(value)}} />
    )
}

export default Home
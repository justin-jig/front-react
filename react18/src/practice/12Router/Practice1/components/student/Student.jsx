
import {  Outlet, useSearchParams, useNavigate, useLocation } from "react-router-dom"

import './Student.scss';

export function Student () {

    return (
        <div className="studunet_box">
            <Outlet/>
        </div>
    )
}


export function KDT () {
    const navi = useNavigate();
    const location = useLocation();
    return (
        <>
            <p>학생의 이름은 <span>{ location.pathname.split('/')[2]}</span>입니다.</p>
            <button onClick={() => navi(-1)}>이전페이지로</button>
        </>
    
    )
}

export function Codingon () {
    const navi = useNavigate();
    const location = useLocation();
    return (
        <>
            <p>학생의 이름은 <span>{location.pathname.split('/')[2]}</span>입니다.</p>
            <button onClick={() => navi(-1)}>이전페이지로</button>
        </>
    )

}

export function New () {

    const navi = useNavigate();
    const location = useLocation();
    const [serchParams] = useSearchParams();

    return (
        <>
            <p>학생의 이름은 {location.pathname.split('/')[2]} 입니다.</p>
            <div> 실제이름은 <span color="red">{serchParams.get('name')}</span> </div>
            <button onClick={() => navi(-1)}>이전페이지로</button>
        </>
    )

}
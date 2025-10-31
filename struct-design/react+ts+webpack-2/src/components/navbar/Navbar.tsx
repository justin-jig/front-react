import React, { FC, Fragment, useCallback, useState } from "react";
import './Navbar.scss';

/** import modules */
import { Link } from "react-router-dom";
import { FaAngleDoubleRight, FaAngleDoubleDown, FaTimes } from "react-icons/fa";

/** import types */
import { MenuNavigationListDefineType, MenuNavigationItemDefineType } from "../../_common/define/MenuDefine"


interface NavbarProps  {
    mobileMenuToggle:boolean // 모바일 화면일 때 메뉴 toggle state
    mobileMenuToggleFunc:Function // 모바일 화면일 때 메뉴 toggle Function
    menuDefineList:MenuNavigationListDefineType // 메뉴 정의 리스트
}

const Navbar:FC<NavbarProps> = ({ menuDefineList, 
                                    mobileMenuToggle,
                                    mobileMenuToggleFunc }) => {

    return (
        <div className={mobileMenuToggle ? "Navbar_box display": "Navbar_box none" }>
            <div className="Navbar_logobox">
                <Link to={'/'}> IT Clab</Link>
                <div className="close_box" onClick={() => mobileMenuToggleFunc()}>
                    <FaTimes/>
                </div>
            </div>
            <h5 className="Navbar_title">NAVIGATION</h5>
            <ul className="Navbar_ul">
                {menuDefineList && menuDefineList.map((data:any, idx:number) => {
                    return (
                        <Fragment key={idx}> 
                            <NavbarItem item={data}/>
                        </Fragment>
                    )
                       
                })}
            </ul>
        </div>
    )
}
export default Navbar

interface NavbarItemProps  {
    item:MenuNavigationItemDefineType // 메뉴 정의 리스트
}

const NavbarItem:FC<NavbarItemProps> = ({item}) => {
    
    const [toggle, setToggle] = useState<boolean>(false); // 열림, 닫힘 toggle

    /** 열림 닫힘 클릭 */
    const toggleClickEvent = useCallback(() => {
        setToggle((prev) => !prev);
    },[toggle])

    return (

        <li className="list_item" onClick={() => toggleClickEvent()}>
            <div className="item_title-link" >
                <span className="title_icon">{item.icon}</span>
                <span className="title_name">{item.name}</span> 
                    {toggle === false ? 
                        <span className="title_arrow"><FaAngleDoubleRight/></span>
                        :
                        <span className="title_arrow"><FaAngleDoubleDown/></span>
                    }
                
            </div>
            {toggle === true && 
                <ul className="item_submenu">
                    {item.children &&  item.children.map((data:any, idx:number) => {
                        return (
                            <li key={idx}><Link to={data.path}>{data.name}</Link></li>
                        )
                    })}
                </ul>
            }
        </li>
    )
}
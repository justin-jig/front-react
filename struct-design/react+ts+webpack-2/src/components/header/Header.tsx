import React, { FC } from "react";

import { Link } from "react-router-dom";
import './Header.scss'


/** import modules */
import { FaAlignLeft } from "react-icons/fa";

interface HeaderProps {
    mobileMenuToggleFunc :Function
}

 const Header:FC<HeaderProps> = ({mobileMenuToggleFunc}) => {

    return (
        <div className="Header_box">  
            <div className="Header_leftbox">
                <ul className="rightbox_list">
                    <li className="item_hambager" onClick={() => mobileMenuToggleFunc()}><FaAlignLeft/></li>
                </ul>
            </div>
            <div className="Header_rightbox">
                <ul className="rightbox_list">
                    <li className="item_profile">
                        <div>
                            <img src="https://bestwpware.com/html/tf/duralux-demo/assets/images/avatar/1.png"/>                       
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;


import React, { } from 'react'
import { withRouter,Link } from 'react-router-dom';

/**scss import */
import styles from "./Header.scss";
import classNames from "classnames/bind";

/**service import */
import { SignOutService } from '../../../../../middleware/data/http/landing/SignOut.service';

const cx = classNames.bind(styles);


const Header = withRouter(props => {

    const {

    } = props;

    return (
        <header className={cx("platform-header-box")}>
            
            <Link to="/">플랫폼 헤더</Link> 
            <Link to="/about">about</Link>
            <span onClick={()=>{SignOutService.signOut()}}>로그아웃</span>
            
        </header>
    )
})

export default Header


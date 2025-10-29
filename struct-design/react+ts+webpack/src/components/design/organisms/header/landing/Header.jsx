

import React, { Component, useState } from 'react'
import { withRouter,Link } from 'react-router-dom';


/**scss import */
import styles from "./Header.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);


const PlatformHeader = withRouter(props => {

    const { toggleSlide } = props;

    let activePath = props.location.pathname;

    return (
        <header className={cx("landing-header-box")}>

              <Link to="/">랜딩 해더</Link> 

        </header>
    )
})

export default PlatformHeader


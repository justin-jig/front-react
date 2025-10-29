



import React,{useEffect,useState} from 'react'

/** css import */
import styles from "./Layout.component.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

/** component import*/
import PlatformHeader from '../../components/design/organisms/header/platform/Header.jsx';
import LandingHeader from '../../components/design/organisms/header/landing/Header.jsx';


/**
 * Paltform Layout
 * @param {*} props 
 * 
 * children: children
 */
export const PlatformLayout = (props) => {

    const {
            children // props로 넘어오는 자식 component
    } = props;

    return (
        <div className={cx('paltform-layout-box')} >

               <PlatformHeader/>
               <article id="container">
                    {children}
                </article>
                <footer></footer>

        </div>
    )
}


/**
 * Landing Layout
 * @param {*} props 
 * 
 * children : children
 */
export const LandingLayout = (props) => {

    const {
            children // props로 넘어오는 자식 component
    }= props;

    return (
        <div className={cx('landding-layout-box')} > 
                <LandingHeader/>
                <article id="container">
                    {children}
                </article>
                <footer></footer>
        </div>
    )
}

 

import React  from 'react'

/** css import */
import styles from "./About.component.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

/**moule import */

import { SwiperComponent, PropChildrenSwiper } from '../../../_modules/swiper/Swiper.Component.jsx';


const About = (props) => {
    const {

    } = props;
    

    return (
        <div className={cx('platform-about-section')}>
         
            <h2 className={cx('title')}>어바웃</h2>

            <div className={cx('swiper-1')}>
                 <SwiperComponent contentsList={[[],[],[]]}/>
            </div>
            <div className={cx('swiper-2')}>
                 <PropChildrenSwiper
                                    contentsList={[[],[],[]]}
                                    contentsComponent={()=> {return <SwiperItem/> || false}}
                 />
            </div>
    

        </div>
    )

}

const SwiperItem = () =>{
    return(
        <div>
            test
        </div>
    )

}

export default About
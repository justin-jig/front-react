
import React, { useState, useEffect, useRef,Fragment} from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay,Scrollbar } from 'swiper';
import 'swiper/swiper-bundle.css';
/** css import */
import styles from "./Swiper.component.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
// install Swiper components
SwiperCore.use([Navigation, Pagination, Autoplay , Scrollbar ]);


/**
   @param 
 
 */

export const SwiperComponent = (props) => {

    const { contentsList } = props;
    
    if(!contentsList) {
      return <div></div>;
    }

    let slides= [];
    
    contentsList.map((url, idx) => {
        slides.push(
            <SwiperSlide key={idx} tag="li">
                <img
                    src={url}
                    style={{ listStyle: 'none' }}
                    alt={`Slide`}
                />
            </SwiperSlide>
        );
    })

    return (
      <Fragment>
                <Swiper
                  id="main"
                  tag="section"
                  height={'100%'}
                  wrapperTag="ul"
                  pagination={{
                    clickable:true,
                  }}
                  autoplay={{
                    disableOnInteraction: true,
                    delay: 3000,
                  }}
                  loop={true}
                  grabCursor= {true}
                  spaceBetween={0}
                  slidesPerView={1}
                  onSlideChange={(swiper) => {
                    let previousSliderIndex = swiper.previousIndex //이전 슬라이드 index 번호=> 1부터 시작함
                    let loopIndex = swiper.realIndex+1 // 루프용 현재 Index=> 0부터 시작함 그래서 +1
                    let slidesLength = swiper.slides.length - 2 //슬라이더 length=> 가상으로 생긴 2개를 빼줌
                    //이전슬라이드가 슬라이드 마지막이고, loop로 돈 Index가 1이면
                    if(previousSliderIndex === slidesLength && loopIndex === 1){
                      swiper.slideTo(1)
                    }  
                    //이전슬라이드가 슬라이드 첫번째이고, loop로 돈 Index가 슬라이더 마지막
                    if(previousSliderIndex === 1 && loopIndex === slidesLength){
                        //이전 슬라이드가 
                        swiper.slideTo(slidesLength)
                    } 
                  }}
                  onReachEnd={() => {}}
                >
                  {slides}
                </Swiper>

      </Fragment>
     );
}


/**
 * props로 html 받아서 사용하는 swiper
 * @param {*} props
 * contentsComponent: props으로 return 받을 html 
 * contentsList : contentsList data
 */
export const PropChildrenSwiper=(props) => {

    const { contentsList ,
          contentsComponent
    } = props;


    if(!contentsList) {
      return <div></div>;
    }

    let slides= [];
    contentsList.map((data, idx) => {
        slides.push(
            <SwiperSlide key={idx} tag="li">
                {contentsComponent(data)}
            </SwiperSlide>
        );
    })
    return (
      <Fragment>
                <Swiper
                  id="main"
                  tag="section"
                  height={'100%'}
                  wrapperTag="ul"
                  pagination={{
                    clickable:true,
                  }}
                  autoplay={{
                    disableOnInteraction: true,
                    delay: 3000,
                  }}
                  loop={true}
                  grabCursor= {true}
                  spaceBetween={0}
                  slidesPerView={1}
                  onSlideChange={(swiper) => {
                    let previousSliderIndex = swiper.previousIndex //이전 슬라이드 index 번호=> 1부터 시작함
                    let loopIndex = swiper.realIndex+1 // 루프용 현재 Index=> 0부터 시작함 그래서 +1
                    let slidesLength = swiper.slides.length - 2 //슬라이더 length=> 가상으로 생긴 2개를 빼줌
                    //이전슬라이드가 슬라이드 마지막이고, loop로 돈 Index가 1이면
                    if(previousSliderIndex === slidesLength && loopIndex === 1){
                      swiper.slideTo(1)
                    }  
                    //이전슬라이드가 슬라이드 첫번째이고, loop로 돈 Index가 슬라이더 마지막
                    if(previousSliderIndex === 1 && loopIndex === slidesLength){
                        //이전 슬라이드가 
                        swiper.slideTo(slidesLength)
                    } 
                  }}
                  onReachEnd={() => {}}
                >
                  {slides}
                </Swiper>

      </Fragment>
    );
}



/**
 * list swiper 
 * @param {*} props
 *  children : props로 받는 html
 */
export const ScrollbarSwiper = (props) =>{

              const { initialData } = props;
              const { contentsComponent } = props;


              let slides= [];

              initialData.map((contents,idx)=>{
                  slides.push(
                    <SwiperSlide key={idx} tag="li">
                         {contentsComponent(contents)}
                    </SwiperSlide>
                  );
              })

              return(
                      <Fragment>
                                <Swiper
                                  id="main"
                                  tag="section"
                                  height={'100%'}
                                  wrapperTag="ul"
                                  scrollbar={{ draggable: true }}
                                  grabCursor= {true}
                                  spaceBetween={0}
                                  slidesPerView={4}
                                >
                                  {slides}
                                </Swiper>
                  
                      </Fragment>
              )

}

import React, {useState} from 'react';

/**import scss */
import styles from "./Popup.component.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

/**import image */
import { modalAndPopup } from '../../../../_static/svg/CommonIcon'


/**
    * @param msg props로 전달 받은 메세지 
    * @param show toggle 
    * @param callback 확인 버튼 시 콜백으로 함수
    
*/
export const AlertPopup = (prop) => {
        const {msg} = prop;
        const {show} = prop;
        const {callback} = prop;
        const [active, setActive] = useState(show);
        const closePopup = (ignoreCallback) => {
         
            document.body.removeChild(document.getElementById('alarm-popup-container'));
            if(ignoreCallback) return;
            if(callback) callback();
            setActive(false);
        }
        return(
            <div className={cx('alertPopup-dim', active === true ? 'active' : '')}>
                <div className={cx("alarmPopup-box")} onClick={e => e.stopPropagation()}>
                    {msg.map((item, idx) => {
                        return <p key={idx}>{item}</p>
                    })}
                    <button className={cx('outlineBtn')} onClick={()=>{closePopup();}}>확인</button>
                </div>
            </div>
        )
}
/**
    * @param style button style 
    * @param msg props로 전달 받은 메세지 
    * @param show toggle 
    * @param leftBtnText left btn text
    * @param leftBtnFunc left function
    * @param rightBtnText right btn text
    * @param rightBtnFunc right function
*/
export const ConfirmPopup = (prop) => {

        const { style ,msg,show,
                leftBtnText,leftBtnFunc,
                rightBtnText,rightBtnFunc
            } = prop;

        const [active, setActive] = useState(show);

        // poup close
        const closePopup = (ignoreCallback, func) => {

                    setActive(false);
                    document.body.removeChild(document.getElementById('confirm-popup-container'));
                    if(ignoreCallback){  return;  }
                    if(func){    func(); }

        }
        return(
            <div className={cx('confirmPopup-dim', active === true ? 'active' : '')} onClick={()=>{}}>
                    <div className={cx("confirmPopup-box")} onClick={e => e.stopPropagation()}>
                                <div className={cx('close-btn')} onClick={()=>closePopup(true)}> {modalAndPopup.closeBtn}</div>

                                <div className={cx('contents')}>

                                        <div className={cx('msg-area')}>
                                                {msg.map((item, idx) => {
                                                    return <p key={idx}>{item}</p>
                                                 })}
                                        </div>
                                        {style === 'border'? 
                                            <div className={cx('btn-area')}>  
                                                    <button className={cx('leftBtn')} onClick={()=>{closePopup(false, leftBtnFunc);}}>{leftBtnText}</button>
                                                    <button className={cx('rightBtn')} onClick={()=>{closePopup(false, rightBtnFunc);}}>{rightBtnText}</button>
                                            </div>
                                            :
                                            <div className={cx('btn-area')}>
                                                    <button className={cx('leftBtn')} onClick={()=>{closePopup(false, leftBtnFunc);}}>{leftBtnText}</button>
                                                    <button className={cx('rightBtn blue')} onClick={()=>{closePopup(false, rightBtnFunc);}}>{rightBtnText}</button>
                                            </div>
                                        }
                                </div>
                               
                
                    </div>
            </div>
        )
}
/**
    * @param style button style 
    * @param component props로 전달 받은 component 
    * @param show toggle 
    * @param leftBtnText left btn text
    * @param leftBtnFunc left function
    * @param rightBtnText right btn text
    * @param rightBtnFunc right function
*/
export const PromptPopup = (prop) =>{

    const { style ,component,show,
            leftBtnText,leftBtnFunc,
            rightBtnText,rightBtnFunc
            } = prop;
    const [active, setActive] = useState(show);


     const closePopup =  async (func) => {

            // 불려진 component에서 해당 조건이 성립되었는지 아닌지 확인하는 callback 로직
            let requirement = true;
             // requirement false 면 팝업창 유지 true면 종료
            if(func){
                    requirement =  await func();
                    if(requirement === false) return;
                    else{
                        setActive(false);
                        document.body.removeChild(document.getElementById('prompt-popup-container'));
                    }
            }
            else{
                setActive(false);
                document.body.removeChild(document.getElementById('prompt-popup-container'));
            }
           
    }

    return(
        <div className={cx('promptPopup-dim', active === true ? 'active' : '')} onClick={()=>{}}>
                <div className={cx("promptPopup-box")} onClick={e => e.stopPropagation()}>
                            <div className={cx('close-btn')} onClick={()=>closePopup()}> {modalAndPopup.closeBtn}</div>

                            <div className={cx('contents')}>

                                    <div className={cx('component-area')}>
                                           {component}
                                    </div>
                                    {style === 'border'? 
                                        <div className={cx('btn-area')}>  
                                                <button className={cx('leftBtn')} onClick={()=>{closePopup(leftBtnFunc);}}>{leftBtnText}</button>
                                                <button className={cx('rightBtn')} onClick={()=>{closePopup(rightBtnFunc);}}>{rightBtnText}</button>
                                        </div>
                                        :
                                        <div className={cx('btn-area')}>
                                                <button className={cx('leftBtn')} onClick={()=>{closePopup(leftBtnFunc);}}>{leftBtnText}</button>
                                                <button className={cx('rightBtn blue')} onClick={()=>{closePopup(rightBtnFunc);}}>{rightBtnText}</button>
                                        </div>
                                    }
                            </div>
                </div>
        </div>
    )

}
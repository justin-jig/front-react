import React,{Fragment, useEffect ,useRef } from 'react'

/** css import */
import styles from "./TextArea.component.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

/** service import */
import { SecurityService } from '../../../../services/common/Security.service'
/** module import */
import ContentEditable from 'react-contenteditable'


/**
 * @param {*} props 
 * 
 * inputPlaceholder
 * 
 */

export const DefaultTextArea = (props) => {

    const {
        initialValue,
        textAreaPlaceholder,
        onChangeValue
    } = props

    return (
            <Fragment>
                {
                    onChangeValue ?
                    <textarea defaultValue={initialValue} className={cx('textarea-0')} placeholder={textAreaPlaceholder} 
                              onChange={(e)=>{ onChangeValue(e.target.value) }} />
                    :
                    <textarea defaultValue={initialValue} className={cx('textarea-0')} placeholder={textAreaPlaceholder}/>
                }
                
            </Fragment>
    )
}


/**
 * @param {*} props 
 * 
 * inputPlaceholder
 * 
 */

export const DOMStringParser = ({html , style}) =>{

            if(!html) return '';
            let obj = SecurityService.preventXSSForSelect(html);
            if(obj.replaced){
                return (
                    <div className={cx('DOMStringParser')}>
                        허용되지 않는 문자를 포함한 게시물입니다.
                    </div>
                )
            }
            return (
                <div style={style} dangerouslySetInnerHTML={{__html : obj.html}} className={cx('DOMStringParser')}></div>
            )
}



/**
 * @param {*} props 
 * 
 * inputPlaceholder
 * 
 */

export const TagCotnentTextedit = (props) => {

            const 
                { 
                    html,
                    onChangeEvent
                } = props;

            let text = useRef('');
            useEffect(()=>{   },[html])
            

            const onKeyDonw = (e) =>{     }
       
            const handleChange = evt => {
                // text = text + evt.target.value;
                text.current  = evt.target.value;
                onChangeEvent(text)
            };
            const handleBlur = () => {
            };
            return(
                    <ContentEditable onKeyDown={onKeyDonw} html={text.current} onBlur={handleBlur} onChange={handleChange} tagName='article'/>
            )  
}
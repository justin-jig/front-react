import React, { Fragment, useState, useEffect } from 'react'

/** css import */
import styles from "./Input.component.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

/** svg import */
import { modalAndPopup } from '../../../../_static/svg/CommonIcon'


/**
 * @param {*} props 
 * inputPlaceholder : placeholder
 * onChangeValue : onchange 
 */
export const DefaultInput = (props) => {

    const {
        initialValue, // 기본 정보
        inputPlaceholder,
        onChangeValue, //
        disableValue // 비활성화 여부
    } = props

    const handleOnChangeValue = (value) => {
        onChangeValue(value)
    }

    if (initialValue) {
        return (
            <Fragment>
                {onChangeValue ?
                            <input disabled={disableValue} defaultValue={initialValue} type="text" className={cx('input-defalut',disableValue=== true ? 'disabled':'')}
                                     placeholder={inputPlaceholder} onChange={(e) => { handleOnChangeValue(e.target.value) }} />
                            :
                            <input disabled={disableValue} defaultValue={initialValue} type="text" className={cx('input-defalut',disableValue=== true ? 'disabled':'')}
                                     placeholder={inputPlaceholder} />
                }
            </Fragment>
        )
    } else {
        return (
            <Fragment>
                {onChangeValue ?
                            <input type="text" className={cx('input-defalut' ,disableValue=== true ? 'disabled':'')} disabled={disableValue} 
                                    placeholder={inputPlaceholder} onChange={(e) => { handleOnChangeValue(e.target.value) }} />
                            :
                            <input type="text" className={cx('input-defalut', disableValue=== true ? 'disabled':'')} disabled={disableValue} placeholder={inputPlaceholder}  />
                }

            </Fragment>
        )
    }
}

/**
 * @param {*} props 
 * inputPlaceholder : placeholder
 * onChangeValue : onchange 
 */

export const SearchInput = (props) => {

            const {
                inputPlaceholder,
                onChangeValue, //
            } = props

            const handleOnChangeValue = (value) => {
                onChangeValue(value)
            }

            return(
                <input  type="text" className={cx('input-defalut')}  id="searchInput"
                        placeholder={inputPlaceholder} onChange={(e) => { handleOnChangeValue(e.target.value) }} />

            )
}


/**
 * @param {*} props 
 * inputPlaceholder : placeholder
 * onChangeValue : 사용자 입력값
 * searchOnclickEvent : 검색 돋보기 클릭 
 */
export const SearchIconInput = (props) =>{

        const {
            inputPlaceholder,
            onChangeValue, //
            searchOnclickEvent
        } = props

        return(
                <div className={cx('search-icon-input')}>
                        <span className={cx('input-area')}> 
                            <input type="text" onChange={(e)=>{onChangeValue(e.target.value) }} placeholder={inputPlaceholder}
                                   onKeyPress={(e)=>{e.key ==='Enter' ? onChangeValue(e.key) : false }}
                            ></input> 
                        </span>
                        <span className={cx('btn-area')} onClick={()=>{searchOnclickEvent()}}> 
                                {modalAndPopup.magnifier}
                        </span>
                </div>
        )

}

/**
 * @param {*} props 
 * inputPlaceholder : placeholder
 * onChangeValue : onchange 
 */
export const SwitchInput = (props) =>{

            return(
                    <label className="switch_label_switch">
                        <input type="checkbox" defaultChecked={false} onChange={(e) => {  }}
                            />
                        <span></span>
                    </label>
            )

}



/**
 * @param {*} props 
 * inputPlaceholder : placeholder
 * onChangeValue : onchange 
 */
export const PasswordInput = (props) => {


        return(
                <input type="password" className={cx('input-password')}   onChange={(e) => {  }}     />
        )

}


/**
 * @param {*} props 
 * inputPlaceholder : placeholder
 * onChangeValue : onchange 
 */
export const NumberInput = (props) => {

    const {
        initialValue, // 초기값
        inputPlaceholder,
        onChangeValue
    } = props

    return ( 
        <Fragment>
            {onChangeValue ?
                        <input defaultValue={initialValue} type="number" className={cx('input-number')} placeholder={inputPlaceholder} onChange={(e) => {onChangeValue(e.target.value)}} />
                        :
                        <input defaultValue={initialValue} type="number" className={cx('input-number')} placeholder={inputPlaceholder}  />
            }

        </Fragment>
            
    )
}


/**
 * @param {*} props 
 * inputPlaceholder : placeholder
 * onChangeValue : onchange 
 */
export const DateInput = (props) =>{

    const {
        initialValue, // 초기값
        inputPlaceholder,
        onChangeValue,
        disableValue
    } = props

    return (
        <Fragment>
            {
                onChangeValue ?
                    <input id="date-check" type="date" max="9999-12-31" defaultValue={initialValue} disabled={disableValue} 
                           className={cx('input-date', disableValue === true ? 'disable' :'')} 
                           placeholder={inputPlaceholder} onChange={(e) => { onChangeValue(e.target.value) }} />
                    :
                    <input type="date" max="9999-12-31" defaultValue={initialValue} disabled={disableValue}
                           className={cx('input-date', disableValue === true ? 'disable' :'')} 
                           placeholder={inputPlaceholder} />
            }
        </Fragment>
    )
}



/**
 * @param {*} props 
 * inputPlaceholder : placeholder
 * onChangeValue : onchange 
 */
export const TimeInput = (props) => {

    const {
        inputPlaceholder,
        disableValue,
        onChangeValue
    } = props

    return (
            <Fragment>
                {
                    onChangeValue ?
                    <input disabled={disableValue} type="time" className={cx('input-time')} placeholder={inputPlaceholder} 
                           onChange={(e) => {onChangeValue(e.target.value)}} />
                    :
                    <input disabled={disableValue} type="time" className={cx('input-time')} placeholder={inputPlaceholder}/>
                }
            </Fragment>
    )
}
    


/**
 * @param {*} props 
 * inputPlaceholder : placeholder
 * onChangeValue : onchange 
 */
export const NoneBoderInput = (props) => {

    const {
        inputPlaceholder,
        onChangeValue
    } = props

    return (
            <Fragment>
                {
                    onChangeValue ?
                    <input type="text" name={"input-none-border"} className={cx('input-none-border')} placeholder={inputPlaceholder} onChange={(e)=>{onChangeValue(e.target.value)}} />
                    :
                    <input  type="text" className={cx('input-none-border')} placeholder={inputPlaceholder}/>
                }
            </Fragment>
    )
}


/**
 * @param {*} props 
 * inputId : input id
 * onchangeFile : onchange event
 * fileTitle : file 제목
 */
export const FileInput = (props) => {

    const {
        inputId,
        onchangeFile,
        fileTitle
    } = props;


    return (
            <div className={cx('input-file-box')}>
                <label htmlFor={inputId}>{fileTitle}</label>
                {
                    onchangeFile ? 
                    <input id={inputId} type="file" onChange={(e) => { onchangeFile(e.target.files[0]) }}/>
                    :
                    <input id={inputId} type="file" onChange={(e) => { }}/>
                }
                
            </div>

    )
}


/**
 * @param {*} props 
 * labelValue : label value
 * radioName : 같은 폼 안에서 사용하는 input radio
 * defaultChecked: defaultChecked 
 */

export const RadioInput = (props) => {

    const {
            radioName,
            labelValue,
            defaultChecked,
            onChangeValue            
            } = props;

    const [radioDefaultChecked, setRadioDefaultChecked] = useState( );

    //첫 렌더링 시 넘어오는 defaultChecked 값 셋팅
    useEffect(()=>{

        if(!defaultChecked || defaultChecked === '') setRadioDefaultChecked(false);
        else setRadioDefaultChecked(defaultChecked)

    },[])

    const radioOnchange = (value) => {

        if(value === 'on'){
            onChangeValue(labelValue);
        }


    }        

    return(
            <div className={cx('input-radio-box')}>
                        <span className={cx('radio')}> 
                        
                                    <input type="radio" name={radioName} defaultChecked={radioDefaultChecked}
                                                     onChange={(e)=>{radioOnchange(e.target.value)}}/> 
                        </span>
                        <span className={cx('label')}>

                                <label>{labelValue}</label>

                        </span>
            </div>
    )
}
    
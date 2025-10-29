import React, {  } from 'react'

/** css import */
import styles from "./LabelForm.component.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

/**component import */
import { DefaultInput } from '../../atoms/input/Input.component.jsx'


/**
 * @param {*} props 
 *  labelValue : label value
 *  inputPlaceholder : placeholder value
 *  onChangeValue : onchange value
 *  sapmle <InputLabel labelValue={} inputPlaceholder={}  onChangeValue={()=>{}}/>
 */
export const InputLabel = (props) =>{
    const {
            labelValue, // 라벨 이름
            inputPlaceholder,
            onChangeValue,

    } = props;


    return (
            <div className={cx('input-label-box')}>
                    <label>{labelValue}</label>  

                     <DefaultInput 
                                        onChangeValue={(value) => { onChangeValue(value) }} inputPlaceholder={inputPlaceholder}  />
                  
            </div>
    )
}

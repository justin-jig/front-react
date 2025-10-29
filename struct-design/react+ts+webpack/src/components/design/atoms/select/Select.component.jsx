import React,{Fragment, useEffect, useState} from 'react'

/** css import */
import styles from "./Select.component.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
/** image import */
import elevatorUp from '../../../../assets/images/common/atoms/icon_elevatorUp_gray.svg'
import elevatorDown from '../../../../assets/images/common/atoms/icon_elevatorDown_gray.svg'
import chooseIcon from '../../../../assets/images/common/atoms/icon_choose_bule.svg'

/**
 * @param {*} props 
 */
export const DefaultSelect = (props) =>{
    return(
        <select>
            <option></option>
        </select>
    )
}



/**
 * @param {*} props 
 * initialValue: 초기값
 * defaultValue: delfaut value
 * choseData: 이미 선택한 data
 * optionListData: option으로 받을 data
 * onChangeValue:  선택된 data 부모로 이벤트 버블링
 * semple: <ProcessedSelect defaultValue={} optionList={} choseData={} onChangeValue={}/>
 */
export const ProcessedSelect = (props) => {
    const {
        initialValue, // 초기값
        defaultValue,
        optionListData,
        onChangeValue,
    } = props;
    
    const [selectValue, setSelectValue] = useState(''); // initial select value
    const [optionList, setOptionList] = useState([]); // initial option value
    const [selected, setSelected] = useState(false); // select 클릭시 toggle

    // 초기값이 지정되어 있을 경우
    useEffect(() => {
        if (initialValue) {
            setSelectValue(initialValue); // selectValue 값 입력

        } else if (!initialValue) {
            setSelectValue(defaultValue); // 없으면 defaultValue
        }

    }, [initialValue])

    // optionListData 가 갱신될때마다 reRender
    useEffect(() => {
        if (optionListData) {
            setOptionList([...optionListData]);
        }
    }, [optionListData])

    // select click
    const selectClick = () => {
        if (selected === false) {
            setSelected(true);
        } else if (selected === true) {
            setSelected(false);
        }
    }

    // option click
    const pickOption = (value) => {
        setSelected(false);
        setSelectValue(value);

        if (onChangeValue) { 
            onChangeValue(value);
        }
    }


    return (
        <div display="none" className={cx(`processed-select-box ${selected === true ? 'border':''}`)} tabIndex="0" onBlur={() => { setSelected(false) }}>
                <div className={cx(`select-area` )} onClick={() => { selectClick() }}>
                    <span className={cx('title')}> {selectValue} </span>
                    <span className={cx('elevator-btn')}>
                            {selected === true ? 
                                    <img src={elevatorUp} alt="btn_elevator_up"/>
                            :
                                    <img src={elevatorDown} alt="btn_elevator_up"/>
                            }
                    </span>
                </div>
                <ul className={cx(`option-area ${selected === true ? 'block' : ''}` )} name="option-area">

                        {optionList.map((data, idx) => {
                            return (
                                    <li key={idx} onClick={() => { pickOption(data) }} > 
                                        <span className={cx(`contents ${selectValue == data ? 'chosen-option' : ''}`)}>{data}</span>
                                        <span className={cx(`chose-icon ${selectValue == data ? 'chosen-option' : ''} `)}>
                                            <img src={chooseIcon} alt="chose_icon"/></span>
                                    </li>
                            )
                        })}
                </ul>
        </div>
    )
}
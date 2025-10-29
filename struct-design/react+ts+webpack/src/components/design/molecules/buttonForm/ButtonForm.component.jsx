import React, { useState } from 'react'

/** css import */
import styles from "./ButtonForm.component.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

/** component import */
import { BuleButton  } from '../../atoms/button/Button.component.jsx'
import { NoneBoderInput } from '../../atoms/input/Input.component.jsx'


/**
 * @param {*} props 
 *  buttonValue : button value
 *  inputPlaceholder : placeholder value
 *  onChangeValue : onchange value
 */
export const ButtonForm = (props) => {

    const {
        buttonValue,
        inputPlaceholder,
        onClickEvent,
        onChangeValue
    } = props;
    
    const [inputValue, setInputValue] = useState(''); //사용자 입력 input
    
    const valueInput = () => {
        onClickEvent(inputValue);
        let inputConut = document.getElementsByName('input-none-border').length;
        for (let i = 0; i < inputConut; i++) {
            document.getElementsByName('input-none-border')[i].value = "";
        }
    }
 
    return(
            <div id="buttonInputBox" className={cx('button-input-box')}>
                  
                    <div className={cx('left-area')}>
                                <NoneBoderInput onChangeValue={(value) => {setInputValue(value)}} inputPlaceholder={inputPlaceholder}  />
                    </div>
                    <div className={cx('right-area')}>
                            {onClickEvent?
                                <BuleButton buttonValue={buttonValue} onClickEvent={() => { valueInput() }} />
                                :
                                <BuleButton buttonValue={buttonValue} onClickEvent={() => { valueInput() }} />
                            }
                    </div>
            </div>
    )
}


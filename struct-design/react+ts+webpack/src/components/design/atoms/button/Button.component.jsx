import React from 'react'
/** css import */
import styles from "./Button.component.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

/**
 * @param {*} props 
 *  buttonValue : button value
 *  onClickEvent : onClick event
 */
export const BuleBoderButton = (props) => {

    const {
        buttonValue,
        onClickEvent
    } = props;

    return (
            <button className={cx('bule-border-button')} onClick={() => { onClickEvent() }}> {buttonValue}</button>
    )

}
    
export const BuleButton = (props) => {

    const {
        buttonValue,
        onClickEvent
    } = props;

    return (
            <button className={cx('bule-button')} onClick={() => { onClickEvent() }}> {buttonValue}</button>
    )

}


export const WhiteButton = (props) => {

    const {
        buttonValue,
        onClickEvent
    } = props;

    return (
            <button className={cx('white-button')} onClick={() => { onClickEvent() }}> {buttonValue}</button>
    )

}


export const RedButton = (props) => {

    const {
        buttonValue,
        onClickEvent
    } = props;

    return (
            <button className={cx('red-button')} onClick={() => { onClickEvent() }}> {buttonValue}</button>
    )

}
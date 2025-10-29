import React,{Fragment, useEffect, useState} from 'react'

/** css import */
import styles from "./Tag.component.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

/** image import */

import tagDeleteBtn from '../../../../assets/images/common/atoms/btn_tagDelete.svg'

/**
 * @param {*} props 
 * 
 * tagValue : tag title
 * 
 */

export const BlueBoderTag = (props) => {
    const {
        tagIdx,
        tagValue,
        tagDelete
    } = props;

    const [replaceTag, setReplaceTag] = useState();


    useEffect(() => { // 공백 제거
        if (tagValue) {
            setReplaceTag(tagValue.toString().replaceAll(/ /g, ''));
        }
    }, [tagValue])

    return (
           <span className={cx('bule-border-tag')}>
                {tagDelete ? 
                    <Fragment>
                        <span className={cx('tag')}># {replaceTag} </span> 
                        <span className={cx('delete-btn')} onClick={() => {tagDelete(tagIdx) }}><img src={tagDeleteBtn} alt="btn_tag_delte"/></span>
                     </Fragment>
                     :
                     <span className={cx('no-delate-tag')}># {replaceTag} </span> 
                 }
           </span>
    )
}


export const NoneHashTag = (props) => {
    const {
        tagIdx,
        tagValue,
        tagDelete
    } = props;

    const [replaceTag, setReplaceTag] = useState();


    useEffect(() => { // 공백 제거
        if (tagValue) {
            setReplaceTag(tagValue.toString().replaceAll(/ /g, ''));
        }
    }, [tagValue])

    return (
           <span className={cx('bule-border-tag')}>
                {tagDelete ? 
                    <Fragment>
                        <span className={cx('tag')}>{replaceTag} </span> 
                        <span className={cx('delete-btn')} onClick={() => {tagDelete(tagIdx) }}><img src={tagDeleteBtn} alt="btn_tag_delte"/></span>
                     </Fragment>
                     :
                     <span className={cx('no-delate-tag')}>{replaceTag} </span> 
                 }
           </span>
    )
}









    
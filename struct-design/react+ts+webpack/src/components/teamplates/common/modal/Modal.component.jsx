
import React,{useEffect,useState} from 'react';

/**css import */
import styles from "./Modal.component.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

/**image import */
import { modalAndPopup } from '../../../../_static/svg/CommonIcon'

/**
 * 
 * @param {*} receivedProps 
 * show :  prop으로 넘겨 받은 toogle state
 * propClose : prop으로 넘겨 받은 close 함수
 * children: prop으로 넘겨 받은 component
 */
export const DetailModal = (receivedProps) => {

    // 컴포넌트 보이기 / 안보이기 유무
    const [isShow, setIsShow] = useState(false);

    useEffect(() => {
        let showValue = receivedProps.show;
        if (showValue === undefined) {
            showValue = false;
        }
        if(showValue === true){
            document.body.style.overflow = 'hidden'
        }
        else if(showValue === false) {
            document.body.style.overflow = 'initial'
        }
        setIsShow(showValue);
    }, [receivedProps.show]);

    
    // 전달해주는 popupClose 함수를 실행하여 팝업닫기
    const handleShow = () => {
        receivedProps.popupClose(false);
    }
    
    const handleModalClose = () => {
        setIsShow(false)
        document.body.style.overflow = 'initial';
        receivedProps.propClose(false);
    }

    
    return (
        <div className={cx('detail-modal-overlay', isShow ? 'active' : '')} onClick={()=>{}} >
            <div className={cx('modal__content-box')}>
                <div className={cx('close-modal')} onClick={() => { handleModalClose() }}> {modalAndPopup.closeBtn} </div>   
                <div className={cx('modal-contents')}>
                    {receivedProps.children}
                </div>
            </div>
        </div>
    )

}


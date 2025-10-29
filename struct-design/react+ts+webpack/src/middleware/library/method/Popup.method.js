import React from 'react';
import ReactDOM from 'react-dom';
import { AlertPopup, PromptPopup , ConfirmPopup } from '../../../components/teamplates/common/popup/Popup.component.jsx'

class _PopupService {

    callAlertPopup(msg, callBack){
        const container = document.createElement('div');
        container.setAttribute('id', 'alarm-popup-container');
        if(document.getElementById('alarm-popup-container')) {
            document.body.removeChild(document.getElementById('alarm-popup-container'));
            return;
        }
        
        document.body.appendChild(container);
        ReactDOM.render(<AlertPopup msg={msg} show={true} callback={callBack}/>, container);
    };

    /**
     * 
    * @param style button style 
    * @param msg props로 전달 받은 메세지 
    * @param show toggle 
    * @param leftBtnText left btn text
    * @param leftBtnFunc left function
    * @param rightBtnText right btn text
    * @param rightBtnFunc right function
     * 예시 PopupService.callConfirmPopup('', ['정말로 삭제 하시겠습니까?'], '취소', ()=>{}, '확인', ()=>{})
     */
    callConfirmPopup(style, msg, leftBtnText, leftBtnFunc, rightBtnText, rightBtnFunc){
        const container = document.createElement('div');
        container.setAttribute('id','confirm-popup-container');
        if(document.getElementById('confirm-popup-container')){
            document.body.removeChild(document.getElementById('confirm-popup-container'));
            return;
        }
        document.body.appendChild(container);
        ReactDOM.render(<ConfirmPopup  style={style} msg={msg} show={true} 
                                                leftBtnText={leftBtnText} leftBtnFunc={leftBtnFunc} 
                                                rightBtnText={rightBtnText} rightBtnFunc={rightBtnFunc} />, container);
    }

    /**
     * 
    * @param style button style 
    * @param component props로 전달 받은 component 
    * @param show toggle 
    * @param leftBtnText left btn text
    * @param leftBtnFunc left function
    * @param rightBtnText right btn text
    * @param rightBtnFunc right function
    * 예시  PopupService.callPromptPopup(
                                        'blue', <PopupCareer receivedMessage={''} sandMassage={(value)=>{popupState(value)}}/>,
                                        '취소', ()=>{}, 
                                        '추가', ()=>{ return popupConfirm(); }) }
    */
    callPromptPopup(style, component, leftBtnText, leftBtnFunc, rightBtnText, rightBtnFunc){
        const container = document.createElement('div');
        container.setAttribute('id','prompt-popup-container');
        if(document.getElementById('prompt-popup-container')){
            document.body.removeChild(document.getElementById('prompt-popup-container'));
            return;
        }
        document.body.appendChild(container);
        ReactDOM.render(<PromptPopup  style={style} component={component} show={true} 
                                                leftBtnText={leftBtnText} leftBtnFunc={leftBtnFunc} 
                                                rightBtnText={rightBtnText} rightBtnFunc={rightBtnFunc} />, container);
    }

}

export const PopupService = new _PopupService();
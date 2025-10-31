import React, { FC } from "react";
import ReactDOM from 'react-dom/client';


class PopupClass  {

    execPopupDOM:any = null;

    createPopup () {

        const createDiv = document.createElement('div');
        createDiv.id = "adminPopup";
        const root = ReactDOM.createRoot(
            document.getElementById('adminPopup') as HTMLElement
        );
        root.render(
            <div></div>
        );
        this.execPopupDOM = root;

    }

    deletePopup () {

        if (this.execPopupDOM) {
            this.execPopupDOM.unmount();
        }
        if (document.getElementById("adminPopup")) {
            document.getElementById("adminPopup").remove(); 
        }
    }
}

const PopupLibrary = new PopupClass();
export default PopupLibrary;
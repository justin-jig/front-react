import React, { FC } from "react";
import './Default.scss'


/** */
import Gridlayout from "../../../components/gridlayout/Gridlayout";


const Default:FC = () => {


    return (
        <div className="Default_box">
            <div className="page_header">
                <h5>Default</h5>
            </div>
            <Gridlayout/>
        </div>
    )
}

export default Default
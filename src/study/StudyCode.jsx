import React from 'react';

/** class */
import ClassComponent from './jsx/ClassComponent'
import ClassState from './class/ClassState';
import LifeCycleClass from './class/LifeCycleClass';

/** functional */
import FunctionComponent from './jsx/FunctionComponent';
import ToggleFunction from './functional/ToggleFunction';
import LifeCycleFunc from './functional/LifeCycleFunc';

/**css */
import './Study_code.css'

const StudyCode = () => {

    return ( 
        <div className='study_code_wrap'>
            {/* <ClassComponent/> */}
            {/* <ClassState/> */}
            {/* <LifeCycleClass/> */}

            {/* <FunctionComponent/> */}
            {/* <ToggleFunction/> */}
            <LifeCycleFunc/>
        </div>
    )

}
export default StudyCode
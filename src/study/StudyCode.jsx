import React from 'react';

/** class */
import ClassComponent from './jsx/ClassComponent'
import ClassState from './class/ClassState';
import LifeCycleClass from './class/LifeCycleClass';
import ClassRef from './class/ClassRef';

/** functional */
import FunctionComponent from './jsx/FunctionComponent';
import ToggleFunction from './functional/ToggleFunction';
import LifeCycleFunc from './functional/LifeCycleFunc';
import {UseRefSample } from './functional/UseRefSample';
import UseMemoSample from './functional/UseMemoSample';
import UseCallbackSample from './functional/UseCallbackSample';
import UseReducerSample from './functional/UseReducerSample';

/**css */
import './Study_code.css';

const StudyCode = () => {

    return ( 
        <div className='study_code_wrap'>
            {/* <ClassComponent/> */}
            {/* <ClassState/> */}
            {/* <LifeCycleClass/> */}
            {/* <ClassRef/> */}

            {/* <FunctionComponent/> */}
            {/* <ToggleFunction/> */}
            {/* <LifeCycleFunc/> */}
            {/* <UseRefSample/> */}
            {/* <UseMemoSample/> */}
            <UseCallbackSample/>
            {/* <UseReducerSample/> */}
        </div>
    )

}
export default StudyCode
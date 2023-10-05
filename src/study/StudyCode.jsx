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

/** functional Style */
import CSSStyle from './style/css/Style';
import SassComponet from './style/scss/SassComponet';
import StyledComponent from './style/styleComponent/StyledComponent';

/** react-router */
import BrowserRouterComponent from './router/browser/BrowserRouter';
import CreateBrowserRouterComponet from './router/createBrowser/CreateBrowserRouter';

/** third party */
import ReactHookForm from './library/hooks/ReactHookForm';

/** store */
import ContextCom from './store/context/ContextCom'



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
            {/* <UseCallbackSample/> */}
            {/* <UseReducerSample/> */}
            {/* <CSSStyle/> */}
            {/* <SassComponet/> */}
            {/* <StyledComponent/> */}
            {/* <BrowserRouterComponent/> */}
            {/* <CreateBrowserRouterComponet/> */}
            {/* <ReactHookForm/> */}
            <ContextCom/>
        </div>
    )

}
export default StudyCode
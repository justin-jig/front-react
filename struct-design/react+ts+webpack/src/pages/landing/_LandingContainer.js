import React, { useState } from 'react'


/** module import */
import { Route, Switch } from 'react-router-dom';

/**import Layout  */
import {LandingLayout} from '../../components/_layout/Layout.component.jsx';

/**template import */
import SignIn from './SignIn'


/**
 * 
 * @param {*} props 
 */

const _LandingContainer = (props) => {



    return(
            <LandingLayout>
                        <Switch>
                            <Route path='/' exact component={SignIn}></Route>
                        </Switch>
            </LandingLayout>
    )
}

export default _LandingContainer
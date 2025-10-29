import React from 'react'


/** module import */
import { Route, Switch } from 'react-router-dom';

/**import Layout  */
import { PlatformLayout } from '../../components/_layout/Layout.component.jsx';

import Home from './Home'
import About from './About'

/**
 * 
 * @param {*} props 
 */

const _PlatformContainer = (props) => {


    return ( 
            <PlatformLayout>
                    <Switch>
                        <Route path='/' exact component={Home}></Route>
                        <Route path='/about' exact component={About}></Route>
                    </Switch>
            </PlatformLayout>
        )
}

export default _PlatformContainer
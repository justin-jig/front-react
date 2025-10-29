import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Cookies from 'js-cookie';

/**page */
import Landing from './landing/_LandingContainer';
import Platform from './platform/_PlatformContainer' ;
import NotFound from '../components/teamplates/common/notFound/NotFound.jsx';

/**Landing component */
import _SignIn from './landing/SignIn';
/**Platform component */


// page 

class Router extends Component {

    constructor(props){
        super(props);
    }
    loginUser = Cookies.get('etk') ? true : false;
    static getDerivedStateFromError(error) {
        // 다음 렌더링에서 폴백 UI가 보이도록 상태를 업데이트 합니다.
        return { hasError: true };
    }
    componentDidCatch(err) {
        console.log('runtime Err : ', err);
    }

    render() {
        if(!this.loginUser) {
            return (

                    <Switch>
                            <Route path='/' exact component={Landing}></Route>
                             {/* 매칭되는 컴포넌트가 없을 때 NotFound Component 출력 */}
                            <Route component={NotFound}></Route>
                    </Switch>

            )
        } 
        else {
            return (

                    <Switch>
                        <Route path='/' exact component={Platform}></Route>
                        <Route path='/about' exact component={Platform}></Route>
                        {/* 매칭되는 컴포넌트가 없을 때 NotFound Component 출력 */}
                        <Route component={NotFound}></Route>
                    </Switch>
  
            )
        }
    }
}
export default withRouter(Router);
import React from 'react';

/** import modules */
import { createBrowserRouter, RouterProvider, RouteObject } from "react-router-dom";

/** page Componets */
import Home from './home/Home';
import Login from './login/Login';
import Signup from './signup/Signup';
import Dashbord from './dashboard/Dashboard';

/** elements Components */
import Default from '../elements/dashboard/default/Default';


// 비 로그인
const unAuthenticationRoute:RouteObject[] =[
    {
        path : '/login',
        element : <Login/>,
    },
    {
        path : '/signup',
        element : <Signup/>,
    }
] 

// 로그인
const AuthenticationRoute:RouteObject[] = [
    {
        path : '/',
        element : <Home/>,
        children: [
            {
                path : '/dashboard',
                element : <Dashbord/>,
                children: [
                    {
                        path :'default',
                        element: <Default/>
                    },
                ]
            },
        ]
    }
]

const router = createBrowserRouter([...unAuthenticationRoute, ...AuthenticationRoute])

export default function App () {

  return (
      <>  
          <RouterProvider router={router}/>
      </>
  )
} 

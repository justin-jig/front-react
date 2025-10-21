import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"

import Header from "./components/header/Header";

import {Student , KDT, Codingon, New } from './components/student/Student';

const router = createBrowserRouter([

    {
        path : '/',
        element : <App/>,
    },
    {
        path : '/student',
        element : <Student/>,
        children: [
            {
                path :'kdt',
                element: <KDT/>
            },
            {
                path :'codingon',
                element: <Codingon/>
            },
            {
                path :'new',
                element: <New/>
            }
        ]
    }
])



function App () {

    return (
        <>
            <Header/>
            <Outlet/>
        </>
    )
}

export default function Practice1 () {

    return (
        <>  
            <RouterProvider router={router}/>
        </>
    )
} 
import { createBrowserRouter, RouterProvider , Outlet} from 'react-router-dom'

import Header from "../component/Header";
import Home from "../component/Home";
import About from "../component/About";
import User from "../component/User";
import Redirect from "../component/Redirect";
import UserDetail from "../component/UserDetail";
import NotFound from "../component/NotFound";
import Error from '../component/Error'
import Comment from '../component/Comment';


const App = () => {

    return (
        <>
            <Header/>
            <Outlet/>
        </>
    )
}

const Router = createBrowserRouter([

    {
        path:'/',
        element:<App/>,
        children: [
            {   
                path:'',
                element: <Home/>,
                errorElement : <Error/>
            },
            {   
                path:'about',
                element: <About/>,
                errorElement : <Error/>
            },
            {   
                path:'redirect',
                element: <Redirect/>,
                errorElement : <Error/>
            },
        ],
        errorElement : <NotFound/>
    },
    {
        path: '/user',
        element: <App/>,
        children: [
            {   
                path:'',
                element: <User/>,
                errorElement : <Error/>
            },
            {   
                path:':userId',
                element: <UserDetail/>,
                children: [
                    {   
                        path:'comment',
                        element: <Comment/>,
                        errorElement : <Error/>
                    },
                ],
                errorElement : <Error/>
            },
        ]

    }
])

const CreateBrowserRouter = () => {
    
    return (
        <RouterProvider router={Router}/>
    )
}

export default CreateBrowserRouter
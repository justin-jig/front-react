import { useState } from "react";
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from "../component/Header";
import Home from "../component/Home";
import About from "../component/About";
import User from "../component/User";
import Redirect from "../component/Redirect";
import UserDetail from "../component/UserDetail";
import NotFound from "../component/NotFound";
export default function BrowserRouterComponent() {

    return (
        <div>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/about" element={<About/>}></Route>
                    <Route path="/user" element={<User/>}></Route>
                    <Route path="/user/:userId" element={<UserDetail/>}></Route>
                    <Route path="/redirect" element={<Redirect/>}></Route>
                    <Route path="*" element={<NotFound/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
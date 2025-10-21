import { useState } from "react";
import { Link } from 'react-router-dom';

export default function Header() {

    return (
        <div>
            <p>React-router Link</p>
            <ul>
                <li> <Link to='/'>home</Link></li>
                <li> <Link to='/about'>about</Link></li>
                <li> <Link to='/user'>user</Link></li>
            </ul>
            <p>a태그</p>
            <ul>
                <li><a href="/">home</a></li>
                <li><a href="/about">about</a></li>
                <li><a href="/user">user</a></li>
            </ul>
        </div>
    )

}
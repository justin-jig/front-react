import { Link } from "react-router-dom";
import './Header.scss'

export default function Header () {

    return (
        <header>  

            <h1><Link to="/">ReactRouter 실습</Link></h1>
         
            <nav>
                <ul>
                    <li style={{margin:'4px'}}>
                        <Link to="/student/kdt">학생Kdt</Link>
                    </li>
                    <li style={{margin:'4px'}}>
                        <Link to="/student/codingon">코딩온</Link>
                    </li>
                    <li style={{margin:'4px'}}>
                        <Link to="/student/new?name=kdt3rd">searchParams</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
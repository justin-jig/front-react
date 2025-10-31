import React, { FC, useState } from "react";
import './AdminLayout.scss';

/** import modules */
import { Link } from "react-router-dom";

/** import Components */
import Header from "../header/Header";
import Footer from "../footer/Footer";
import NavBar from "../navbar/Navbar";

/** import define */
import { MenuNavigationDefine } from "../../_common/define/MenuDefine"

interface LayoutProps {

    children:React.ReactElement | null // 자식 컴포넌트

}
const Layout:FC<LayoutProps> = ({children}) => {

    /** 모바일 화면일 때 메뉴 토글 */
    const [mobileMenuToggle, setMobileMenuToggle] = useState<boolean>(false);

    const mobileMenuToggleFunc = () => {
        setMobileMenuToggle((prev) => !prev);
    }

    return (
        <div className="Admin_wrap">
            <nav className="Admin_navigation">
                <div className="logo_box">
                    <Link to={'/'}>
                        IT Clab
                    </Link>
                </div>
                <NavBar mobileMenuToggle={mobileMenuToggle} 
                        mobileMenuToggleFunc={mobileMenuToggleFunc}
                        menuDefineList={MenuNavigationDefine}/>
            </nav>
            <header className="Admin_Header">
                <Header mobileMenuToggleFunc={mobileMenuToggleFunc}/>
            </header>
            <main className="Admin_main">
                {children}
                <Footer/>
            </main>
        </div>
    )
}

export default Layout
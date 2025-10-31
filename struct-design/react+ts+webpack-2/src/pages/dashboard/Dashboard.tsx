import React, { FC } from "react";

/** import modules */
import { Outlet } from "react-router-dom"

/** Layout component */
import AdminLayout from "../../components/layout/AdminLayout";


const Dashbord:FC = () => {

    return (
        <AdminLayout>
            <Outlet/>
        </AdminLayout>
    )
}

export default Dashbord
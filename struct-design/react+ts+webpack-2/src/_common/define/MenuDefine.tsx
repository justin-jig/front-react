
import { FaBorderAll } from "react-icons/fa";


export type MenuNavigationItemDefineType = {
    path:string,
    name:string,
    icon:React.ReactElement,
    children: {
        path:string,
        name:string
    }[]
}
export type MenuNavigationListDefineType = MenuNavigationItemDefineType[];


export const MenuNavigationDefine = [
    {
        path : '/dashboard',
        name : "Dashboard",
        icon : <FaBorderAll/>,
        children: [
            { path :'/dashboard/default', name: "defalut"},
            { path :'#', name: "test1"},
        ]
    }
]
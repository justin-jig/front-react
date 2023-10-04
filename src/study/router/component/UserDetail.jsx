import { useState } from "react";
import { Link, useParams, Outlet } from "react-router-dom";
import { users } from "./User";
export default function UserDetail() {

    const { userId } = useParams();
    
    console.log('userId', userId);

    return (
        <div>
            {/* 사용자 {userId}는 {users[(Number(userId)-1)]} */}
            사용자 {userId}는 
            {`${users[(Number(userId)-1)].name}`}
            <Link to='comment'>comment</Link>
            <Outlet context={ {users: users[(Number(userId)-1)] }} />
        </div>
    )

}
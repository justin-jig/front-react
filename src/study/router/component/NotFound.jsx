import { useState } from "react";
import { Link } from "react-router-dom";

export default function NotFound() {

    return (
        <div>
            NotFound
            <div><Link to={'/redirect'}> 홈으로 가기 </Link></div>
        </div>
    )

}
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Error() {

    return (
        <div>
            error page
            <div><Link to={'/redirect'}> 홈으로 가기 </Link></div>
        </div>
    )

}
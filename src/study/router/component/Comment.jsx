import { useState } from "react";
import { useOutletContext } from "react-router-dom";

export default function Comment() {
    const ctx = useOutletContext();
    console.log(ctx);
    return (
        <div>
            <ul>
                {ctx && ctx.users && ctx.users.comment&& ctx.users.comment.map((value,idx) => {
                    return (
                        <li>{value.text}</li>
                    )
                })}

            </ul>
        </div>
    )
}
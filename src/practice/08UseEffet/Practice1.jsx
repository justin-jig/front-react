import React, { useState, useEffect } from 'react';
import { fakePosts } from './fakeData';
import './practice.css';

const Practice1 = () =>{

    const [loading, setLoading] = useState(true);
    const [postList, setPostList] = useState([]);

    useEffect(() => {
        setPostData();
    },[])

    const setPostData = () => {
        return setTimeout(() => {
            setPostList([...fakePosts]);
            setLoading(false)
        },[3000])
    }

    return (
        <div className='useEffect_practice1_box1'>
            <header>🧾 Post List</header>
            <main>
                {loading ?  
                    <div className='loading_box'>loading<span>...</span></div>
                :
                    postList.map((obj,idx) => {
                        return (
                            <div key={idx} className='post_item_box'> 
                                <div className='list_title'>
                                    <span>No {idx + 1}</span> 
                                    <h5>{obj.title}</h5>
                                </div>
                                <div className='list_content'>{obj.body}</div>
                            </div>
                        )
                    })
                }
            </main>
        </div> 
    )
}

export default Practice1
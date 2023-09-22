import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';


const UserList = (props) => {

    const {newUserList, setNewUserList } = props;
    const [userList, setUserList] = useState([]);
    const [loading, setLoading] = useState(true);

    const nameRef = useRef();
    const emailRef = useRef();

    useEffect(() => {

        getUserData();
        return () => {
            console.log('연결 해제 완료');
            setLoading(false);
        }
    }, [])

    useEffect(() => {

        if (userList.length != 0 ) {
            console.log('유저 정보 업데이트', userList.length);
        }

    },[userList])

    const getUserData = async () => {

        try {
            let resList = [];
            const res = await axios({
                method:'GET',
                url : 'https://jsonplaceholder.typicode.com/users'
            })  
            if (res.status === 200 && res.data) {
                resList = await [...res.data, ...newUserList ];
            }   

            setUserList(resList);
            setLoading(false);
       
        } catch (e) {
            setLoading(false)
        }
    }

    const userRegister = () => {

        if (nameRef.current.value === "") return alert('이름을 입력해주세요.');

        let exptext = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
        if (!exptext.test(emailRef.current.value)) return alert("이메일을 입력해주세요.");


        const user = {
            id : userList.length + 1,
            email : emailRef.current.value ,
            name : nameRef.current.value
        }
        setUserList( () => [...userList, ...[user]])
        setNewUserList([user]);
        nameRef.current.value = "";
        emailRef.current.value = "";

    }   
    
    return (
        <>  
            {loading ? 
                <div className='loading-box'>Loading ...</div>
                :
                <>
                <div style={{marginBottom:'20px'}}>
                    {userList.map((obj, idx) => {
                            return (
                            <div key={idx} className='user-list-box'>
                            <span>{obj.name}</span>
                            <span>-</span>
                            <span>{obj.email}</span>
                        </div>)
                    })}
                </div>
                <div className='user-list-register' >
                    <input type="text" ref={nameRef} placeholder='이름을 입력해주세요...'/>
                    <input type="text" ref={emailRef} placeholder='email을 입력해주세요..'/>
                    <button onClick={() => userRegister()}> 등록</button>
                </div>
               </>
            }
        </>
    )

}


const Practice2 = () => {

    const [view, setView] = useState(false);
    const [newUserList, setNewUserList] = useState([]);

    const changeView = () => {
        setView(!view)
    }

    const updateuerList = (data) => {
        setNewUserList(...newUserList, ...[data]);
    }

    return (
        <div className='useEffect_practice1_box2'>
            <button onClick={() => changeView()}> ON/OFF</button>
            {view && <UserList newUserList={newUserList} setNewUserList={(data) => updateuerList(data)}/>}
        </div>
    )

}
export default Practice2
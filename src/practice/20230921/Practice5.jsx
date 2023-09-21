import React, { useState, useRef } from 'react';


const Practice5 = () => {

    const [scheduleList, setScheduleList] = useState([]); // schedule List
    const scheduleInputRef = useRef(); // schedule ref

    let checkedSchedules = [];

    const createSchedule = () => { // schedule create
        if (scheduleInputRef.current.value === "") return alert('할일을 입력해주세요.');
        const schedules = [...scheduleList];
        schedules.push({
            idx : schedules.length + 1,
            content : scheduleInputRef.current.value
        });
        setScheduleList(schedules);
        scheduleInputRef.current.value = "";

        if (scheduleList.length === 10) {
            alert('너무 많은 스케줄이 등록되었습니다.');
        } else {
            alert('등록이 완료되었습니다.');
        }
       
    }

    const checkSchedule = (e, idx) => {

        if (e.target.checked === true) {
            checkedSchedules.push({idx:idx, dom:e});
        } else if (e.target.checked === false) {
            checkedSchedules = checkedSchedules.filter((value) => value.idx != idx);
        }
    
    }

    const deleteSchedules = () => {

        if (checkedSchedules.length === 0) return;
        const schedules = [...scheduleList];

        checkedSchedules.sort(( a, b ) => {
           return a.idx - b.idx
        })

        for (let i = 0; i < checkedSchedules.length; i++){ 
            checkedSchedules[i].dom.target.checked = false;
            schedules.splice(Number(checkedSchedules[i].idx - i) < 0 ?  0 : Number(checkedSchedules[i].idx - i), 1); 
        }

        schedules.forEach((value,idx) => {
            value.idx = idx;
        })
        console.log('schedules', schedules)
        checkedSchedules = [];
        setScheduleList(schedules);
    }
    
    
    return (
        <div className='practice3_0921_box_5'>
            <div className='schedule_regist_box'>
                <input type="text" placeholder='할일 입력...' 
                        ref={scheduleInputRef}
                        onKeyPress={(e)=> e.key === 'Enter' ? createSchedule() :''}
                />
                <button onClick={() => createSchedule()}>등록</button>
            </div>
          
            <ul className='schedule_list_ul'> 
                {scheduleList.length > 0 ? 
                    scheduleList.map((obj, idx) => {
                        return (
                            <li key={idx}> <input type="checkbox" defaultChecked={false} onClick={(e) => checkSchedule(e,idx)} /> <span>{obj.content}</span> </li>
                        )
                    })
                    :
                    <li className='none_data'> 스케줄 없음 </li>
                }
            </ul>
            <div>
                <button onClick={() => deleteSchedules()}> 완료된 버튼 삭제하기 </button>
            </div>
        </div>
    )

}

export default Practice5
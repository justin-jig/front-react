import { useState, useRef } from 'react';


const Practice5Ver2 = () => {

    const [scheduleList, setScheduleList] = useState([]); // schedule List
    const scheduleInputRef = useRef(); // schedule ref

    const createSchedule = () => { // schedule create
        if (scheduleInputRef.current.value === "") return alert('할일을 입력해주세요.');
        const schedules = [...scheduleList];
        schedules.push({
            id : Date.now(),
            content : scheduleInputRef.current.value,
            checked: false
        });
        setScheduleList(schedules);
        scheduleInputRef.current.value = "";

        if (scheduleList.length === 10) {
            alert('너무 많은 스케줄이 등록되었습니다.');
        } else {
            alert('등록이 완료되었습니다.');
        }
       
    }

    const checkSchedule = (id) => {

        setScheduleList(
            scheduleList.map((schedule) => {
                console.log(schedule);
                return schedule.id === id ? {...schedule, checked:!schedule.checked } : schedule;                
            })
        )
    
    }

    const deleteSchedules = () => {
        const result = scheduleList.filter((value) => value.checked === false);
        setScheduleList(result)
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
                            <li key={obj.id}> <input type="checkbox" defaultChecked={obj.checked} 
                                onClick={(e) => checkSchedule(obj.id)} /> <span>{obj.content}</span> </li>
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

export default Practice5Ver2
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';


import TodoItem from './TodoItem';

export default function Main () {
    const dispatch = useDispatch();
    const [text, setText] = useState('');

    // useSelect() : 리덕스 store의 state를 조회
    // 인자로 콜백함수, 콜백함수의 매개변수로 state를 받을 수 있음.
    // 자동ㅇ으로 subscribe를 하고 있기 때문에 데이터가 변형되면 컴포넌트가 재실행
    const todos = useSelector( (state) => state);
    console.log('todos', todos);

    const addTodo = () => {
        if (text === '') return;
        dispatch({type : 'ADD', value:text});
        setText('');
    }

    const deleteTodo = (id) => {
        dispatch({type : 'DELETE', value: Number(id)});
    }

    return (
        <div className='todo-wrap'>
            <h2 className='todo-title'> To Dos</h2>
            <div className="todo-input_box">
                <input type="text" value={text} 
                        onKeyDown={(e) => e.key === 'Enter' ?  addTodo() : ''}
                        onChange={(e) => setText(e.target.value)}/>
                <button onClick={() => addTodo()}>add</button>
            </div> 
            <ul className='todo-list_ul'>
                {todos.map((data, idx) => {
                    return <TodoItem key={idx} data={data} deleteTodo={deleteTodo}/>
                })}
            </ul>
        </div>
    )
}

export default function TodoItem ({data, deleteTodo}) {

    return (

        <li>{data.value} <button id={data.id} onClick={() => deleteTodo(data.id)}> 삭제 </button></li>
    )
}
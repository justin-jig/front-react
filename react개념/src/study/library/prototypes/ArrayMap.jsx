
const ArrayMap = () => {


    /*** 
        • map()의 인자로 넘겨지는 callback 함수를 실행한 결과를 가지고 새로
         운 배열을 만들 때 사용. 
        • map() 함수를 필요에 따라 반복문처럼 사용할 수도 있음.
     */
    const lists = [
        'k','d','t','w','e','b'
    ];

    return (
        <>  
            {lists.map((value, id) => {
                return <div key={id}> hellow2 {value}</div>
            })}
        </>
    )
}

export default ArrayMap
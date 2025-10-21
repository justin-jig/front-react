
const Practice5 = () => {

    let flag = true;
    const users = [
        { id:1, name:"John", age:25, vip:true },
        { id:2, name:"Jane", age:19, vip:false },
        { id:3, name:"Alice", age:30, vip:true },
        { id:4, name:"Bob", age:18, vip:false },
        { id:5, name:"Charlie", age:35, vip:true },
    ];

    const vipFilter = users.filter((x) => {
        return  x.vip === true
    })

    const toggle = (e) => {
        console.log(e);
    }

    return (
        <>
            {flag && (
                <div style={{padding:'50px'}}>
                    {vipFilter.map((index) => {
                        return <div key={index.id}> {index.name}</div>
                    })}
                   
                </div>
            )}
            <button onClick={(e) => toggle(e)}>버튼</button>
        </>
    ) 
}

export default Practice5
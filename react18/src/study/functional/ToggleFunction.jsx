import {useState} from "react"


const ToggleFunction = () => {

    const [view, setView] = useState(true);

    const ChangeViewEvent = () => {
        
        setView(!view);

    }
    
    return (

        <div>
            <button onClick={() => {ChangeViewEvent()}}>토글</button> 
            <p style={view ? {display:'block'} : {display:'none'}}>보여라</p>
        </div>
    )

}

export default ToggleFunction
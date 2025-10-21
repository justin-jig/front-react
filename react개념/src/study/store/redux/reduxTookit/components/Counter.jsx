
import { useSelector, useDispatch } from "react-redux" 
import { conterActions } from '../store/counter'

export default function Counter () {

    const counter = useSelector((state) => state.count.count);
    const dispatch = useDispatch();

    const add = () => {
        dispatch(conterActions.increment());
    }
    const minus = () => {
        dispatch(conterActions.decrement());
    }
    const calc = () => {
        dispatch(conterActions.calc({plus:2}));
    }

    return (
        <div>
                <h2>{counter}</h2>
                <button onClick={() => add()}>add</button>
                <button onClick={() => minus()}>minus</button>
                <button onClick={() => calc()}>calc</button>
        </div>
    )
}
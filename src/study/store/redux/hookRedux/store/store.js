import { createStore } from 'redux';


// 리듀서
const reducer = (state = [], action) => {
    console.log(state,action)

    switch(action.type) {
        case 'ADD':
          const copy = [...state];
          copy.unshift({value:action.value, id:Date.now()})
        return copy
        case 'DELETE' :
        const copy2 = state.filter((x) => x.id !== action.value);
        console.log('copy2', copy2)
        return copy2
        default :
            return state;
    }
}
const store = createStore(reducer);


export default store
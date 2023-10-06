import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    count : 10
}

//createSlice(): 리듀서와 액션을 함께 생성하는 함수
const counterScice = createSlice({
    name:'counter',
    initialState : initialState,
    reducers: {
        increment(state) {
            state.count++;
        },
        decrement(state) {
            state.count--;
        },
        calc(state,action) {
            console.log('action',action)
            const {plus} = action.payload
            state.count =  state.count + plus
        }
    }
});


export const conterActions = counterScice.actions;
export default counterScice.reducer
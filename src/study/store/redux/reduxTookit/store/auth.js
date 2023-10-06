import { createSlice } from '@reduxjs/toolkit';

const initAuth = {
    lsLogin : false
}

const AuthSlice = createSlice({
    name:'auth',
    initialState : initAuth,
    reducers: {
        login(state) {
            state.lsLogin = true;
        },
        logout(state) {
            state.lsLogin = false;
        },
    }
})

export const authActions = AuthSlice.actions;
export default AuthSlice.reducer
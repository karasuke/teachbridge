import { createSlice } from '@reduxjs/toolkit';

/*si no hay nada en el session storage, se crea un objeto con los valores por defecto*/
const initialLogin = JSON.parse(sessionStorage.getItem("login")) || {
    isAuth: false,
    isAdmin: false,
    user: undefined,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState: initialLogin,

    reducers: {
        onLogin: (state, action) => {
            state.isAuth = true;
            state.isAdmin = action.payload.isAdmin;
            state.user = action.payload.user;


        },
        onlogout: (state) => {
            state.isAuth = false;
            state.isAdmin = false;
            state.user = undefined;
        },
    },
});
export const { onLogin, onlogout } = authSlice.actions;

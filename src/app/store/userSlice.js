import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    isAdmin: false,
};
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAdminStatus(state, action) {
            state.isAdmin = action.payload;
            console.log(state.isAdmin);
        },
        logout(state) {
            state.isAdmin = false;
        },
    },
});
export const { setAdminStatus, logout } = userSlice.actions;
export default userSlice.reducer;

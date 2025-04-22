import { createSlice } from '@reduxjs/toolkit';
const userSlice = createSlice({
    name: 'user',
    initialState: {
        isAdmin: false,
    },
    reducers: {
        setAdminStatus(state, action) {
            state.isAdmin = action.payload;
            console.log(state.isAdmin);
        },
    },
});
export const { setAdminStatus } = userSlice.actions;
export default userSlice.reducer;

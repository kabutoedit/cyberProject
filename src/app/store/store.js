import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slice';
import userReducer from './userSlice';
export const store = configureStore({
    reducer: {
        cart: cartReducer,
        user: userReducer,
    },
});

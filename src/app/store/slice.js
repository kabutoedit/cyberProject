import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    items: [],
    totalPrice: 0,
};
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProductToCart(state, action) {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += action.payload.quantity;
            }
            else {
                state.items.push(action.payload);
            }
            state.totalPrice += action.payload.price * action.payload.quantity;
        },
        removeProductFromCart(state, action) {
            const id = action.payload;
            const itemIndex = state.items.findIndex(item => item.id === id);
            if (itemIndex !== -1) {
                state.totalPrice -=
                    state.items[itemIndex].price * state.items[itemIndex].quantity;
                state.items.splice(itemIndex, 1);
            }
        },
        updateProductQuantity(state, action) {
            const { id, quantity } = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            if (existingItem) {
                const quantityChange = quantity - existingItem.quantity;
                existingItem.quantity = quantity;
                state.totalPrice += quantityChange * existingItem.price;
            }
        },
    },
});
export const { addProductToCart, removeProductFromCart, updateProductQuantity, } = cartSlice.actions;
export default cartSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
// слайс для управления состоянием корзины
const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalQuantity: 0,
        totalPrice: 0,
    },
    reducers: {
        // добавление товара в корзину
        addProductToCart(state, action) {
            // находим существующий (продукт)
            const existingItem = state.items.find(item => item.id === action.payload.id);
            // если он найден мы увеличиваем его количество на 1, общее количество товаров и общую сумму
            if (existingItem) {
                existingItem.quantity += 1;
                state.totalQuantity += action.payload.quantity;
                state.totalPrice += action.payload.quantity * action.payload.price;
            }
            // в противном же случае просто добавляю его в корзину и увеличивю общее количество товаров и общую сумму
            else {
                state.items.push(action.payload);
                state.totalQuantity += action.payload.quantity;
                state.totalPrice += action.payload.quantity * action.payload.price;
            }
        },
        // удаление товара из корзины
        removeProductFromCart(state, action) {
            const itemIndex = state.items.findIndex(item => item.id === action.payload);
            if (itemIndex !== -1) {
                state.totalQuantity -= state.items[itemIndex].quantity;
                state.totalPrice -=
                    state.items[itemIndex].price * state.items[itemIndex].quantity;
                state.items.splice(itemIndex, 1);
            }
        },
        // управление количеством товара
        updateProductQuantity(state, action) {
            const { id, quantity } = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            if (existingItem) {
                const quantityChange = quantity - existingItem.quantity;
                existingItem.quantity = quantity;
                state.totalQuantity += quantityChange;
                state.totalPrice += quantityChange * existingItem.price;
                if (existingItem.quantity <= 0) {
                    state.items = state.items.filter(item => item.id !== id);
                }
            }
        },
    },
});
export const { addProductToCart, removeProductFromCart, updateProductQuantity, } = cartSlice.actions;
export default cartSlice.reducer;

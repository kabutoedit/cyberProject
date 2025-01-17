import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CartItem {
	id: number
	img: string
	name: string
	price: number
	quantity: number
}

interface CartState {
	items: CartItem[]
	totalQuantity: number
	totalPrice: number
}

const initialState: CartState = {
	items: [],
	totalQuantity: 0,
	totalPrice: 0,
}

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addProductToCart(state, action: PayloadAction<CartItem>) {
			const existingItem = state.items.find(
				item => item.id === action.payload.id
			)

			if (existingItem) {
				existingItem.quantity += action.payload.quantity
			} else {
				state.items.push(action.payload)
			}

			state.totalQuantity += action.payload.quantity
			state.totalPrice += action.payload.price * action.payload.quantity
		},

		removeProductFromCart(state, action: PayloadAction<number>) {
			const id = action.payload
			const itemIndex = state.items.findIndex(item => item.id === id)

			if (itemIndex !== -1) {
				state.totalQuantity -= state.items[itemIndex].quantity
				state.totalPrice -=
					state.items[itemIndex].price * state.items[itemIndex].quantity

				state.items.splice(itemIndex, 1)
			}
		},
		updateProductQuantity(
			state,
			action: PayloadAction<{ id: number; quantity: number }>
		) {
			const { id, quantity } = action.payload
			const existingItem = state.items.find(item => item.id === id)

			if (existingItem) {
				const quantityChange = quantity - existingItem.quantity
				existingItem.quantity = quantity

				state.totalQuantity += quantityChange
				state.totalPrice += quantityChange * existingItem.price
			}
		},
	},
})

export const {
	addProductToCart,
	removeProductFromCart,
	updateProductQuantity,
} = cartSlice.actions

export default cartSlice.reducer

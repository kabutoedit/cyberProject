import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// типизация состояния пользователя
interface UserState {
	isAdmin: boolean
}

const initialState: UserState = {
	isAdmin: false,
}

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setAdminStatus(state, action: PayloadAction<boolean>) {
			state.isAdmin = action.payload
			console.log(state.isAdmin)
		},
		logout(state) {
			state.isAdmin = false
		},
	},
})

export const { setAdminStatus, logout } = userSlice.actions

export default userSlice.reducer

import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface UserState {
	isAdmin: boolean
}

const userSlice = createSlice({
	name: 'user',
	initialState: {
		isAdmin: false,
	} as UserState,
	reducers: {
		setAdminStatus(state, action: PayloadAction<boolean>) {
			state.isAdmin = action.payload
			console.log(state.isAdmin)
		},
	},
})

export const { setAdminStatus } = userSlice.actions

export default userSlice.reducer

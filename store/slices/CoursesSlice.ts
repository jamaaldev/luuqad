import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  isSelected: null,
}

export const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    userSelectedCourse: (state, action) => {
      state.isSelected = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { userSelectedCourse } = coursesSlice.actions

export default coursesSlice.reducer

import type { RootState } from "@/store/index"
import { PayloadAction, createSlice } from "@reduxjs/toolkit"

// Define a type for the slice state
interface userSelectedState {
  isSelected: string
}

// Define the initial state using that type
const initialState: userSelectedState = {
  isSelected: "",
}

export const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    userSelectedCourse: (state, action: PayloadAction<string>) => {
      state.isSelected = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { userSelectedCourse } = coursesSlice.actions
// Other code such as selectors can use the imported `RootState` type
export const selectCourses = (state: RootState) => state.courses?.isSelected
export default coursesSlice.reducer

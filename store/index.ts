import { configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/dist/query"
import { Courses } from "./api/Courses"
import { answers } from "./slices/AnswerSlice"
import coursesReducer from "./slices/CoursesSlice"
import { leaderboard } from "./slices/LeaderBoardSlice"
import { points } from "./slices/PointSlice"
import { questions } from "./slices/QuestionSlice"
import { results } from "./slices/ResultSlice"
import { sections } from "./slices/SectionSlice"
import { units } from "./slices/UnitSlice"
import { user } from "./slices/UserSlice"
export const store = configureStore({
  reducer: {
    [units.reducerPath]: units.reducer,
    [sections.reducerPath]: sections.reducer,
    [questions.reducerPath]: questions.reducer,
    [results.reducerPath]: results.reducer,
    [user.reducerPath]: user.reducer,
    [answers.reducerPath]: answers.reducer,
    [points.reducerPath]: points.reducer,
    [leaderboard.reducerPath]: leaderboard.reducer,
    [Courses.reducerPath]: Courses.reducer,
    courses: coursesReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({})
      .concat(units.middleware)
      .concat(sections.middleware)
      .concat(questions.middleware)
      .concat(results.middleware)
      .concat(user.middleware)
      .concat(answers.middleware)
      .concat(points.middleware)
      .concat(leaderboard.middleware)
      .concat(Courses.middleware),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

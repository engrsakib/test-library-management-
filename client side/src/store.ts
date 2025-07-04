import { configureStore } from '@reduxjs/toolkit'
import { bookApi } from './Redux/Api/baseApi'
import { borrowApi } from './Redux/Api/borrowApi'


export const store = configureStore({
  reducer: {
    
    [bookApi.reducerPath]:bookApi.reducer,
    [borrowApi.reducerPath]:borrowApi.reducer,
  
  },

  middleware:(getDeafultMiddleware) => getDeafultMiddleware().concat(bookApi.middleware).concat(borrowApi.middleware)


})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store
export default store;
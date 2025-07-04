import type { AppDispatch } from "@/store"
import type { RootState } from "@reduxjs/toolkit/query"
import { useDispatch, useSelector } from "react-redux"




export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
// export const useAppSelector = useSelector.withTypes<RootState>();
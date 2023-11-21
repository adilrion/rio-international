import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { MyThunkDispatch, RootState } from "./store";

export const useAppDispatch = () => useDispatch<MyThunkDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

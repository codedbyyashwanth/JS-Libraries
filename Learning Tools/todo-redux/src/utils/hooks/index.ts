import { useDispatch, useSelector } from "react-redux";
import type {TypedUseSelectorHook} from "react-redux";
import type { Dispatch, RootState } from "../store";

export const useTodoDispatch: () => Dispatch = useDispatch;
export const useTodoSelector: TypedUseSelectorHook<RootState> = useSelector;

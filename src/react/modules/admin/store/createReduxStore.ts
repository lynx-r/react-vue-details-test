import { CommonStore } from "@/core/CommonStore";
import { useAppDispatch, useAppSelector } from "@/react/hooks";
import initState from "@admin/presenter/initState";
import { State } from "@admin/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    value: initState(),
  },
  reducers: {
    updateState: (state, newState: PayloadAction<State>) => {
      state.value = newState.payload;
    },
    resetState: (state) => {
      state.value = initState();
    },
  },
  selectors: {
    selectSlice: (state) => {
      return state.value;
    },
  },
});

export const { updateState, resetState } = adminSlice.actions;
const { selectSlice } = adminSlice.selectors;

export const adminSliceReducer = adminSlice.reducer;

const createReduxStore = (): CommonStore<State> => {
  const dispatch = useAppDispatch();
  return {
    get state() {
      return useAppSelector((s) => selectSlice(s));
    },
    updateState(newState: State) {
      dispatch(updateState(newState));
    },
    resetState() {
      dispatch(resetState());
    },
  };
};

export default createReduxStore;

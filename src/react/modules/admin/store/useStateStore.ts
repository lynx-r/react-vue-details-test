import { CommonStore } from "@/core/CommonStore";
import { UseStateType } from "@/react/types";
import initState from "@admin/presenter/initState";
import { State } from "@admin/types";

const store = ([
  state,
  dispatchFunc,
]: UseStateType<State>): CommonStore<State> => ({
  state,
  updateState(newState: State) {
    dispatchFunc((curState) => ({ ...curState, ...newState }));
  },
  resetState() {
    dispatchFunc(initState());
  },
});

export function useStateStoreAdmin(state: UseStateType<State>) {
  return store(state);
}

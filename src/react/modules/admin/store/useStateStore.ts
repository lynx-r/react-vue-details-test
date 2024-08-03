import { UseStateStore, UseStateType } from "@/react/types";
import initState from "@admin/presenter/initState";
import { State } from "@admin/types";

const store: UseStateStore<State> = ([state, dispatchFunc]: State) => ({
  _state: state,
  innerState: state,
  updateState(newState: State) {
    dispatchFunc((curState) => ({ ...curState, ...newState }));
  },
  resetState() {
    dispatchFunc(initState());
  },
});

export function useStateStoreAdmin(state: UseStateType) {
  return store(state);
}

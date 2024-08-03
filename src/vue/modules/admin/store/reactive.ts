import { ReactiveState, ReactiveStore } from "@/vue/types";
import { reactive } from "vue";
import initState from "../presenter/initState";
import type { State } from "../types";

const createReactiveStore: ReactiveStore<State> = () => {
  const state = reactive<ReactiveState<State>>({ value: initState() });
  return {
    _state: state as unknown as State,
    innerState: () => {
      return state.value;
    },
    updateState(newState: State) {
      state.value = newState;
    },
    resetState() {
      state.value = initState();
    },
  };
};

export default createReactiveStore;

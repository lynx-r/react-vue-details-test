import { CommonStore } from "@/core/CommonStore";
import { ReactiveState } from "@/core/types";
import { reactive } from "vue";
import initState from "../presenter/initState";
import type { State } from "../types";

const createReactiveStore = (): CommonStore<State> => {
  const state = reactive<ReactiveState<State>>({ innerValue: initState() });
  return {
    state,
    stateValueProp: "innerValue",
    updateState(newState: State) {
      state.innerValue = newState;
    },
    resetState() {
      state.innerValue = initState();
    },
  };
};

export default createReactiveStore;

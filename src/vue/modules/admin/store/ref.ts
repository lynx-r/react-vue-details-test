import { CommonStore } from "@/core/CommonStore";
import { ref } from "vue";
import initState from "../presenter/initState";
import type { State } from "../types";

const createRefStore = (): CommonStore<State> => {
  const state = ref<State>(initState());
  return {
    state,
    stateValueProp: "value",
    updateState(newState: State) {
      state.value = newState;
    },
    resetState() {
      state.value = initState();
    },
  };
};

export default createRefStore;

import { RefStore } from "@/vue/types";
import { ref } from "vue";
import initState from "../presenter/initState";
import type { State } from "../types";

const createRefStore: RefStore<State> = () => {
  const state = ref<State>(initState());
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

export default createRefStore;

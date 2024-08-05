import type { CommonStore } from "@/core/CommonStore";
import { useStore } from "vuex";
import initState from "../presenter/initState";
import type { State, VuexAdminState, VuexState } from "../types";

const adminStore = {
  state: { value: initState() },
  mutations: {
    updateState(state: VuexState, newState: State) {
      state.value = newState;
    },
    resetState(state: VuexState) {
      state.value = initState();
    },
  },
};

export const createVuexStore = (): CommonStore<State> => {
  const store = useStore<VuexAdminState>();

  function updateState(newState: State) {
    store.commit("updateState", newState);
  }

  function resetState() {
    store.commit("resetState");
  }

  return {
    get state() {
      return store.state.admin.value;
    },
    updateState,
    resetState,
  };
};

export default adminStore;

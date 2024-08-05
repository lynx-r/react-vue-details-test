import type { CommonStore } from "@/core/CommonStore";
import { defineStore } from "pinia";
import { ref } from "vue";
import { initState } from "../presenter";
import type { State } from "../types";

export const usePiniaStore = defineStore("admin", (): CommonStore<State> => {
  const state = ref<State>(initState());
  function updateState(newState: State) {
    state.value = newState;
  }
  function resetState() {
    state.value = initState();
  }

  return {
    // todo find workaround for typecast
    state: state as unknown as State,
    updateState,
    resetState,
  };
});

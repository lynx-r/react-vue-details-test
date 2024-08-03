import type { CommonStoreInterface } from "@/core/CommonStoreInterface";
import { defineStore } from "pinia";
import { ref } from "vue";
import { initState } from "../presenter";
import type { State } from "../types";

export const usePiniaStore = defineStore(
  "admin",
  (): CommonStoreInterface<State> => {
    const state = ref<State>(initState());
    function updateState(newState: State) {
      state.value = newState;
    }
    function resetState() {
      state.value = initState();
    }

    return {
      _state: state as unknown as State,
      innerState: state as unknown as State,
      updateState,
      resetState,
    };
  }
);

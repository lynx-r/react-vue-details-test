import type { CommonStore } from "./CommonStore";
import { StateObject } from "./types";

export abstract class CommonStoreAdapter<S extends object> {
  constructor(private store: CommonStore<S>) {}

  protected get state(): StateObject<S> {
    return this.store.state;
  }

  protected get stateValue(): S | undefined {
    const { stateValueProp, state } = this.store;
    if (stateValueProp && state) {
      const stateValue = state[stateValueProp];
      if (!stateValue) {
        console.assert("unspecified stateValueProp");
      }
      return stateValue;
    }

    // todo fix type
    return state as S;
  }

  protected updateState(newState: Partial<S> | S[keyof S]) {
    this.store.updateState(newState);
  }

  resetState() {
    this.store.resetState();
  }
}

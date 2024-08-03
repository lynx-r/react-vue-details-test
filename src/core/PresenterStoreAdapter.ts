import type { CommonStoreInterface } from "./CommonStoreInterface";

export abstract class CommonStoreAdapter<State> {
  constructor(private store: CommonStoreInterface<State>) {}

  protected get _state(): State {
    return this.store._state;
  }

  protected abstract get innerState(): State;

  protected updateState(newState: Partial<State> | State[keyof State]) {
    this.store.updateState(newState);
  }

  resetState() {
    this.store.resetState();
  }
}

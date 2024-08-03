import { merge } from "lodash";
import type { UpdatableState } from "./UpdatableState";

export class PresenterStoreAdapter<T> {
  constructor(private store: UpdatableState<T>) {}

  protected get state() {
    return this.store.state;
  }

  protected updateState(newState: Partial<T> | T[keyof T]) {
    const mergedState = merge(this.state, newState);
    this.store.updateState(mergedState);
  }

  resetState() {
    this.store.resetState();
  }
}

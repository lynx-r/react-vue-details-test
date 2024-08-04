import { StateObject, StoreAccessor } from "./types";

export interface CommonStore<S extends object> {
  stateValueProp?: StoreAccessor;

  get state(): StateObject<S>;

  updateState(newState: Partial<S> | S[keyof S]): void;
  resetState(): void;
}

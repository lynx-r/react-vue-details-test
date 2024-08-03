export interface UpdatableState<T> {
  state: T;

  updateState(newState: Partial<T> | T[keyof T]): void;
  resetState(): void;
}

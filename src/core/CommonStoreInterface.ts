export interface CommonStoreInterface<State> {
  get _state(): State;
  get innerState(): State;

  updateState(newState: Partial<State> | State[keyof State]): void;
  resetState(): void;
}

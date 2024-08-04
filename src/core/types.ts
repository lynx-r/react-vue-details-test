import { CommonStore } from "./CommonStore";

/**
 * Inside a reactive proxy of the object which is used for a store
 * it is required to specify an inner property that points to its inner value
 */
export type ReactiveStoreAccessor = "innerValue";

/**
 * Inside a ref object which is used for a store it is required to specify
 * an inner property value which points to its inner value
 */
export type RefStoreAccessor = "value";

export type StoreAccessor = ReactiveStoreAccessor | RefStoreAccessor;

export type ReactiveState<S> = Record<ReactiveStoreAccessor, S>;
export type RefState<S> = Record<RefStoreAccessor, S>;

export type StateObject<S extends object> =
  | {
      [valueAccessor in StoreAccessor]?: S;
    }
  | undefined;

export type GetState<T> = T extends StateObject<infer S> ? S : T;

export type ReactiveStore<S extends object> = () => CommonStore<S>;

export type RefStore<S> = () => CommonStore<RefState<S>>;

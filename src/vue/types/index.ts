import type { CommonStoreInterface } from "@/core/CommonStoreInterface";

export type ReactiveStoreAccessor = "value";

export type StoreAccessor = ReactiveStoreAccessor | "value";

export type ReactiveState<S> = Record<ReactiveStoreAccessor, S>;

export type ReactiveStore<S> = () => CommonStoreInterface<S>;

export type RefState<S> = Record<"value", S>;

export type RefStore<S> = () => CommonStoreInterface<RefState<S>>;
